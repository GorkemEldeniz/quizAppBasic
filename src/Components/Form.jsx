import React, { useState } from 'react'
import { baseURL } from '../baseURL'
import { context } from '../context/index'
import { useNavigate } from 'react-router-dom'
import getQuestions from '../API/getQuestions'
function Form({ setNav }) {
  const { setUrlParams, setData } = context()
  const navigator = useNavigate()
  const [range, setRange] = useState(0)
  const handleSubmit = async (e) => {
    e.preventDefault()
    let datas = new FormData(e.target)
    const url = new URL(baseURL)
    const add_params = {
      difficulty: datas.get('diffucilty'),
      categories: datas.get('categories'),
      limit: datas.get('limit'),
    }
    const params = new URLSearchParams([
      ...Object.entries(add_params), // [["c","a"],["d","2"],["e","false"]]
    ]).toString()
    try {
      let payload = await getQuestions(params)
      setData([...payload])
      navigator('/')
    } catch (er) {
      alert(er.message)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="user-form">
      <select name="categories" id="">
        <option value="Science">Science</option>
        <option value="Music">Music</option>
        <option value="History">History</option>
        <option value="Geography">Geography</option>
        <option value="film_and_tv">Film TV</option>
        <option value="food_and_drink">Food Drink</option>
        <option value="sport_and_leisure">Sport Leisure</option>
      </select>

      <select name="diffucilty" id="">
        <option value="hard">Hard</option>
        <option value="medium">Medium</option>
        <option value="easy">Easy</option>
      </select>
      <label htmlFor="limit">{range}</label>
      <input
        type="range"
        name="limit"
        min="0"
        max="20"
        value={range}
        onInput={(e) => setRange(e.target.value)}
      />
      <button type="submit">Start</button>
    </form>
  )
}

export default Form
