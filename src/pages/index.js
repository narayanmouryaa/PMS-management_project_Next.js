import SignIn from "@/pages/auth/SignIn";
import React from "react";
import { ToastContainer } from "react-toastify";

// import ReduxStpreProvider from "../../store/provider";


// import { hydrateRoot } from 'react-dom/client';

// const domNode = document.getElementById('root');
// const root = hydrateRoot(domNode, reactNode);


const index = () => {
  return (
    <div>
      {/* <ReduxStpreProvider> */}
        <SignIn />
      {/* </ReduxStpreProvider> */}
    </div>
  );
};

export default index;
