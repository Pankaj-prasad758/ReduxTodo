``

import './App.css'
import AddTodo from './Components/AddTodo'
import Todos from './Components/Todos'

function App() {


  return (
    <>
      <h1 className='text-white text-center text-3xl'>Redux-Tool-Kit Todo</h1>
       <AddTodo />
       <Todos />
    </>
  )
}

export default App
