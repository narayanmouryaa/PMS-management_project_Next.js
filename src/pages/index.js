import SignIn from "@/pages/auth/SignIn";
import React from "react";
import { ToastContainer } from "react-toastify";
// import ReduxStpreProvider from "../../store/provider";

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
