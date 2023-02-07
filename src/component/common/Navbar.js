import React, { useEffect, useState } from "react";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import { Route, Routes, useHistory, useLocation } from "react-router-dom";

import { AppBar, Toolbar, Typography } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";


const drawerWidth = 250;

const useStyles = makeStyles((theme) => ({
  rootComponent: {
    paddingTop: 50,
    display: "flex",
  },
  appBar: {
    backgroundColor: "#02102c",
    color: "white",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
   
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: "rgb(183, 183, 239)",
   
  },
  drawerHeader: {
    paddingInline: 5,
    display: "flex",
    alignItems: "center",
    height: 100,
    justifyContent: "center",
  },
  content: {
    flexGrow: 1,
    // padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
  menuButton: {
    marginRight: theme.spacing(2),
    color: "white",
  },
  parent: {
    marginBottom: -8,
    fontWeight: 600,
  },
  nested: {
    paddingLeft: theme.spacing(6),
    marginBottom: -16,
    fontSize: "34px",
    fontFamily:'Calibri',
    fontWeight:500,
    color:'rgb(1, 1, 27)'
  },
  logo: {
    width: "70%",
    cursor: "pointer",
    paddingLeft: "10px",
  },
}));

const DrawerItem = (props) => {
  const history = useHistory();
  const location = useLocation();
  const { className, to, text, parent, logout, children, toggle, onClick } =
    props;
  return (
    <List>
      <ListItem
        button
        className={className}
        onClick={parent || logout ? onClick : () => history.push(to)}
        selected={to === location.pathname}
      >
        <ListItemText primary={text} />
        {parent && (toggle ? <ExpandLess /> : <ExpandMore />)}
      </ListItem>
      {parent && (
        <Collapse in={toggle} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {children}
          </List>
        </Collapse>
      )}
    </List>
  );
};

const Navbar = (props) => {
  const [open, setOpen] = useState(true);
  const [course, setCourse] = useState(false);
  const [coursedelete, setCoursedelete] = useState(false);
  const [addContent, setAddcontent] = useState(false);
  const [videoservices, setVideoservices] = useState(false);
  const [video, setVideo] = useState(false);
  const [featuredvideo, setFeaturedvideo] = useState(false);
  const [knowledgedeck, setKnowledgedeck] = useState(false);
  const [flashcards, setFlashcards] = useState(false);
  // const [blog, setBlog] = useState(false);
  const [instructor, setInstructor] = useState(false);
  const [students, setStudents] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  const classes = useStyles();
  const theme = useTheme();
  const history = useHistory();
  const location = useLocation();

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  return (
    <div className={classes.rootComponent}>
      <CssBaseline />
      <AppBar
        toggle={() => setOpen(!open)}
        open={open}
        className={classes.appBar}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerOpen}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Typography color="white"> Dashboard</Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
        PaperProps={{
          sx:{
            fontSize:'54px'
          }
        }}
      >
        <div className={classes.drawerHeader}>
          <img src="https://cdn-icons-png.flaticon.com/512/198/198336.png?w=740&t=st=1675636493~exp=1675637093~hmac=721888cdab760393cda523bc05c34cf08899e9935f14677dab7384d2bb006c90" width="40%" height="80%"></img>
        
          <IconButton onClick={() => setOpen(!open)} style={{ color: "black" }}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </div>
        <Divider />
        <div>

              <DrawerItem
                className={classes.nested}
                text="See Locations"
                to="/location"
        
              />
              <DrawerItem
                className={classes.nested}
                text="Fill up form"
                to="/formfillup"
              />
         
              <DrawerItem
                className={classes.nested}
                text="See Your Parking Information"
                to="/information"
              />
         


          <DrawerItem
            onClick={() => {
              localStorage.clear();
              history.push("/");
            }}
            className={classes.nested}
            logout
            text="Logout"
          />
        </div>
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        {props.children}
      </main>
    </div>
  );
};

export default Navbar;
