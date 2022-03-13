import React from 'react'
import './LetterInput.css'

export default function LetterInput(props) {
  return (
    <div className="letterInput">
      <input
        type="text"
        maxLength="1"
        onKeyUp={props.handleInput}
        onInput={props.handleInputChange}
      />
    </div>
  )
}
