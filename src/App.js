import './App.css'
import TheWordleGame from './TheWordleGame'

function App() {
  let words = require('./6.json')
  return (
    <div className="App">
      <TheWordleGame words={words} />
    </div>
  )
}

export default App
