// ./components/UserList.tsx

import React, { FC } from "react";
import { User, UserListProps } from "../types";

const UserList: FC<UserListProps> = ({ users, addUser, removeUser }) => {
  const [username, setUsername] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");
  const [role, setRole] = React.useState<string>("user");

  const handleAddUser = (e: React.FormEvent) => {
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
        {users.map((user: User) => (
          <li key={user.username}>
            {user.username} ({user.role})<button onClick={() => removeUser(user.username)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
