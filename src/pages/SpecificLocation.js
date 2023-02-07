
// import { Card, CardActions, CardContent, makeStyles, Typography,CardMedia } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  rootDiv: {
 
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    width: "100%",
    height: "700px",
    
    display:'flex',
    padding:"100px 50px",
  
    "@media (max-width: 900px)": {
      // backgroundRepeat: "repeat-y",
      height: "1180px",
    },
    "@media (max-width: 400px)": {
      // backgroundRepeat: "repeat-y",
      height: "800px",
    },
  },
  itemGrid: {
    backgroundColor: "white",
    //   padding:'10px 10px',
    border: "1px solid red",
  },
  midDiv: {
    paddingTop: "20%",
    "@media (max-width: 900px)": {
      paddingTop: "50%",
    },
    "@media (max-width: 400px)": {
      paddingTop: "60%",
    },
  },
  header: {
    fontFamily:
      'Calibri, Candara, Segoe, "Segoe UI", Optima, Arial, sans-serif',
    fontSize: "64px",
    color: "black",
    

    fontWeight: 600,
    "@media (max-width: 400px)": {
      color: "black",
      fontSize: "34px",
    },
  },
  text: {
    fontFamily:
      'Calibri, Candara, Segoe, "Segoe UI", Optima, Arial, sans-serif',
    fontSize: "24px",
    color: "black",
    textAlign:"start",
    paddingTop:'2%',
    "@media (max-width: 400px)": {
      fontSize: "14px",
    },
  },
  button: {
    backgroundColor: "blue",
    color: "white",
    marginLeft: "1%",
  },
}));

const SpecificLocation = () => {
    const classes=useStyles()
    const {locationID}=useParams()
    const[datas,setData]=useState({})
    const [loading, setLoading] = useState(false);

    useEffect(()=>{
        fetch(`https://parking-lot-server-production.up.railway.app/locations/${locationID}`)
        .then((res)=>res.json())
        .then(data=>{setData(data);setLoading(true) })
        console.log(datas)

    },[loading])
  return (
  <div className={classes.rootDiv} style={{   backgroundImage: `url(${datas.map})`,}}>
    <Card sx={{ maxWidth: 345 ,maxHeight:400}}>
      <CardMedia
        component="img"
        height="200"
        image={datas.img}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" className={classes.header}>
          {datas.name}
        </Typography>
        <div style={{display:'flex'}}>
            <img src="https://p.kindpng.com/picc/s/108-1084630_icon-contact-flat-free-picture-location-icon-png.png" style={{width:'20px',height:'25px', marginRight:'3%'}}></img>
            <Typography variant="body2"  className={classes.text}>
        {datas.detail}
        </Typography>
        </div>
        <div style={{display:'flex'}}>
            <img src="https://p.kindpng.com/picc/s/108-1084630_icon-contact-flat-free-picture-location-icon-png.png" style={{width:'20px',height:'25px', marginRight:'3%'}}></img>
            <Typography variant="body2"  className={classes.text}>
        {datas.location}
        </Typography>
        </div>
      </CardContent>
      <CardActions>
       <p><span style={{color:'blue'}}>open:</span> {datas.open}</p>
      </CardActions>
    </Card>
  </div>);
};

export default SpecificLocation;
