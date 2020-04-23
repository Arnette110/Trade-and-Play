import React, { useState } from 'react'
import ReactCardFlip from 'react-card-flip'
import OutlinedCard from '../components/Cards'
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
    <ReactCardFlip isFlipped={isFlipped} flipDirection='horizontal'>
      <div onMouseEnter={handleHover}>
        <OutlinedCard >
          test
        </OutlinedCard>
      </div>

      <div onMouseLeave={handleHover}>
        <OutlinedCard>
          more tests
        </OutlinedCard>
      </div>
    </ReactCardFlip>
  )
}

export default CardFlip
