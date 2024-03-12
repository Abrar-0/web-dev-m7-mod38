import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todo from './todo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <Device name = "laptop" price="34k"></Device>
      <Device name = "phone" price="23k"></Device>
      <Student></Student>
      <Todo task="Learn React"></Todo>
      <Todo task="Core Concepts"></Todo>
      <Todo task="Die"></Todo>
    </>
  )
}

function Device(props){
  const style1={
    listStyleType:'none'
  }
  return <h2>This device: {props.name}, price : {props.price}</h2>
}

function Student(){
  const student = {
    name: "Abrar",
    age: 29,
    money: false
  }
  const old = 26
  return <div className='student'>
  <h3>Hello I am {student.name}, my age is {old} and im {student.money? 'rich' : 'poor' }</h3>
  </div>
}
export default App
