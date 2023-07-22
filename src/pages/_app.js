"use client"
import '@/styles/globals.css'
import ReduxStoreProvider from '@/store/provider'
import Navbar from "./components/Navbar"
import FixedSidenav from './components/Fixedsidenav'
import MiniDrawer from './components/Minidrawer'

export default function App({ Component, pageProps,children }) {
  return (
    <ReduxStoreProvider>
      <Component {...pageProps} />
      {children}
      
      <Navbar/>  
      <FixedSidenav />
      <MiniDrawer />
    </ReduxStoreProvider>
  )
}
