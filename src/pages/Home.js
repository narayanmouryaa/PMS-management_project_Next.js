import React from 'react'
import Navbar from "./components/Navbar"
import FixedSidenav from './components/Fixedsidenav'
import MiniDrawer from './components/Minidrawer'
import "../styles/Home.module.css"
const Home = () => {
  return (
    <>
      <Navbar/>  
     <FixedSidenav/> 
     <MiniDrawer/>
     <div>
      <p>hello</p>
     </div>
   </>
  )
}

export default Home

