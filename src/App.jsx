import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SupabaseForm from './Component/SupabaseFrom'

function App() {
  const [count, setCount] = useState(0)

  return (
   <>
   <SupabaseForm />
    </>
  )
}

export default App
