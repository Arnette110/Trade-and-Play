import React, {useContext} from 'react'
import { Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import AuthService from '../../Services/AuthService';
import { AuthContext } from '../../Context/AuthContext';

const useStyles = makeStyles({
  root: {
    background: 'rgb(235,36,39)',
    border: '2px solid',
    borderRadius: 0,
    color: 'white',
    height: 48,
    padding: '0 30px',
    '&:hover': {
      color: 'rgb(235,36,39)',
      backgroundColor: 'white',
      border: '2px solid',
      borderColor: 'rgb(235,36,39)',
      borderRadius: 0,
    },
  },
})

export default function Logout() {
  const { setIsAuthenticated, setUser } = useContext(
    AuthContext
  );

    const onClickLogoutHandler = () => {
      AuthService.logout().then(data => {
        if (data.success) {
          setUser(data.user);
          setIsAuthenticated(false);
        }
      });
    };

  const classes = useStyles()

  return (
    <div>
      <Button onClick={onClickLogoutHandler} className={classes.root} href='/'>
        sign out
      </Button>
    </div>
  );
}
