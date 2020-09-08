import React from 'react'

const NavHeaderCardForm = ({ setSelectedView, selectedView }) => {
  return (
    <div style={{ display: 'flex' }}>
      <h4
        onClick={() => setSelectedView('questions')}
        style={{
          marginLeft: 10,
          color: selectedView === 'questions' ? '#143742' : '#84c0d2',
          fontSize: 'bold',
          cursor: 'pointer',
          borderBottom:
            selectedView === 'questions' ? '1px solid currentColor' : 'none',
          paddingBottom: 6
        }}
        className='title'
      >
        Questions
      </h4>
      <h4
        onClick={() => setSelectedView('reponses')}
        style={{
          marginLeft: 40,
          color: selectedView === 'reponses' ? '#143742' : '#84c0d2',
          fontSize: 'bold',
          cursor: 'pointer',
          borderBottom:
            selectedView === 'reponses' ? '1px solid currentColor' : 'none',
          paddingBottom: 6
        }}
        className='title'
      >
        Réponses
      </h4>
    </div>
  )
}

export default NavHeaderCardForm
