import React from 'react'

const Jumbotron = ({ children }) => {
  return (
    <div
      style={{
        height: '100vh',
        width: '100vw',
        clear: 'both',
        margin: 'auto',
        paddingTop: 30,
        paddingBottom: 100,
        textAlign: 'center',
        backgroundColor: '#131313',
        color: 'white',
        borderRadius: '0'
      }}
      className='jumbotron'>
      {children}
    </div>
  )
}

export default Jumbotron
