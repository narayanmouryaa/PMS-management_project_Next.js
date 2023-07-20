"use client";
import "@/styles/globals.css";
import ReduxStoreProvider from "@/store/provider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function App({ Component, pageProps, children }) {
  return (
    <ReduxStoreProvider>
      <ToastContainer autoClose={2000} />
      <Component {...pageProps} />
      {children}
    </ReduxStoreProvider>
  );
}
