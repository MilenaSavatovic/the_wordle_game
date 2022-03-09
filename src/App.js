import './App.css'
import TheWordleGame from './TheWordleGame'

function App() {
  let words = require('./6.json')
  let word = words[Math.floor(Math.random() * words.length)]
  return (
    <div className="App">
      <TheWordleGame words={words} word={word} />
    </div>
  )
}

export default App
