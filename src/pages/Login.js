import { Container, Typography, TextField, Button, CircularProgress, Alert } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Grid } from '@mui/material';

import { NavLink, useLocation, useHistory } from 'react-router-dom';
import login from "../images/login.jpg"

import useAuth from '../hooks/useAuth';


// import Footer from '../../Shared/Footer/Footer';

const Login = () => {
    const [loginData, setLoginData] = useState({});
    const {user, loginUser, signInWithGoogle, isLoading, authError } = useAuth();

    const location = useLocation();
    const history = useHistory();

    useEffect(() => {
        const token = localStorage.getItem("access_token");
        if (token) {
          return history.push("/home");
        }
      }, []);

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleLoginSubmit = e => {
        loginUser(loginData.email, loginData.password, location, history);
        e.preventDefault();
    }

    const handleGoogleSignIn = () => {
        signInWithGoogle(location, history)
    }
    return (
        <div className='div-bg bg-gradient' style={{color:'whitesmoke'}}>
            
            <Container className='container'>

                <Grid container spacing={2}>
                <Grid item xs={12} md={6} sx={{textAlign:'start', marginTop:'90px',fontSize:'20px'}}>
                       <img src={login} width="100%"></img>
                    </Grid>
                    <Grid item sx={{ mt: 8, backgroundColor:'white' }} xs={12} md={6} className='login-box'>
                        <Typography sx={{ fontWeight: 600, m: 5,color:'black' }} variant="h3">
                            User Login
                        </Typography>
                        <form onSubmit={handleLoginSubmit}>
                            <TextField
                                sx={{ width: '75%', m: 1 }}
                                id="standard-basic"
                                label="Your Email"
                                name="email"
                                onChange={handleOnChange}
                                variant="standard" />
                            <TextField
                                sx={{ width: '75%', m: 1 }}
                                id="standard-basic"
                                label="Your Password"
                                type="password"
                                name="password"
                                onChange={handleOnChange}
                                variant="standard" />
                                <br />

                            <Button sx={{ m: 1,backgroundColor:'blueviolet' }} type="submit" variant="contained">Login</Button>
                            <br />
                            <NavLink
                                style={{ textDecoration: 'none' }}
                                to="/register">
                                <Button variant="text">New User? Please Register</Button>
                            </NavLink>
                            {isLoading && <CircularProgress />}
                            {user?.email && <Alert severity="success">Login successfully!</Alert>}
                            {authError && <Alert severity="error">{authError}</Alert>}
                        </form>
                        <p>------------------------</p>
                        <Button className='bg-gradient' onClick={handleGoogleSignIn} variant="contained" style={{backgroundColor:'blueviolet', marginBottom:'10px'}}>Google Sign In</Button>
                    </Grid>
                   
                </Grid>
            </Container>
            {/* <Footer></Footer> */}
        </div>
    );
};

export default Login;