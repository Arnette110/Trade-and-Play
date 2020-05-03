import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import {
  Button,
  Dialog,
  DialogContent,
  DialogContentText,
  Typography,
  Slide,
  Grid
} from '@material-ui/core';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';


const useStyles = makeStyles((theme) => ({
  spaceBetween: {
    display: 'flex',
    justifyContent: 'space-between'
  }
}))

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

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function ConfirmDialog({ boosterType }) {
  const classes = useStyles()
  const [open, setOpen] = React.useState(false);

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

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="contained" color="primary" onClick={handleClickOpen}>
        Draft Now
      </Button>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        {/* <DialogTitle id="alert-dialog-slide-title">{"Draft a new player?"}</DialogTitle> */}
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          {boosterType} Draft
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            <Typography variant='body'>
              Draft a new player by using a draft pick
            </Typography>
          </DialogContentText>
        </DialogContent>
        <DialogContent style={{ minWidth: '300px' }}>
          <Grid container
            direction="row"
            justify="space-between"
            alignItems="center"
          >
            <Grid item xs className={classes.spaceBetween}>
              <DialogContentText id="alert-dialog-slide-description" style={{ display: 'unset' }}>
                First Round Pick
              </DialogContentText>
              <Button size="medium" variant="contained" color="primary">#/1</Button>
            </Grid>
          </Grid>
        </DialogContent>
        <DialogContent style={{ minWidth: '300px' }}>
          <Grid container
            direction="row"
            justify="space-between"
            alignItems="center"
          >
            <Grid item xs className={classes.spaceBetween}>
              <DialogContentText id="alert-dialog-slide-description" style={{ display: 'unset' }}>
                Third Round Pick
              </DialogContentText>
              <Button size="medium" variant="contained" color="primary">#/1</Button>
            </Grid>
          </Grid>
        </DialogContent>
        <DialogContent style={{ minWidth: '300px' }}>
          <Grid container
            direction="row"
            justify="space-between"
            alignItems="center"
          >
            <Grid item xs className={classes.spaceBetween}>
              <DialogContentText id="alert-dialog-slide-description" style={{ display: 'unset' }}>
                Fifth Round Pick
              </DialogContentText>
              <Button size="medium" variant="contained" color="primary">#/1</Button>
            </Grid>
          </Grid>
        </DialogContent>
      </Dialog>
    </div>
  );
}
export default ConfirmDialog