import React from 'react'

const FooterEditorForm = ({ submitForm }) => {
  return (
    <div
      style={{
        textAlign: 'right',
        backgroundColor: '#E9F6F9',
        width: '100%',
        borderRadius: 8,
        padding: 10,
      }}
    >
      <button className='btn-primary' onClick={submitForm}>
        Sauvegarder
      </button>
    </div>
  )
}

export default FooterEditorForm
