import React, { useState } from 'react'
import ReactCardFlip from 'react-card-flip'
import PlayerCardFront from '../components/CardFront'
import PlayerCardBack from '../components/CardBack'

const CardFlip = (props) => {
  const [isFlipped, setIsFlipped] = useState(false)
  // console.log("Backside data in CardFlip: ", props.backsideData);
  // console.log("Data in CardFlip: ", props.data);
  // props.backsideData.stats etc.
  const handleHover = () => {
    setIsFlipped(!isFlipped)
  }
  return (

    <ReactCardFlip containerStyle={{width:350, margin: 0, maxWidth: 350, display: 'inline-block'}} isFlipped={isFlipped} flipDirection='horizontal'>
      <div onClick={handleHover}>
        <PlayerCardFront data={props.data}/>
      </div>

      <div onClick={handleHover}>
        <PlayerCardBack data={props.data} />
      </div>
    </ReactCardFlip>
  )
}

export default CardFlip
