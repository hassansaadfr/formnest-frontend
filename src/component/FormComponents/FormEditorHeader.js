import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { CheckBtn, TrashBtn } from './Buttons'
import { ChevronLeft } from 'react-feather'

const FormEditorHeader = ({
  changeNameForm,
  deleteForm,
  handleChangeName,
  nameForm
}) => {
  const { id } = useParams()
  return (
    <div
      style={{
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}
    >
      <Link to='/' style={{ textDecoration: 'none' }}>
        <button
          className='btn-secondary-outlined'
          style={{ display: 'flex', alignItems: 'center' }}
        >
          <ChevronLeft size='20px' />
          <h4 style={{ color: '#143742', fontSize: 'bold' }} className='title'>
            Mes formulaires
          </h4>
        </button>
      </Link>
      <div>
        <input
          style={{ height: 20, marginRight: 5 }}
          type='text'
          onChange={handleChangeName}
          value={nameForm}
        />
        <CheckBtn type='btn-secondary' handleClick={changeNameForm} />
      </div>
      <div>
        <TrashBtn type='btn-danger' handleClick={deleteForm} />
        <Link to={`/response/${id}`} style={{ textDecoration: 'none' }}>
          <button className='btn-primary' style={{ marginLeft: 5 }}>
            Répondre
          </button>
        </Link>
      </div>
    </div>
  )
}

export default FormEditorHeader
