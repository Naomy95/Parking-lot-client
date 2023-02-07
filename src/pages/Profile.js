import {
    makeStyles,
    Typography,
    Button,
    TextField,
    styled,
    withStyles,
    Box,
    Grid,
  } from "@material-ui/core";
import axios from "axios";
import React, { useEffect, useState } from 'react'
import useAuth from "../hooks/useAuth";


const useStyles = makeStyles(() => ({
    rootDiv: {
      backgroundColor:' #eee',
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      width: "100%",
      height: "1100px",
      paddingTop:'8%',
      display:'flex',
      justifyContent:'center',
      "@media (max-width: 900px)": {
        // backgroundRepeat: "repeat-y",
        
        height: "1180px",
       
        paddingTop:'20%',
       
      },
      "@media (max-width: 400px)": {
        // backgroundRepeat: "repeat-y",
        height: "800px",
      
      },
    },
    itemGrid: {
       paddingTop:'3%',
      backgroundColor: "white",
      //   padding:'10px 10px',
      border: "1px solid white",
      borderRadius:'.5rem .5rem 0 0',
      width:'50%',
      height:'600px',
      "@media (max-width: 900px)": {
        width:'70%',
        height: "500px",
      
       
      },
      "@media (max-width: 400px)": {
        // backgroundRepeat: "repeat-y",
        width:'80%',
        height: "500px",
      
      },
    },
    midDiv: {
      marginTop:'5%',
      padding:'4% 10%',
      backgroundColor:' #eee',

    //   "@media (max-width: 900px)": {
    //     paddingTop: "50%",
    //   },
    //   "@media (max-width: 400px)": {
    //     paddingTop: "60%",
    //   },
    },
    header: {
      fontFamily:
        'Calibri, Candara, Segoe, "Segoe UI", Optima, Arial, sans-serif',
      fontSize: "1.25rem",
      color: "#f37a27",
    //   textAlign: "center",
  
      fontWeight: 600,
   
    },
    time: {
      fontFamily:
        'Calibri, Candara, Segoe, "Segoe UI", Optima, Arial, sans-serif',
      fontSize: "1em",
      color: "#757575",
    },
    text: {
      fontFamily:
        'Calibri, Candara, Segoe, "Segoe UI", Optima, Arial, sans-serif',
      fontSize: "18px",
     color:'#4F4F4F',
     fontWeight:700
    //   "@media (max-width: 400px)": {
    //     fontSize: "14px",
    //   },
    },
    p: {
      fontFamily:
        'Calibri, Candara, Segoe, "Segoe UI", Optima, Arial, sans-serif',
      fontSize: "18px",
     color:'#4F4F4F',

    //   "@media (max-width: 400px)": {
    //     fontSize: "14px",
    //   },
    },
    contactText: {
      fontFamily:
        'Calibri, Candara, Segoe, "Segoe UI", Optima, Arial, sans-serif',
      fontSize: "18px",
     color:'#4F4F4F',
     fontWeight:300,
     padding:'10% 10%',
     textAlign:"start"
    //   "@media (max-width: 400px)": {
    //     fontSize: "14px",
    //   },
    },
    button: {
      backgroundColor: "blue",
      color: "white",
      marginLeft: "1%",
    },
  }));

const Profile = () => {
    const classes=useStyles()
    const { user } = useAuth();
    const [users, setUsers] = useState({});
    const [loading, setLoading] = useState(false);
    const email=(user.email)
    console.log(email)
   


    useEffect(() => {
        axios.get(`https://parking-lot-server-production.up.railway.app/users/${email}`)
           
            .then(res =>{ console.log(res.data);setUsers(res.data);setLoading(true)})
        // if (users) {
        //     spinner = false;
        // }
    }, [email])

    // let date="Wed Aug 05 18:11:48 UTC 2020"
    // console.log(date.toLocaleDateString())
    let date = new Date(users.date).toLocaleDateString()
    let time= new Date(users.date).toTimeString()
  
  return (
  <div className={classes.rootDiv}>
      <Box className={classes.itemGrid}>
    <Typography className={classes.header}>
        {user.displayName}'s Parking Information
    </Typography>
    <Grid container spacing={3} style={{padding:'5% 10%'}}>
       <Grid item  xs= {6} sm= {6} md= {8} lg={8} align="start">
            
       <Typography className={classes.time}>Date</Typography>
               <Typography className={classes.text}>{date}</Typography>
       </Grid>
       <Grid item xs= {6} sm= {6} md= {4} lg={4} align="start">
            
       <Typography className={classes.time}>Starting time</Typography>
               <Typography className={classes.text}>{time}</Typography>
       </Grid>
        
    </Grid>
   <div className={classes.midDiv}>
   <Grid container spacing={3}  >
       <Grid item  xs= {6} sm= {6} md= {8} lg={8} align="start">
            
       <Typography className={classes.p}>Parking Location</Typography>
       </Grid>
       
       <Grid item xs= {6} sm= {6} md= {4} lg={4} align="start">
               <Typography className={classes.text}>{users.location}</Typography>
               </Grid>
       <Grid item  xs= {6} sm= {6} md= {8} lg={8} align="start">
            
       <Typography className={classes.p}>Your car will be parked for</Typography>
       </Grid>
       
       <Grid item xs= {6} sm= {6} md= {4} lg={4} align="start">
       <Typography className={classes.text}>{users.duration} hour</Typography>
               
               </Grid>
     
            
      
      
        
    </Grid>
   </div>
   <Typography className={classes.contactText}>
        want any information? <span style={{color:'#f37a27'}}>contact us</span>
    </Typography>
</Box>
  </div>
  )
}

export default Profile