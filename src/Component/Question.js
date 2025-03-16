import React, { useEffect, useState } from 'react'
import './Question.css'
import data from './data'
import correctSound from '../assets/correct.mp3'
import wrongSound from '../assets/wrong.mp3'
import useSound from 'use-sound'


export default function Question({questionNumber,setQuestionNumber,setWrongAnswer}) {
  
  const [questionData,setQuestionData] = useState(null)
  const [selectedAnswer, setSelectedAnswer] = useState(null)
  const[clickedAnswer,setClickedAnswer] = useState('answer')
  const[correct] = useSound(correctSound)
  const[wrong] = useSound(wrongSound)

  useEffect(()=>{
    setQuestionData([data[questionNumber - 1]])
  },[questionNumber])

  const handleAnswerClick = (a)=>{
    setSelectedAnswer(a)
    setClickedAnswer('answer active')

    setTimeout(()=>{
      setClickedAnswer(a.correct? 'answer correct': 'answer wrong')
    },2000)

    setTimeout(()=>{
      if (a.correct) {
        setQuestionNumber(prevState => prevState +1)
        correct()
      }
      else{
        setWrongAnswer(true)
        wrong()
      }
    },4000)
    
  };
  
  return (
    <div className='quiz'>
      {questionData?.map((question) => 
        <>
          <div className='questions'> {question.question}</div>
          <div className='answers'>
            {question.answers.map(a =>(
              <div className={selectedAnswer === a? clickedAnswer : 'answer'} onClick={()=>handleAnswerClick(a)}>{a.text}</div>
            ))}
          </div>
        </>
      )}
    </div>
  )
}
