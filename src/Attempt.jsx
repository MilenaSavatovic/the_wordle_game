import { useMemo } from 'react'
import './Attempt.css'

export const Attempt = ({ word, searchedWord }) => {
  console.log(word, searchedWord)
  const letters = useMemo(() => {
    return word ? word.split('') : []
  }, [word])

  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      {letters.map((letter, index) => (
        <Letter
          letter={letter}
          key={`${letter}-${index}`}
          searchedWord={searchedWord}
          index={index}
        />
      ))}
    </div>
  )
}

const Letter = ({ letter, searchedWord, index }) => {
  if (letter === searchedWord[index]) {
    return <div className="correctLetter letter">{letter}</div>
  } else if (searchedWord.join('').includes(letter)) {
    return <div className="misplacedLetter letter">{letter}</div>
  } else {
    return <div className="wrongLetter letter">{letter}</div>
  }
}
