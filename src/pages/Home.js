import React from 'react'
import Navbar from "./components/Navbar"
import FixedSidenav from './components/Fixedsidenav'
import MiniDrawer from './components/Minidrawer'
import "../styles/Home.module.css"
// import Divider from '@mui/material/Divider';

const Home = () => {
  return (
    <>
       <Navbar/>  
       {/* <Divider component='li' style={{ paddingTop: '35px' }} />      */}
     <FixedSidenav/> 
     <MiniDrawer/>
   </>
  )
}

export default Home

