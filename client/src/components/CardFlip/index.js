import React, { useState } from 'react'
import ReactCardFlip from 'react-card-flip'
import PlayerCardFront from '../CardFront'
import PlayerCardBack from '../CardBack'

const CardFlip = (props) => {
  const [isFlipped, setIsFlipped] = useState(false)
  const handleHover = () => {
    setIsFlipped(!isFlipped)
  }
  return (
    <ReactCardFlip containerStyle={{ width: 300, margin: 0, maxWidth: 300, display: 'inline-block', }} isFlipped={isFlipped} flipDirection='horizontal'>
      <div onClick={handleHover}>
        <PlayerCardFront data={props.data} />
      </div>
      <div onClick={handleHover}>
        <PlayerCardBack data={props.data} />
      </div>
    </ReactCardFlip>
  )
}

export default CardFlip
