import React from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  function handleLogin() {
    localStorage.setItem("isAuth", "true");
    navigate("/account");
  }

  return (
    <div>
      <h2>Please login to continue</h2>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login;
