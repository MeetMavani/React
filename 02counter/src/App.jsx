import { useState } from 'react'
import './index.css'

function App() {

  const [counter, setCounter]  = useState(15)

  //let counter = 15

  const addValue = () => {
    //counter = counter + 1

    if (counter < 20) {
      setCounter(counter + 1)
      
      // setCounter(prevCounter => prevCounter + 1)
      // setCounter(prevCounter => prevCounter + 1 )
      // setCounter(prevCounter => prevCounter + 1)
      // setCounter(prevCounter => prevCounter + 1)
    }

    
  }

  const removeValue = () => {
    if (counter > 0) {
      setCounter(counter - 1)
    }
  }
  
  return (
    <>
      <div id="body">
      <h1>Chai aur react</h1>
      <h2>Counter value: {counter}</h2>

      <button
      onClick={addValue}
      >Add value {counter}</button> 
      <br />
      <button
      onClick={removeValue}
      >remove value {counter}</button>
      <p>footer: {counter}</p>
      </div>
    </>
  )
}

export default App