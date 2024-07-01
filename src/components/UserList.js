// ./components/UserList.js

import React, { useState } from "react";

const UserList = ({ users, addUser, removeUser }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("user");

  const handleAddUser = (e) => {
    e.preventDefault();
    addUser({ username, password, role });
    setUsername("");
    setPassword("");
  };

  return (
    <div>
      <h2 className='input-header'>Add Users:</h2>
      <form onSubmit={handleAddUser}>
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
        <div>
          <label>Role:</label>
          <br />
          <select
            className='usr-selector'
            value={role}
            onChange={(e) => setRole(e.target.value)}
            required
          >
            <option value='user'>User</option>
            <option value='admin'>Admin</option>
          </select>
        </div>
        <button type='submit'>Add User</button>
      </form>
      <ul>
        {users.map((user) => (
          <li key={user.username}>
            {user.username} ({user.role})<button onClick={() => removeUser(user.username)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
