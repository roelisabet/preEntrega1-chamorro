import React from 'react'

export const ItemListContainer = ({greeting}) => {
  return (
    <div style={HeaderStyle}>

    <h2 style={tituloStyle}>{greeting}</h2>

    </div>
  )
}

const HeaderStyle = {

    width: '80%',
    margin: 'auto',
    padding: '20px',
    textAlign: 'center',

}

const tituloStyle = {

    color: '#333',
    fontSize: '24px',
    marginBottom: '16px',

}
