import React, { useEffect, useState } from 'react'
import './Timer.css'
import wrongSound from '../assets/wrong.mp3'
import useSound from 'use-sound'


export default function Timer({questionNumber,setWrongAnswer}) {

  const[time, setTime] = useState(30)
  const[wrong] = useSound(wrongSound)


  useEffect(()=>{

    const timer= setInterval(()=>{

      if(time > 0){
        setTime(time - 1)
      }
    },1000)

   return()=>{
    clearInterval(timer)
   }

  },[time,questionNumber])

  useEffect(()=>{
    if(questionNumber){
      setTime(30)
    }
  },[questionNumber])

  useEffect(()=>{
    if(time === 0){
      setWrongAnswer(true)
       wrong()
    }
  },)

  return (
    <div>
      <span className='timer'>{time}</span>
    </div>
  )
}
