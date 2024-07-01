import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    username: "Meet",
    age: 21
  }
  let newArr = [1, 2, 3]

  return (
    <>
      <h1 className='bg-green-300 text-black p-4 rounded-xl mb-4'>Tailwind test</h1>
      <Card User="MeetMavani" btnText="click me"/>
      <Card User="Chintu" btnText="visit me"/>
    </>
  )
}

export default App
