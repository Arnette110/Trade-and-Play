import React, { useContext } from 'react'
import { Button } from '@material-ui/core'
import CardFlip from '../../pages/CardFlip'
import API from '../../utils/API'
import { AuthContext } from '../../Context/AuthContext'


const addToCollection = (userId, cardId) => {
    let dataObj = {user_id: userId, card: cardId}
    API.addCardToCollection(dataObj)
}

function DraftSelect({ data }) {
    const {user} = useContext(AuthContext);

    return (
        <div style={{display: 'flex', flexDirection: 'column', alignContent: 'center', alignItems: 'center', marginTop: '20px'}}>
            <CardFlip data={data} style={{marginBottom: '20px'}}/>
            <Button
                onClick={() => addToCollection(user._id, data._id)}
                href={'/dashboard'}
                variant='contained'
                color='primary'
                style={{marginTop: '20px'}}
            >
                Draft {data.bio.fullName}
            </Button>
        </div>
    )
}
export default DraftSelect