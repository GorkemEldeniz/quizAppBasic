import React from 'react'
import { context } from '../context/index'
import { useNavigate } from 'react-router-dom'
function Result({ setIsFinish }) {
  const { score, setScore,setData } = context()
  const navigate = useNavigate()
  const handle = () => {
    setIsFinish(false)
    setScore(0)
    setData([])
    navigate('/')
  }
  return (
    <>
      <h3>Congrats!! you scored {score} point</h3>
      <button onClick={handle}>New Test!!</button>
    </>
  )
}

export default Result
