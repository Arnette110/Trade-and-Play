import React, { useState } from 'react';
import { List, Divider } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import RosterLi from '../RosterListItem'
import API from '../../utils/API'


const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

function CustomizedDialogs({ boosterType }) {
  const [open, setOpen] = useState(false);
  const [rosterList, setRosterList] = useState({
    list: []
  });

  const handleClickOpen = (positionType) => {
    setOpen(true);
    generateRoster(positionType)
  };
  const handleClose = () => {
    setOpen(false);
  };

  const generateRoster = (positionType) => {
    const getRoster = (positionType) => {
      return API.findAllbyCode(positionType)
    }
    
    const setRosterToState = (res) => {
      console.log('r.s: ', res.data)
      setRosterList({...rosterList, list: res.data})
    }
    
    return getRoster(positionType)
      .then(setRosterToState)
  }

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={() => handleClickOpen(boosterType)}>
        View Roster
      </Button>
      <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          Roster
        </DialogTitle>
        <DialogContent dividers style={{ minWidth: '300px' }}>
        {/* Map array of players to generate RosterLIs */}
        {/* {rosterList.list.map()} */}
          <List>
            <RosterLi data={rosterList.list}/>
          </List>
          <Divider />
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default CustomizedDialogs
