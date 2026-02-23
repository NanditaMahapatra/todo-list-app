import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ToDoBox from './components/ToDoBox'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='box'> 
    <div className='top'>
    <h1> TO DO LIST </h1>
    </div>
     
     <div className='bottom'>
      <ToDoBox/>
     </div>
    </div>
  )
}

export default App
