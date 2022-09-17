import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { context } from '../context/index'
import { pointTable } from '../Import'
import Quesitons from '../Components/Quesitons'
function Quiz({ setIsFinish }) {
  const { data,setScore } = context()
  const navigate = useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault()
    let userAnswer = new FormData(e.target)
    userAnswer = Object.fromEntries(userAnswer)
    for (let key in userAnswer) {
      let answerObj = data.find(({ id }) => id == key)
      if (answerObj.correctAnswer == userAnswer[key]) {
        setScore((pre) => pre + pointTable[answerObj.difficulty])
      }
    }
    setIsFinish(true)
    navigate('/result')
  }
  return (
    <form onSubmit={handleSubmit}>
      {data.map((el,idx) => (
        <Quesitons key={el.id} {...el} index={idx} />
      ))}
      <button type="submit">Submit and Finish the quiz</button>
    </form>
  )
}

export default Quiz
