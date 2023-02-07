import { Box, Button, Card, CardContent, Grid, TextField } from '@material-ui/core'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';

import { Autocomplete, CardMedia, Modal, Typography } from '@mui/material'
import dayjs, { Dayjs } from 'dayjs';
import React, { useRef, useState } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { DesktopDatePicker } from '@mui/x-date-pickers';
import { useHistory } from 'react-router-dom';
import useAuth from '../hooks/useAuth';





const Home = () => {
  const { user } = useAuth();
  const location=["CDA Avenue","2 No Gate","Tiger Pass",'Agrabad','Halisohor','GEC']
    const durations=["1","2","3","4"]
    const category=["ক","খ","গ","ঘ","চ","ছ","জ","ঝ","ট","ঠ","ড","ন","প","ম","দ","হ","ল"]
    // const[duration,setDuration]=useState("")
    const [date,setDate]=useState(null)
    const [value, setValue] = useState(null)
    const [time, setTime] = useState(null)
    const [open, setOpen] =useState(false);
    const handleClose = () => setOpen(false);
    const history=useHistory()
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
      };
      
    
    
    const nameRef = useRef();
    const locationRef = useRef();
    const addressRef = useRef();
    const emailRef = useRef();
    const durationRef = useRef();
    const categoryRef = useRef();
    const numberRef = useRef();
    // const previousDuration = JSON.parse(localStorage.getItem("info"));

    const handleAddUser = (e ) => {
        e.preventDefault()
        const name = nameRef.current.value;
        const location = locationRef.current.value;
        const email = emailRef.current.value;
        const duration=+durationRef.current.value;
        const category=categoryRef.current.value
        const number=+numberRef.current.value
        // value.setHours(value.getHours() + duration)
        const t =date.getTime()
        const time=(t+duration*20*1000)
        
        

        const user = {name,email,duration,category,number,time,location,date}
        console.log(time, t)
        // console.log(value)

        // if (previousDuration === null) {
        //       const info = {
        //         validation: Date.now() + 20*1000+5 ,
        //       };
        //       localStorage.setItem("info", JSON.stringify(info));
        //     }
            
        
        // setOpen(true);
        // send this user data: email & pass to the backend
        fetch('https://parking-lot-server-production.up.railway.app/users', {
            method:'Post',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then((res)=>{console.log(res)
            history.push(`/information`)
          })
    }
  return (
    <LocalizationProvider dateAdapter={ AdapterDateFns} style={{ backgroundColor:' #eee'}}>
    
     <form onSubmit={handleAddUser} >
                <Box
                    style={{
                    display: "flex",
                    alignItems: "center",
                    flexDirection: "column",
      
                    bgcolor: "background.paper",
                
                }}
                   
                    >
                 
                 
                            <TextField
                                   style={{
                                      width:'70%',
                                      marginTop:'30px'
                                        
                                    }}
                                    required
                                    variant='outlined'
                                    id="outlined-required"
                                    
                                    value={user.displayName}
                                    // inputRef={nameRef}
                                />
                                        <TextField
                                   style={{
                                        width: '70%',
                                        marginTop:'30px'
                                        
                                    }}
                                    required
                                    variant='outlined'
                                    id="outlined-required"
                                    
                                    value={user.email}
                                   
                                />
  <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={location}
      style={{
        width: '70%',
        marginTop:'30px'
        
    }}
 
      renderInput={(params) => <TextField
       
        
        {...params} 
        required
        variant='outlined'
        id="outlined-required"
        inputRef={locationRef}
        label="Location" />}
    />
                                
  
                                
 <DateTimePicker
          label="Select Date and time"
          // minDate={new Date()}
          value={date}
          onChange={newDate => setDate(newDate)}
          renderInput={(params) => <TextField     style={{
            width: '70%',
            marginTop:'30px'
            
        }} {...params}
        required
        variant='outlined'
        id="outlined-required" />}
        /> 

      
        <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={durations}
      style={{
        width: '70%',
        marginTop:'30px'
        
    }}
 
      renderInput={(params) => <TextField
       
        
        {...params} 
        required
        variant='outlined'
        id="outlined-required"
        inputRef={durationRef}
        label="Duration of your parking time" />}
    />

    <div style={{width:'70%', display:'flex', marginTop:'30px',}}>
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={category}
      style={{
        width: '30%',
        marginRight:'20px',
    
        
    }}
 
      renderInput={(params) => <TextField
       
        
        {...params} 
        required
        variant='outlined'
        id="outlined-required"
        inputRef={categoryRef}
        label="Category" />}
    />

<TextField 
                                   style={{
                                        width: '70%',
                                       
                                    
                                    }}
                                    
                                    required
                                    variant='outlined'
                                    id="outlined-required"
                                    label="Vehicle Number"
                                    inputRef={numberRef}
                                />
    </div>
                               
                        
                                <Button style={{marginTop:'30px',backgroundColor: "blue",color: "white", }} type="submit" variant="contained" >Submit</Button>

                                <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={{style}}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box>
      </Modal>
                </Box>
            </form>
    </LocalizationProvider>
  )
}

export default Home