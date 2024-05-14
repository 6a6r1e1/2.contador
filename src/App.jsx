import { useState } from 'react'
import './App.css'

export default function App() {
  const [count, setCount] = useState(+localStorage.getItem("number") || 0)

  function reset() {
    const number = 0

    setCount(number)
    localStorage.setItem("number", number);
  }

  function increment() {
    const number = count + 1

    setCount(number)
    localStorage.setItem("number", number);
  }

  function decrement() {
    const number = count - 1

    setCount(number)
    localStorage.setItem("number", number);
  }

  return (
    <>
      <h1>Contador</h1>
      
      <h2>{count}</h2>
      <div className="counter">
        <button onClick={decrement}>-</button>
        <button onClick={reset}>Zerar</button>
        <button onClick={increment}>+</button>
      </div>
    </>
  )
}
