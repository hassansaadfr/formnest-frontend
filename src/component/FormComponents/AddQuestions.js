import React from 'react'
import { Star, FileText } from 'react-feather'

const AddQuestions = ({ handleCreateQuestion }) => {
  return (
    <div style={{ marginTop: 8 }}>
      <div style={{ display: 'flex' }}>
        <button
          onClick={() => handleCreateQuestion('text')}
          className='btn-secondary'
          style={{ fontWeight: 'bold' }}
        >
          <FileText size='12px' style={{ marginRight: 4 }} />
          Ajouter une question "Texte"
        </button>
        <button
          style={{ marginLeft: 10, fontWeight: 'bold' }}
          className='btn-secondary'
          onClick={() => handleCreateQuestion('note')}
        >
          <Star size='12px' style={{ marginRight: 4 }} />
          <span>Ajouter une question "Note"</span>
        </button>
      </div>
    </div>
  )
}

export default AddQuestions
