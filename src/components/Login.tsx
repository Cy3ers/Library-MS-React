// ./components/Login.tsx

import React from "react";

interface LoginProps {
  username: string;
  setUsername: React.Dispatch<React.SetStateAction<string>>;
  password: string;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  error?: string;
}

const Login: React.FC<LoginProps> = ({ username, setUsername, password, setPassword, handleSubmit }) => {
  return (
    <div>
      <h2 className='navbar'>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label>
          <input
            type='text'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button
          className='submit-btn'
          type='submit'
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
