import React, { useState } from "react";
import { TextField, Button, Card, Box } from "@mui/material";
// import Nav from "react-bootstrap/Nav";
import { useCookies } from "react-cookie";
import { useRouter } from "next/router";
import axios from "axios";
import { toast } from "react-toastify";
import Link from "next/link";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SignIn = () => {
  const navigate = useRouter();
  const [cookies, setCookie] = useCookies(["name"]);
  let [login, setLogin] = useState({
    email: "",
    password: "",
  });

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setLogin({ ...login, [name]: value });
  };
  console.log(cookies, "saurabhCookies");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const config = {
      "Content-Type": "application/json",
    };
    const api = await axios.post(
      `https://pmsapi.qrstaff.in/api/user/login`,
      login,
      config
    );
    if (api.status === 200) {
      localStorage.setItem("Userlogintoken", api.data.token);
      setCookie("Userlogintoken", api.data.token);
      // toast.success(api.data.message);
      alert(api.data.message);
      navigate.push("/Home");
    } else {
      alert(api.data.message);
    }
  };

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 500,
    bgcolor: "background.paper",
    borderRadius: "10px",
    boxShadow: 8,
    p: 4,
    mt: 4,
  };

  return (
    <div>
      <ToastContainer autoClose={2000} />
      <h2 style={{ textAlign: "center", fontSize: "40px", marginTop: "60px" }}>
        Project Management System
      </h2>
      <h5
        style={{
          textAlign: "center",
          fontWeight: "600",
          fontSize: "15px",
          marginTop: "40px",
        }}
      >
        Login To Continue
      </h5>

      <Card sx={style}>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Email Address"
            type="email"
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="email"
            onChange={handleOnChange}
          />
          <TextField
            label="Password"
            type="password"
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            onChange={handleOnChange}
          />
          <Box style={{ display: "flex" }}>
            <Button style={{ color: "black", textTransform: "none" }}>
              <Link href="/auth/ForgotPassword">Forgot Password?</Link>
            </Button>

            <Box>
              <Link href="/auth/SignUp">
              <Button style={{ color: "black", textTransform: "none"}}>
                SignUp
              </Button>
              </Link>
            </Box>
          </Box>

          <Button
            style={{ marginTop: "20px", height: "50px", textTransform: "none"}}
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
          >
               
            <Button style={{color:'white'}}>               
            <Link href="/Home" style={{color:'white',textTransform:'none'}}>
              Sign In
             </Link>
              </Button>  
            
            
          </Button>
        </form>
      </Card>
    </div>
  );
};

export default SignIn;
