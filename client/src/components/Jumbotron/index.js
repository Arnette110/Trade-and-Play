import React from 'react'
import OutlinedCard from '../Cards'
import CardFlip from '../../pages/CardFlip'

function Jumbotron({ children }) {
  return (
    <div
      style={{
        height: 300,
        clear: 'both',
        paddingTop: 120,
        textAlign: 'center',
      }}
      className='jumbotron'>
      {children}
      <CardFlip />
      {/* <OutlinedCard /> */}
    </div>
  )
}

export default Jumbotron
