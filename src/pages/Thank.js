import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';

const Thank = () => {
    const{id}=useParams()

    useEffect(()=>{
        const currentTime = Date.now();
        console.log(currentTime)
        const previousTime = JSON.parse(localStorage.getItem("info"));
        
        if(previousTime===null){
          console.log("already deleted")
               
      fetch(`https://parking-lot-server-production.up.railway.app/users/${id}`, {
        method:'DELETE',
        headers: {
          'content-type': 'application/json'
      }
    })
        .then((res)=>{console.log(res)})
        
        }
    })



  return (
    <div>Thanks for taking our service</div>
  )
}

export default Thank