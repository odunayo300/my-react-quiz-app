import React, { useEffect, useState } from 'react'

export default function Timer({setStopTime,questionNumber}) {

    const [Timer,setTimer] = useState(30)

    useEffect(()=>{
        if(Timer === 0){setStopTime(true)}

          const count = setInterval(()=>{
              setTimer(Timer - 1)
          },1000)
          
          return(()=>{
            clearInterval(count)
          })
    },[Timer,setStopTime])

    useEffect(()=>{
      setTimer(30)
    },[questionNumber])
    
    return(
      <div>
        {Timer}
      </div>
    )
}

