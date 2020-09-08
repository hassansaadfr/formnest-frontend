import React from 'react'
import { Link } from 'react-router-dom'
const Card = ({ title,  id }) => {
  return (
    <div className='card-form'>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          width: '100%',
          height: '100%',
          padding: '8px',
          marginLeft: '20px',
          textAlign: 'left'
        }}
      >
        <span className='title' style={{ fontSize: '15px', textAlign: 'left' }}>
          Formulaire
        </span>
        <br />
        <p style={{ fontWeight: 'bold' }}>{title}</p>
        <div
          style={{
            textAlign: 'right',
            marginRight: 15
          }}
        >
          <Link to={`/formEditor/${id}`} style={{ textDecoration: 'none' }}>
            <button className='btn-secondary'>Editer</button>
          </Link>
          <Link to={`/response/${id}`} style={{ textDecoration: 'none' }}>
            <button className='btn-primary'>Repondre</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Card
