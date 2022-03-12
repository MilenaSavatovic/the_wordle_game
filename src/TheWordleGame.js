import './TheWordleGame.css'
import LetterInput from './LetterInput'
import './6.json'
import refresh from './refresh.svg'
import { useState } from 'react'
import { Attempt } from './Attempt'

export default function TheWordleGame(props) {
  const [inputWord, setInputWord] = useState([])
  const [searchedWord, setSearchedWord] = useState(props.word)
  const [attempts, setAttempts] = useState([])
  const [count, setCount] = useState(0)
  let wordArray = searchedWord.split('')
  console.log(searchedWord)

  const handleInput = (event) => {
    if (event.keyCode > 64 && event.keyCode < 91) {
      const form = event.target.form
      const index = [...form].indexOf(event.target)
      form.elements[index + 1].focus()
    } else {
      event.target.value = null
      resetForm()
      event.target.form.elements[0].focus()
      return alert(
        'Please enter a valid value - Only letters allowed. Try again.',
      )
    }
  }

  const handleInputChange = (event) => {
    setInputWord([...inputWord, event.target.value])
  }

  const resetForm = () => {
    document.getElementById('wordForm').reset()
    setInputWord([])
  }

  const handleSubmit = (event) => {
    let inputString = inputWord.join('')
    setAttempts([...attempts, inputString])
    setCount(count + 1)
    console.log(count)
    console.log(inputWord)
    console.log(inputWord.length)
    if (inputWord.length === 6) {
      if (inputString === searchedWord) {
        resetForm()
        let animation = document.getElementsByClassName('success-animation')
        animation[0].setAttribute('style', 'display: block')
        let form = document.getElementById('wordForm')
        for (let i = 0; i < form.length; i++) {
          form[i].setAttribute('style', 'display: none')
        }

        return alert('You have guessed the word')
      } else {
        resetForm()
        return alert('Try again')
      }
    } else {
      alert('Fill out all fields')
      resetForm()
      setAttempts([])
      setCount(0)
      return false
    }
  }

  const refreshWord = (event) => {
    event.preventDefault()
    setSearchedWord(props.words[Math.floor(Math.random() * props.words.length)])
  }

  const submitForm = (e) => {
    if (e.which === 13) {
      handleSubmit()
    }
  }

  return (
    <div className="TheWordleGame">
      <div className="wordInput">
        {attempts.map((a, index) => (
          <Attempt word={a} key={index} searchedWord={wordArray} />
        ))}
        <form id="wordForm" onKeyPress={submitForm}>
          <LetterInput
            handleInput={handleInput}
            handleInputChange={handleInputChange}
            word={searchedWord}
            letter={wordArray[0]}
          />
          <LetterInput
            handleInput={handleInput}
            handleInputChange={handleInputChange}
            word={searchedWord}
            letter={wordArray[1]}
          />
          <LetterInput
            handleInput={handleInput}
            handleInputChange={handleInputChange}
            word={searchedWord}
            letter={wordArray[2]}
          />
          <LetterInput
            handleInput={handleInput}
            handleInputChange={handleInputChange}
            word={searchedWord}
            letter={wordArray[3]}
          />
          <LetterInput
            handleInput={handleInput}
            handleInputChange={handleInputChange}
            word={searchedWord}
            letter={wordArray[4]}
          />
          <LetterInput
            handleInputChange={handleInputChange}
            word={searchedWord}
            letter={wordArray[5]}
          />
        </form>
        <div className="success-animation">
          <svg
            className="checkmark"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 52 52"
          >
            <circle
              className="checkmark__circle"
              cx="26"
              cy="26"
              r="25"
              fill="none"
            />
            <path
              className="checkmark__check"
              fill="none"
              d="M14.1 27.2l7.1 7.2 16.7-16.8"
            />
          </svg>
        </div>
      </div>
      <div className="submitButtons">
        <button type="submit" className="check" onClick={handleSubmit}>
          Proveri{' '}
        </button>
        <button className="refresh" onClick={refreshWord}>
          <img src={refresh} alt="refresh" />
        </button>
      </div>
    </div>
  )
}
