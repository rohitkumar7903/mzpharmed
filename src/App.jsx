import { useState } from 'react'

import './App.scss'
import Landing from './pages/Landing'
import './i18n';

function App() {
  const [count, setCount] = useState(0)
 

  return (
    <>
    <Landing></Landing>
    </>
  )
}

export default App
