import React, { useEffect } from 'react'
import API from '../utils/API'

function Draft() {

    useEffect(() => {
        API.generateDraft()

    }, [])
    return (
        <div>
            <p> Drafting Page</p>
        </div>
    )
}
export default Draft