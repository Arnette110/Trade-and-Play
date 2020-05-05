import React, { useEffect, useState } from 'react'
import API from '../utils/API'
import CardFlip from '../pages/CardFlip';
import { withRouter } from "react-router-dom";


function Draft(props) {
    const [draftContent, setDraftContent] = useState(null)
    const prepareDraft = (position) => {
        const getDraft = (position) => {
            return API.generateDraft(position)
        }
    
        const saveDraftToState = (res) => {
            console.log('res.data: ', res.data)
            setDraftContent(res.data)
        }

        return getDraft(position)
            .then(saveDraftToState)
    }

    useEffect(() => {
        console.log('props: ', props.location.state.boosterType)
        prepareDraft(props.location.state.boosterType)
    }, [])
    return (
        <div>
            <CardFlip />
        </div>
    )
}
export default withRouter(Draft)