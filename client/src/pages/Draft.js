import React, { useEffect, useState } from 'react'
import API from '../utils/API'
import DraftSelect from '../components/DraftSelect/DraftSelect'
import { withRouter } from "react-router-dom";
import { Grid } from '@material-ui/core'


function Draft(props) {
    const [draftContent, setDraftContent] = useState([])
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
        console.log('draftContent: ', draftContent)
    }, [])
    return (
        <Grid container>
            {draftContent.map((el, index) => {
            let concatKey = el._id.concat("_", index)
                return (
                    <Grid item xs={12} md={6} lg={4} key={concatKey}>
                        <DraftSelect data={el} />
                    </Grid>
                )
            })}
        </Grid>
    )
}
export default withRouter(Draft)