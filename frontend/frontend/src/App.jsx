import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './Components/Navbar/Navbar'
import Herosection from './Components/heroSection/heroSection'
import Secondaryherosec from './Components/heroSection/Secondaryherosec'
import EVPage from './Components/EVPage/EVPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Herosection/>
      <Secondaryherosec/>
      <EVPage/>
    </>
  )
}

export default App;
