import { CircularProgress } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Route, Redirect, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';


const PrivateRoute = ( props ) => 
{
    const [isLoggedIn, setisLoggedIn] = useState(false);
    const { path, component } = props;
    const history = useHistory();
  
    useEffect(() => {
      const token = localStorage.getItem("access_token");
      if (token) {
        return setisLoggedIn(true);
      }
      return history.push("/");
    }, [history]);
  
    return isLoggedIn && <Route path={path} component={component} exact />;
  };

export default PrivateRoute;