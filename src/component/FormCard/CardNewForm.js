import React, { useState } from 'react'
import { Plus } from 'react-feather'
import { Redirect } from 'react-router-dom'
import axios from 'axios'

const Card = () => {
  const [formId, setFormId] = useState(null)
  const [redirect, setRedirect] = useState(false)
  const createForm = async () => {
    axios
      .post('https://formnest-backend-mt.herokuapp.com/form', {
        title: 'Nouveau formulaire'
      })
      .then(response => {
        setFormId(response.data.id)
        setRedirect(true)
      })
  }

  return (
    <div className='new-form-card' onClick={createForm}>
      <Plus onClick={createForm} />
      <br />
      <span>Nouveau formulaire</span>
      {redirect && (
        <Redirect
          push
          to={`/formEditor/${formId}`}
          style={{ textDecoration: 'none' }}
        />
      )}
    </div>
  )
}

export default Card
