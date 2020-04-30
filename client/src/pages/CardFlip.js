import React, { useState } from 'react'
import ReactCardFlip from 'react-card-flip'
import PlayerCardFront from '../components/CardFront'
import PlayerCardBack from '../components/CardBack'

const CardFlip = (props) => {
  const [isFlipped, setIsFlipped] = useState(false)
  // console.log("Backside data in CardFlip: ", props.backsideData);
  console.log("Frontside data in CardFlip: ", props.frontsideData);
  // props.backsideData.stats etc.
  const handleHover = () => {
    setIsFlipped(!isFlipped)
  }
  return (

    <ReactCardFlip containerStyle={{width:'100%', maxWidth: 350}} isFlipped={isFlipped} flipDirection='horizontal'>
      <div onClick={handleHover}>
        <PlayerCardFront />
      </div>

      <div onClick={handleHover}>
        <PlayerCardBack backsideData={props.backsideData} frontsideData={props.frontsideData}/>
      </div>
    </ReactCardFlip>
  )
}

export default CardFlip
