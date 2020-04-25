import React, { useState } from 'react'
import ReactCardFlip from 'react-card-flip'
import PlayerCardFront from '../components/CardFront'
import PlayerCardBack from '../components/CardBack'
// import { makeStyles } from '@material-ui/core/styles'

// const useStyles = makeStyles({
//     top: {
//         backgroundColor: 'green'
//     }
// })

const CardFlip = () => {
  const [isFlipped, setIsFlipped] = useState(false)

  const handleHover = () => {
    setIsFlipped(!isFlipped)
  }
  return (

    <ReactCardFlip containerStyle={{width:'100%', maxWidth: 350}} isFlipped={isFlipped} flipDirection='horizontal'>
      <div onClick={handleHover}>
        <PlayerCardFront />
      </div>

      <div onClick={handleHover}>
        <PlayerCardBack />
      </div>
    </ReactCardFlip>
  )
}

export default CardFlip
