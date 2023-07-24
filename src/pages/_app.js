"use client"
import '@/styles/globals.css'
import ReduxStoreProvider from '@/store/provider'
import NavbarFixed from './components/Navbar';
import FixedSidenav from './components/Fixedsidenav';
import MiniDrawer from './components/Minidrawer';

let pathName = "";
if (typeof window !== "undefined") {
  pathName = window.location.pathname
}

export default function App({ Component, pageProps, children }) {
  console.log(pathName, pathName === "/Screen/settings")
  return (
    <ReduxStoreProvider>
      {/* <ToastContainer autoClose={2000} /> */}
      <Component {...pageProps} />
      {children}
      <NavbarFixed />
      <FixedSidenav />
      {pathName === "/Screen/settings" ? null : <MiniDrawer />} 
    </ReduxStoreProvider>
  );
}
