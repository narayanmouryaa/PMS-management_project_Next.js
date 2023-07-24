import "@/styles/globals.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from "./Home";
import {Provider} from 'react-redux'
import {store} from '../store/store'

export default function App({ Component, pageProps}) {
  return (
    <Provider store={store}>
      <ToastContainer autoClose={2000} />
      <Component {...pageProps} />
      {/* <Home/> */}
    </Provider>
  );
}
