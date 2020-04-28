import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

function ConfirmDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button
        size="medium"
        variant="contained"
        color="primary"
        onClick={handleClickOpen}
      >
        Draft Now
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Draft Player"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            With this Draft, you can acquire one player. Are you sure you want to Draft?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} size="medium" variant="contained" color="secondary">
            No
          </Button>
          <Button onClick={handleClose} size="medium" variant="contained" color="primary">
            Yes
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default ConfirmDialog