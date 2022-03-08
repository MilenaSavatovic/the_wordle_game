import React from 'react'
import './LetterInput.css'
import { useState } from 'react'

export default function LetterInput(props) {
  let [letter, setLetter] = useState(null)

  const checkLetter = () => {
    //letter === props.letter ? alert('true') : alert('not true')
  }

  const letterChange = (event) => {
    setLetter(event.target.value)
    console.log('this is the letter ' + { letter })
    checkLetter()
  }

  return (
    <div className="letterInput">
      <input
        type="text"
        maxLength="1"
        onKeyUp={props.handleInput}
        onChange={(e) => {
          props.handleInputChange(e)
          letterChange(e)
        }}
      />
    </div>
  )
}
