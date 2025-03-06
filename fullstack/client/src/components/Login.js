import React, { useState, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from './AuthContext';
import { useNavigate } from 'react-router';

const Login = () => {

  const [ username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [errorMessage, setErrorMessage] = useState(null);
  const { setToken } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      const response = await axios.post("/auth/login", {
        username,
        password
      });

      setToken(response.data.token);

      localStorage.setItem("token", response.data.token);
      navigate("/dashboard")
    } catch (error) {

      console.error("Authentication failed:", error);

      setToken(null);
      localStorage.removeItem("token")

      if (error.response && error.response.data) {
        setErrorMessage(error.response.data);
      } else {

        setErrorMessage("An unexpected error occurred. Please try again.")
      }
    }
  };
  return (
    <div>
      {errorMessage && <div style={{ color: "red" }}>{errorMessage}</div>}{" "}
      <form onSubmit={handleSubmit}>
        <input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}