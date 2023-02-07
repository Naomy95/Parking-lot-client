import { Box, Button, Typography } from '@material-ui/core'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'

const Demo = () => {
    const{email}=useParams()
    const[datas,setData]=useState({})
    const [loading, setLoading] = useState(false);
    const history=useHistory()

   useEffect(()=>{
   
    
    fetch(`http://localhost:5000/users/${email}`)
      .then((res)=>res.json())
      .then(data=>{setData(data);setLoading(true) })
      console.log(datas)

    
    
    const previousTime = datas.time
    console.log(previousTime)
    
    if(previousTime===null){
      console.log("already deleted")
    }
    else{
      const interval=setInterval(()=>{
       
        const currentTime = Date.now();
        console.log(currentTime)
       
        if (
          previousTime &&
          previousTime < currentTime 
        ){
          clearInterval(interval)
          console.log('deleted')
    history.push(`/thanks/${datas._id}`)
          
        
        }
  
      },1000)
    }
   
   },[loading])



    const handleAdd=()=>{
       
      fetch(`http://localhost:5000/users/${datas._id}`, {
        method:'DELETE',
        headers: {
          'content-type': 'application/json'
      }
    })
        .then((res)=>{console.log(res)})
        
     

    }
  return (
    <div>
      
      <Box>
        <Typography>{datas.name}</Typography>
      </Box>
      
      <Button onClick={handleAdd}>demo</Button>
      
      </div>
  )
}

export default Demo