import { useMemo } from 'react'
import './Attempt.css'
import Letter from './Letter'

export const Attempt = ({ word, searchedWord }) => {
  const letters = useMemo(() => {
    return word ? word.split('') : []
  }, [word])

  // const [trimmedWord, setTrimmedWord] = useState(searchedWord)

  let trimmedWord = searchedWord

  let wordTrimming = (l) => {
    trimmedWord = searchedWord.join('').replace(l, '').split('')
    console.log(trimmedWord)
    return trimmedWord
    // setTrimmedWord(searchedWord.join('').replace(l, '').split(''))
  }

  return (
    <div className="guessedWord">
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
