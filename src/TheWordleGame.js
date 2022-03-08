import React from 'react'
import './TheWordleGame.css'
import LetterInput from './LetterInput'
import './6.json'
import refresh from './refresh.svg'
import { useState } from 'react'
import { Attempt } from './Attempt'

export default function TheWordleGame(props) {
  let word = props.words[Math.floor(Math.random() * props.words.length)]
  let [inputWord, setInputWord] = useState([])
  let [searchedWord, setSearchedWord] = useState(word)
  const [attempts, setAttempts] = useState([])
  let wordArray = word.split('')
  console.log(word)
  console.log(wordArray)

  const handleInput = (event) => {
    if (event.keyCode > 64 && event.keyCode < 91) {
      const form = event.target.form
      const index = [...form].indexOf(event.target)
      form.elements[index + 1].focus()
    }
  }

  const handleInputChange = (event) => {
    setInputWord([...inputWord, event.target.value])
    console.log(inputWord)
    console.log(event.target.value)
  }

  const handleSubmit = (event) => {
    let inputString = inputWord.join('')
    setAttempts([...attempts, inputString])
    if (inputString === searchedWord) {
      setSearchedWord([])
      return alert('You have guessed the word')
    } else {
      return alert('Try again')
    }
  }

  const refreshWord = (event) => {
    event.preventDefault()
    setSearchedWord(props.words[Math.floor(Math.random() * props.words.length)])
  }

  return (
    <div className="TheWordleGame">
      <div className="wordInput">
        {attempts.map((a) => (
          <Attempt word={a} />
        ))}
        <form>
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
