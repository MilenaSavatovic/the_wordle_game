import React from 'react'
import LetterInput from './LetterInput'
import './WordInput.css'

export default function WordInput(props) {
  const handleInput = (event) => {
    if (event.keyCode > 64 && event.keyCode < 91) {
      const form = event.target.form
      console.log(form)
      const index = [...form].indexOf(event.target)
      console.log(index)
      form.elements[index + 1].focus()

      //   event.preventDefault()
    }
  }

  return (
    <div className="WordInput">
      <form>
        <LetterInput handleInput={handleInput} />
        <LetterInput handleInput={handleInput} />
        <LetterInput handleInput={handleInput} />
        <LetterInput handleInput={handleInput} />
        <LetterInput handleInput={handleInput} />
        <LetterInput />
      </form>
    </div>
  )
}
