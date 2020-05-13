import React, { useEffect, useState } from 'react'
import API from '../utils/API'
import DraftSelect from '../components/DraftSelect/DraftSelect'
import { withRouter } from "react-router-dom";
import { Grid } from '@material-ui/core'

const Draft = (props) => {
    const [draftContent, setDraftContent] = useState([])
    const prepareDraft = (position) => {
        const getDraft = (position) => {
            return API.generateDraft(position)
        }

        const saveDraftToState = (res) => {
            setDraftContent(res.data)
        }

        return getDraft(position)
            .then(saveDraftToState)
    }

    useEffect(() => {
        prepareDraft(props.location.state.boosterType)
    }, [props.location.state.boosterType])

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