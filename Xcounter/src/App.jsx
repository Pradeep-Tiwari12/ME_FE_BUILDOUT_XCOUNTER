import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

function decrement(){
  // if(count>0){
    setCount(count-1)
  //}
}
  
  return (
    <>
   <h1>Counter App</h1>
<h2>Count: {count}</h2>
   <button onClick={()=>{setCount(count+1)}}>Increment</button>
   <button onClick={decrement}>Decrement</button>
    </>
  )
}

export default App
