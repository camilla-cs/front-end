import { useState } from 'react'
import './App.css'
import Background from './components/Background';
import Navbar from './components/Navbar'; 
import Footer from './components/Footer'; 

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Background/>
     <Navbar/>
     <Footer/>


     
    </>
  )
}

export default App
