import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Parent from './Components/Parent'
import PersonDetails from './Components/PersonDetails'
import Books from './Components/Books'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   
    {/* <Parent> </Parent> */}

    {/* <PersonDetails> </PersonDetails> */}

    <Books></Books>
    </>
  )
}

export default App;
