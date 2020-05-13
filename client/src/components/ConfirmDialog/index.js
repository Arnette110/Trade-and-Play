import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import API from '../../utils/API'
import { Redirect } from "react-router-dom";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const ConfirmDialog = ({ label, pick, boosterType }) => {
  const [open, setOpen] = React.useState(false);
  const [displayDraft, setDisplayDraft] = React.useState(false)

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const reducePick = (pick) => {
    API.reducePick({pickType: pick})
    setOpen(false)
  }
  if (displayDraft) {
    return <Redirect to={{pathname: "/draft", state: {boosterType: boosterType}}}/>
  }
  return (
    <div>
      <Button variant="contained" color="secondary" onClick={handleClickOpen} style={{width: '100%'}}>
        {label}
      </Button>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">{"Draft a new player?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
          With this Draft, you can acquire one player. Are you sure you want to Draft?
          </DialogContentText>
        </DialogContent>
        <DialogActions style={{justifyContent: 'space-evenly'}}>
        <Button onClick={handleClose} size="medium" variant="contained" color="secondary">
            No
          </Button>
          <Button onClick={()=> {
            reducePick({pick})
            setDisplayDraft(true)
            }} size="medium" variant="contained" color="primary">
            Yes
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
export default ConfirmDialog