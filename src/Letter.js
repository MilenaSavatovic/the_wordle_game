import React from 'react'
import './Letter.css'

export default function Letter(props) {
  if (props.letter === props.searchedWord[props.index]) {
    return <div className="correctLetter letter">{props.letter}</div>
  } else if (props.searchedWord.join('').includes(props.letter)) {
    // props.wordTrimming(props.letter)
    // console.log(props.trimmedWord)
    return <div className="misplacedLetter letter">{props.letter}</div>
  } else {
    return <div className="wrongLetter letter">{props.letter}</div>
  }
}
