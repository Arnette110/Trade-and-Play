import React from 'react'
import {
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@material-ui/core'

export default function Login() {
  const [open, setOpen] = React.useState(false)

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <div>
      <Button variant='outlined' style={{color: "crimson"}} onClick={handleClickOpen}>
        Learn More!
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby='form-dialog-title'>
        <DialogTitle id='form-dialog-title'>You're the Boss!</DialogTitle>
        <DialogContent>
          <DialogContentText variant='h6'>
            Recruit top talent to complete your Team (Deck)
          </DialogContentText>
          <DialogContentText variant='h6'>
            Trade with other Managers to build your dream team
          </DialogContentText>
          <DialogContentText variant='h6'>
            Shop for Booster Packs
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color='primary'>
            Cancel
          </Button>
          <Button onClick={handleClose} color='primary'>
            Sign Up!
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}
