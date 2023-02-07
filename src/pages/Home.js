import React from "react";
import { makeStyles, Typography,Button } from "@material-ui/core";

import { useHistory } from "react-router-dom";


const useStyles= makeStyles(()=>({

    rootDiv:{
        backgroundImage: `url(${"https://wallpaperaccess.com/full/4327781.jpg"})`,
        backgroundRepeat: "no-repeat",
        backgroundSize:'cover',
        width:'100%',
        height:'700px',
   
        "@media (max-width: 900px)": {
            // backgroundRepeat: "repeat-y",
            height: "1180px",
          },
          "@media (max-width: 400px)": {
            // backgroundRepeat: "repeat-y",
            height: "800px",
          },
       
    },
    header:{
        fontFamily:'Calibri, Candara, Segoe, "Segoe UI", Optima, Arial, sans-serif',
        fontSize:'64px',
        color:'white',
        paddingTop:'40px',
        fontWeight:'80px',
        "@media (max-width: 400px)": {
            
            fontSize: "34px",
          },
    },
    text:{
        fontFamily:'Calibri, Candara, Segoe, "Segoe UI", Optima, Arial, sans-serif',
        fontSize:'24px',
        color:'white',
        "@media (max-width: 400px)": {
            
            fontSize: "14px",
          },
    },
    button:{
        backgroundColor:'blue',
        color:'white',
        marginTop:'8%'
    }
}))

const Home = () => {
    const history=useHistory()
    const classes= useStyles()
  return (

    <div className={classes.rootDiv} >
 <Typography className={classes.header}>Welcome to Online Parking lot</Typography>
 <p className={classes.text}>Find the best parking lot near your location</p>

 <p className={classes.text}>and save your time</p>
 <Button className={classes.button} type="submit" onClick={()=>history.push("/formfillup")}>Get started</Button>
    </div>
  );
};

export default Home;
