import { useState, useEffect } from 'react'
import './Quiz.css'
import useSound from 'use-sound'
import correct from '../assets/correct.mp3'
import wrong from '../assets/wrong.mp3'

export default function Quiz({data, setStopTime,questionNumber,setquestionNumber}) {

  const[question,setQuestion] = useState(null);
  const[selectedAnswer,setSelectedAnswer] = useState(null);
  const[clickedAnswer,setClickedAnswer] = useState("answer");
  const[correctAnswer] = useSound(correct)
  const[wrongAnswer] = useSound(wrong)
  

  

  useEffect(()=>{
    setQuestion(data[questionNumber - 1]);
  },[data,questionNumber])

  const delay = (duration, callback)=>{
    setTimeout(()=>{
      callback()
    },duration)
  }

  const handleClick = a =>{
    setSelectedAnswer(a)
    setClickedAnswer("answer active")

    delay(4000,()=>setClickedAnswer(a.correct?"answer correct":"answer wrong"))

    delay(4000,()=>{
      if(a.correct){
        correctAnswer()
          delay(3000,()=>{
            setquestionNumber(questionNumber + 1)
          })
      }
      else{
       delay(4000,()=>{
        setStopTime(true)
       })
        wrongAnswer()
      }
    })
    
  }

  return (
    <div className='quiz'>
      <div className='questions'>{question?.question}</div>
      <div className='answers'>
        {question?.answers.map(a => (
          <div className={selectedAnswer === a? clickedAnswer :"answer"} onClick={()=>{handleClick(a)}}> 
            {a.text}  
          </div>
        ))}
      </div>
    </div>
  )
}
