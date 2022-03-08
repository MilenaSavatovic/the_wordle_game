import { useMemo } from 'react'

export const Attempt = ({ word }) => {
  console.log(word)
  const letters = useMemo(() => {
    return word ? word.split('') : []
  }, [word])

  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      {letters.map((letter, index) => (
        <Letter letter={letter} key={`${letter}-${index}`} />
      ))}
    </div>
  )
}

const Letter = ({ letter }) => {
  return <div style={{ backgroundColor: 'orange', margin: 20 }}>{letter}</div>
}
