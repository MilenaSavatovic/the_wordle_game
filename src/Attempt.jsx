import { useMemo } from 'react'
import './Attempt.css'
import Letter from './Letter'

export const Attempt = ({ word, searchedWord }) => {
  const letters = useMemo(() => {
    return word ? word.split('') : []
  }, [word])

  return (
    <div className="guessedWord">
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
