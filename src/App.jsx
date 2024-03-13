import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todo from './todo'
import Actor from './Actor'
import Singer from './Singer'

function App() {
  const [count, setCount] = useState(0)
  const actors = ['abrar','anika','nijhu','zeshan']
  const singers = [
    {id:1, name: 'Acane', age: 24},
    {id:2, name: 'Ikuta', age: 23},
    {id:3, name: 'Ado', age: 26},
    {id:4, name: 'Minami', age: 25},
  ]

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
      <Todo task="Learn React" isDone ={true}></Todo>
      <Todo task="Core Concepts" isDone={false}></Todo>
      <Todo task="Dying" isDone={true}></Todo>
      <h2>Close Friends:</h2>
      {
        actors.map(actor => <Actor name={actor}></Actor>)
      }
      {
        singers.map(singer => <Singer singer={singer}></Singer>)
      }
      

    </>
     
  )
}

function Device(props){
  return <h2>This device: {props.name}, price : {props.price}</h2>
}

function Student(){
  const student = {
    name: "Abrar",
    age: 29,
    money: false
  }
  const styles={
    border: '2px solid blue',
    padding: '20px',
    borderRadius: '10px',
    margin: '20px'
  }
  const old = 26
  return <div style={styles}>
  <h3>Hello I am {student.name}, my age is {old} and im {student.money? 'rich' : 'poor' }</h3>
  </div>
}
export default App
