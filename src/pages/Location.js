import { Grid } from "@mui/material";
import {
  makeStyles,
  Typography,
  Button,
  TextField,
  styled,
  withStyles,
} from "@material-ui/core";
import React, { useRef } from "react";
import { useHistory } from "react-router-dom";

import location  from "../images/location.jpeg";
import { Autocomplete } from "@material-ui/lab";

const useStyles = makeStyles(() => ({
  rootDiv: {
    backgroundImage: `url(${location})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    width: "100%",
    height: "700px",
   
    opacity: ".8",
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
    color: "white",
    textAlign: "center",

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
    color: "white",
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

const CssTextField = withStyles({
  root: {
    "& label.Mui-focused": {
      color: "white",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "yellow",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "white",
      },
      "&:hover fieldset": {
        borderColor: "white",
      },
      "&.Mui-focused fieldset": {
        borderColor: "yellow",
      },
    },
  },
})(TextField);

const Location = () => {
  const location = [
    "CDA Avenue",
    "2 No Gate",
    "Tiger Pass",
    "Agrabad",
    "Halisohor",
    "GEC",
  ];
  const history = useHistory();
  const classes = useStyles();

  const locationRef = useRef();

  const handleSubmit = (e) => {
    const location = locationRef.current.value;
    history.push(`/location/${location}`);
  };
  return (
    <div>
      <div className={classes.rootDiv}>
        <div className={classes.midDiv}>
          <Typography className={classes.header}>
            Where do you want to park?
          </Typography>
          <p className={classes.text}>
            Search the best parking lot near your location
          </p>
          <div style={{ display: "flex" }}>
            <Autocomplete
              disablePortal
              id="combo-box-demo"
              options={location}
              style={{
                width: "70%",
                paddingTop: "1%",
                paddingLeft: "30%",
              }}
              renderInput={(params) => (
                <CssTextField
                  inputProps={{
                    style: { fontFamily: "nunito", color: "white" },
                  }}
                  {...params}
                  required
                  variant="outlined"
                  id="validation-outlined-input"
                  inputRef={locationRef}
                  label="Location"
                />
              )}
            />
            <Button
              className={classes.button}
              type="submit"
              onClick={handleSubmit}
            >
              Search
            </Button>
          </div>
        </div>
      </div>

    
    </div>
  );
};

export default Location;
