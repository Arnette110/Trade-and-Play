import React, { useEffect } from 'react'
import API from '../utils/API'

function Draft() {

    const prepareDraft = () => {
        const getDraft = () => {
            return API.generateDraft()
        }
    
        const consoleLog = (res) => {
            console.log(res.data)
        }

        return getDraft()
            .then(consoleLog)
    }

    useEffect(() => {
        // API.generateDraft()
        prepareDraft()
    }, [])
    return (
        <div>
            <p> Drafting Page</p>
        </div>
    )
}
export default Draft