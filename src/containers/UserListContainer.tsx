// ./containers/UserListContainer.tsx

import React, { useState } from "react";
import UserList from "../components/UserList";
import { User } from "../types";

const UserListContainer: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);

  const addUser = (user: User) => {
    setUsers([...users, user]);
  };

  const removeUser = (username: string) => {
    setUsers(users.filter((user) => user.username !== username));
  };

  return (
    <UserList
      users={users}
      addUser={addUser}
      removeUser={removeUser}
    />
  );
};

export default UserListContainer;
