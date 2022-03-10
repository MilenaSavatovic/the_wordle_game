import { useMemo } from 'react'
import './Attempt.css'

export const Attempt = ({ word, searchedWord }) => {
  const letters = useMemo(() => {
    return word ? word.split('') : []
  }, [word])

  let trimmedWord = searchedWord

  let wordTrimming = (l) => {
    return (trimmedWord = searchedWord.join('').replace(l, '').split(''))
  }

  return (
    <div
      className="guessedWord"
      style={{ display: 'flex', flexDirection: 'row' }}
    >
      {letters.map((letter, index) => (
        <Letter
          letter={letter}
          key={`${letter}-${index}`}
          trimmedWord={trimmedWord}
          index={index}
          wordTrimming={wordTrimming}
        />
      ))}
    </div>
  )
}

const Letter = ({ letter, trimmedWord, index, wordTrimming }) => {
  if (letter === trimmedWord[index]) {
    return <div className="correctLetter letter">{letter}</div>
  } else if (trimmedWord.join('').includes(letter)) {
    wordTrimming(letter)
    return <div className="misplacedLetter letter">{letter}</div>
  } else {
    return <div className="wrongLetter letter">{letter}</div>
  }
}
