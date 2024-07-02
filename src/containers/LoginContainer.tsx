// ./containers/LoginContainer.tsx

import React, { useState } from "react";
import Login from "../components/Login";
import { login } from "../auth";
import { useNavigate } from "react-router-dom";

const LoginContainer: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const user = login(username, password);
    if (user) {
      navigate("/dashboard");
    } else {
      setError("Invalid credentials");
    }
  };

  return (
    <Login
      username={username}
      setUsername={setUsername}
      password={password}
      setPassword={setPassword}
      handleSubmit={handleSubmit}
      error={error}
    />
  );
};

export default LoginContainer;
