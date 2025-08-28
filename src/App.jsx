import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LearnWebCam from './components/LearnWebCam'
import LearnUseContext from './components/LearnUseContext'
import ZainTest from './components/ZainTest'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <LearnUseContext/>
    <ZainTest/>
     {/* <LearnWebCam/> */}
    </>
  )
}

export default App
