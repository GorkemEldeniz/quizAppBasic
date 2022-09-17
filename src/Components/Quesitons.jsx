import React from 'react'
import { useState, useRef } from 'react'
import arrayShuffle from 'array-shuffle'

function Quesitons({ index,id, correctAnswer, incorrectAnswers, question }) {
  const shuffledOptions = arrayShuffle([correctAnswer, ...incorrectAnswers])
  return (
    <>
      <header>
        <h3>{index + 1}-{question}</h3>
      </header>
      {shuffledOptions.map((el, i) => (
        <div className="option" key={i}>
          <label
            style={{ color: el == correctAnswer && 'green' }}
            htmlFor={`${el}-${id}`}
          >
            {el}
          </label>
          <input
            style={{ color: el !== correctAnswer && 'red' }}
            type="radio"
            name={id}
            value={el}
            id={`${el}-${id}`}
          />
        </div>
      ))}
      <br />
    </>
  )
}

export default Quesitons
