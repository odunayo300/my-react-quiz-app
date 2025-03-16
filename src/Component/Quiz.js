import React, { useState } from 'react'
import Timer from './Timer'
import Question from './Question'
import { useEffect } from 'react';
import Win from './win'

const moneyPyramid = [
  {id: 1, amount: "$ 100" },
  {id: 2, amount: "$ 200" },
  {id: 3, amount: "$ 300" },
  {id: 4, amount: "$ 400" },
  {id: 5, amount: "$ 500" },
  {id: 6, amount: "$ 1,000" },
  {id: 7, amount: "$ 2,000" },
  {id: 8, amount: "$ 3,000" },
  {id: 9, amount: "$ 4,000" },
  {id: 10, amount: "$ 5,000" },
  {id: 11, amount: "$ 10,000" },
  {id: 12, amount: "$ 20,000" },
  {id: 13, amount: "$ 50,000" },
  {id: 14, amount: "$ 100,000" },
  {id: 15, amount: "$ 200,000" },
  {id: 16, amount: "$ 500,000" },
  {id: 17, amount: "$ 1,000,000"}
].reverse();


export default function Quiz() {

  const [questionNumber, setQuestionNumber] = useState(1)
  const[wrongAnswer, setWrongAnswer] = useState(false)
  const [earned, setEarned] = useState("$ 0")

  useEffect(()=>{
    const findAmount = () =>{
      const foundItem = moneyPyramid.find((item) =>item.id === questionNumber - 1);
      if(foundItem){
        setEarned(foundItem.amount)
      }else{
        setEarned('$ 0')
      }
    };

    findAmount();
  },[questionNumber])


  return (
    <div className='app'>
      {questionNumber > 17? <Win/> :
        <>
          <div className='main'>
            {wrongAnswer?<h1 className='endText'>You won : {earned}</h1> :(
               <>
                <div className='top'>
                  <Timer
                    questionNumber = {questionNumber}
                    setWrongAnswer ={setWrongAnswer}
                  />
                </div>
                <div className='bottom'>
                  <Question
                    questionNumber = {questionNumber}
                    setQuestionNumber =  {setQuestionNumber}
                    setWrongAnswer = {setWrongAnswer}
                  />
                </div>
              </>
              )
            }
          </div>
          <div className='pyramid'>
              <ul className='moneyList'>
                {moneyPyramid.map((m) => (
                  <li className={questionNumber === m.id?"moneyListItem active": "moneyListItem"}>
                    <div className='moneyListItemNumber'>{m.id}</div>
                    <div className='moneyListItemAmount'>{m.amount}</div>
                  </li>
                ))}
              </ul>
          </div>     
        </>
      }
    </div>
  )
}
