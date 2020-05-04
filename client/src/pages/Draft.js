import React, { useEffect, useState } from 'react'
import API from '../utils/API'
import CardFlip from '../pages/CardFlip';

function Draft() {
    const [draftContent, setDraftContent] = useState(null)

    const prepareDraft = () => {
        const getDraft = () => {
            return API.generateDraft()
        }
    
        const saveDraftToState = (res) => {
            console.log(res.data)
            setDraftContent(res.data)
        }

        return getDraft()
            .then(saveDraftToState)
    }

    useEffect(() => {
        prepareDraft()
    }, [])
    return (
        <div>
            <CardFlip />
        </div>
    )
}
export default Draft