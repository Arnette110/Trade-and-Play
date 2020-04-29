import React from 'react'

function Jumbotron({ children }) {
  return (
    <div
      style={{
        height: '100vh',
        width: '100vw',
        clear: 'both',
        paddingTop: 30,
        paddingBottom: 100,
        textAlign: 'center',
        backgroundColor: '#131313',
        color: 'white',
      }}
      className='jumbotron'>
      {children}
    </div>
  )
}

export default Jumbotron
