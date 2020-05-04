import React, { useEffect, useState } from 'react'
import API from '../utils/API'

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
            <p> Drafting Page</p>
        </div>
    )
}
export default Draft