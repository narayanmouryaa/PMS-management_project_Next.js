"use client"
import '@/styles/globals.css'
import ReduxStoreProvider from '@/store/provider'

export default function App({ Component, pageProps,children }) {
  return (
    <ReduxStoreProvider>
      <Component {...pageProps} />
      {children}
    </ReduxStoreProvider>
  )
}
