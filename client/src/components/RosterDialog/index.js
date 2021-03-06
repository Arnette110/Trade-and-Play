import React, { useState } from 'react';
import { List, Divider } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles';
import { Button, Dialog, Typography, IconButton } from '@material-ui/core';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import CloseIcon from '@material-ui/icons/Close';
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

const CustomizedDialogs = ({ boosterType }) => {
  const [open, setOpen] = useState(false);
  const [roster, setRoster] = useState({
    bios: []
  });

  const generateRoster = (positionType) => {
    const getRoster = (positionType) => {
      return API.findAllbyCode(positionType)
    }

    const setRosterToState = (res) => {
      setRoster({ ...roster, bios: res.data })
    }

    return getRoster(positionType)
      .then(setRosterToState)
  }

  const handleClickOpen = (positionType) => {
    setOpen(true);
    generateRoster(positionType)
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="contained" color="primary" onClick={() => handleClickOpen(boosterType)} style={{ width: '100%' }}>
        View Roster
      </Button>
      <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          Roster
        </DialogTitle>
        <DialogContent dividers style={{ minWidth: '300px' }}>
          {roster.bios.map(el => {
            return (
              <List key={el._id}>
                <RosterLi data={el} />
              </List>
            )
          })}
          <Divider />
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default CustomizedDialogs