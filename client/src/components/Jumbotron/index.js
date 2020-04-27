import React from 'react'


function Jumbotron({ children }) {
  return (
    <div
      style={{
        height: '200',
        clear: 'both',
        paddingTop: 120,
        paddingBottom: 120,
        textAlign: 'center',
        backgroundColor: 'lightblue',
      }}
      className='jumbotron'>
      {children}
    </div>
  )
}

export default Jumbotron
