import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ProfileHeader from './Components/ProfileHeader'
import AddPost from './Components/AddPost'
import FiterSection from './Components/FiterSection'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div className=''>

    
    
    <ProfileHeader/>
  
    <div> </div>
    <AddPost/>
    <FiterSection/>
    </div>
    </>
  )
}

export default App
