import { useState } from 'react'

import './App.css'
import Navebar from './Components/Navebar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navebar/>
    </>
  )
}

export default App
