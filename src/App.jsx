import { useState } from 'react'
import './App.css'
import quotes from '../src/components/quotes.json'
import QuoteBox from './components/QuoteBox'
import Author from './components/Author'

console.log(quotes)

function App() {

  const randomIndex = Math.floor(Math.random() * quotes.length)

  const [phrase, setPhrase] = useState(randomIndex)

  const changePhrase = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length)
    setPhrase(randomIndex)
  }

  const colors = ['#845ec2', '#d65db1', '#ff6f91', '#462135', '#4621ff', '#00ffff']
  const randomColor = Math.floor(Math.random() * colors.length)
  document.body.style = `background: ${colors[randomColor]}`
 
  return (
    <div className="App">
        <div className='card' style = {{color: colors[randomColor]}} >
             <QuoteBox phrase={phrase}/>
             <Author author={phrase}/>
             <div className='btn'><button onClick={changePhrase} className='img2' style={{background: colors[randomColor]}}><i className="fa-solid fa-angle-right" style = {{color: 'white'}}></i></button></div>
        </div>
    </div>
  )
}

export default App
