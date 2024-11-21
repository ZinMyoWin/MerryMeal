import React, { useState } from "react";
import "./login.css";
import axios from "axios";
import { useHistory } from "react-router-dom/cjs/react-router-dom";
import { toast } from "react-toastify";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const handleLogin = async () => {
    try {
      const response = await axios.post(
        "http://localhost:8080/logic/auth/authenticate",
        {
          email,
          password,
        }
      );
      const token = response.data.jwt;
      const role = response.data.role;
      localStorage.setItem("token", token);
      localStorage.setItem("userRole", role);
      toast.success("You have successfully logged in");
      switch (role) {
        case "ADMIN":
          history.push("/adminMeal");
          break;
        case "MEMBER":
          history.push("/menu");
          break;
        case "PARTNER":
          history.push("/");
          break;
        case "VOLUNTEER":
          history.push("/");
          break;
        default:
          history.push("/");
      }
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    } catch (error) {
      if (error.response) {
        if (error.response.status === 429) {
          toast.error(error.response.data);
        } else if (error.response.status === 401) {
          toast.error(error.response.data);
        } else {
          toast.error("Login Failed: " + error.message);
        }
      } else {
        toast.error("Login Failed: " + error.message);
      }
    }
  };

  return (
    <div className='login-container'>
      <h1>Login</h1>
      <form className='login-form'>
        <div className='form-group'>
          <label className='login-label'>Email:</label>
          <input
            className='login-input'
            type='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className='form-group'>
          <label className='login-label'>Password:</label>
          <input
            className='login-input'
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button className='login-btn' type='button' onClick={handleLogin}>
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
