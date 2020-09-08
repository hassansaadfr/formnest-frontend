import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import Loading from '../Loading'
import { Star, FileText } from 'react-feather'
import Note from '../FormComponents/Notes'

const ReponsesList = () => {
  let { id } = useParams()
  const [reponses, setReponses] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    loading && getReponses()
  })
  const getReponses = () => {
    axios.get('https://formnest-backend-mt.herokuapp.com/reponses').then(res => {
      console.log(res.data)
      setReponses(res.data.filter(v => v.form === id))
      setLoading(false)
    })
  }
  return (
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
      {loading ? (
        <Loading />
      ) : (
        <div>
          {reponses &&
            reponses.map((value, index) => {
              console.log(value)
              return (
                <div key={index}>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      borderStyle: 'solid',
                      borderWidth: ' 0px',
                      borderBottomWidth: '0.1px',
                      borderBottomColor: '#84c0d2'
                    }}
                  >
                    <div
                      style={{
                        padding: 3,
                        display: 'flex',
                        alignItems: 'center'
                      }}
                      className={`btn-${value.type}-question`}
                    >
                      <span style={{ marginRight: 5 }}>
                        {value.questionNumber} -
                      </span>
                      {value.type === 'note' ? <Star /> : <FileText />}
                    </div>
                    <div style={{ marginLeft: '30px', marginBottom: 20 }}>
                      <h4 className='title' style={{ color: '#84c0d2' }}>
                        {value.question}
                      </h4>
                      {value.type === 'note' ? (
                        <Note selectedValue={value.reponse} />
                      ) : (
                        <p style={{ color: '#143742' }}>{value.reponse}</p>
                      )}
                    </div>
                  </div>
                </div>
              )
            })}
        </div>
      )}
    </div>
  )
}

export default ReponsesList
