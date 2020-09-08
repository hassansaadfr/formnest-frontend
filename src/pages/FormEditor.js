import React, { useState, useEffect } from 'react'
import Container from '../component/Container'
import { useParams, Redirect } from 'react-router-dom'
import axios from 'axios'
import Loading from '../component/Loading'
import FormEditorHeader from '../component/FormComponents/FormEditorHeader'
import NavHeaderCardForm from '../component/FormComponents/NavHeaderCardForm'
import QuestionCard from '../component/FormComponents/QuestionCard'
import AddQuestions from '../component/FormComponents/AddQuestions'
import FooterEditorForm from '../component/FormComponents/FooterEditorForm'
import ReponsesList from '../component/FormComponents/ReponsesList'
import { NotificationContainer, NotificationManager } from 'react-notifications'

const FormEditor = () => {
  let { id } = useParams()
  const [selectedView, setSelectedView] = useState('questions')
  const [nameForm, setNameForm] = useState('')
  const [loading, setLoading] = useState(true)
  const [questionsList, setQuestionsList] = useState([])
  const [redirect, setRedirect] = useState(false)

  const getForm = () => {
    axios
      .get(`https://formnest-backend-mt.herokuapp.com/form/${id}`)
      .then(response => {
        setNameForm(response.data.title)
      })
  }

  const getQuestions = () => {
    axios
      .get(`https://formnest-backend-mt.herokuapp.com/questions`)
      .then(response => {
        setQuestionsList(response.data.filter(value => value.form === id))
        setLoading(false)
      })
  }

  const changeNameForm = () => {
    axios.put(`https://formnest-backend-mt.herokuapp.com/form/${id}`, {
      title: nameForm
    })
    NotificationManager.success('Le formulaire a été renommé')
  }

  const deleteQuestion = questionId => {
    axios
      .delete(
        `https://formnest-backend-mt.herokuapp.com/question/${questionId}`
      )
      .then(() => {
        let array = questionsList
        array = array.filter(v => v._id !== questionId)
        NotificationManager.success('La question a été supprimé')
        setQuestionsList(array)
      })
  }

  const submitForm = async () => {
    await questionsList.forEach(({ _id, question, questionNumber }) =>
      axios.put(`https://formnest-backend-mt.herokuapp.com/question/${_id}`, {
        question,
        questionNumber
      })
    )

    getQuestions()
  }

  const deleteForm = () => {
    axios
      .delete(`https://formnest-backend-mt.herokuapp.com/form/${id}`)
      .then(response => {
        NotificationManager.success('Le formulaire a été supprimé')

        setRedirect(true)
      })
  }

  const handleChangeQuestion = (e, index) => {
    let array = questionsList
    array[index].question = e.target.value
    setQuestionsList(array)
  }

  const handleCreateQuestion = type => {
    const newQuestion = {
      type,
      question: '',
      questionNumber: String(questionsList.length + 1),
      form: id
    }
    axios
      .post(`https://formnest-backend-mt.herokuapp.com/question`, newQuestion)
      .then(res => {
        NotificationManager.info('La question à été créer')
        getQuestions()
      })
  }

  const handleChangeName = e => setNameForm(e.target.value)

  useEffect(() => {
    if (loading) {
      getForm()
      getQuestions()
    }
  })

  return loading ? (
    <Loading />
  ) : (
    <Container>
      <FormEditorHeader
        changeNameForm={changeNameForm}
        deleteForm={deleteForm}
        handleChangeName={handleChangeName}
        nameForm={nameForm}
      />
      {selectedView === 'questions' ? (
        <>
          <div
            style={{
              backgroundColor: '#E9F6F9',
              width: '100%',
              borderRadius: 8,
              minHeight: '400px',
              marginTop: 20,
              padding: 10
            }}
          >
            <NavHeaderCardForm
              selectedView={selectedView}
              setSelectedView={setSelectedView}
            />
            <QuestionCard
              deleteQuestion={deleteQuestion}
              handleChangeQuestion={handleChangeQuestion}
              questionsList={questionsList}
            />
            <AddQuestions handleCreateQuestion={handleCreateQuestion} />
          </div>
          <FooterEditorForm submitForm={submitForm} />
        </>
      ) : (
        <div style={{
          backgroundColor: '#E9F6F9',
          width: '100%',
          borderRadius: 8,
          minHeight: '400px',
          marginTop: 20,
          padding: 10
        }}>
          <NavHeaderCardForm
            selectedView={selectedView}
            setSelectedView={setSelectedView}
          />
          <ReponsesList />
        </div>
      )}
      {redirect && (
        <Redirect push to={`/`} style={{ textDecoration: 'none' }} />
      )}
      <NotificationContainer />
    </Container>
  )
}

export default FormEditor
