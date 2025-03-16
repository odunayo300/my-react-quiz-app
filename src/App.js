import React, { useEffect, useState } from 'react'
import './App.css'
import Quiz from './Component/Quiz'
import useSound from 'use-sound'
import playSound from './assets/play.mp3'

export default function App() {

  const[startGame, setStartGame] = useState(false)
  const[play] = useSound(playSound)

  const handleButtonClick = ()=>{
    setStartGame(true)
    play()
  }

  return (
   <div>
    {startGame?<Quiz/>:
    <>
      <div className={startGame?"notStart":"startGame"}>
        <button onClick={handleButtonClick}>Start Quiz</button>
      </div>
    </>
    }
   </div>
  )
}
