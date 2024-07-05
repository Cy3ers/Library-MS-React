// ./containers/UserListContainer.tsx

import React, { useState, useEffect } from "react";
import UserList from "../components/UserList";
import { useToast } from "../contexts/ToastContext";
import { useErrorBoundary } from "react-error-boundary";

const UserListContainer: React.FC = () => {
  const [users, setUsers] = useState<{ username: string; password: string; role: string }[]>([]);
  const { showToast } = useToast();
  const { showBoundary } = useErrorBoundary();

  const getUsersFromLocalStorage = (): { username: string; password: string; role: string }[] => {
    const storedUsers = localStorage.getItem("users");
    if (storedUsers) {
      throw new Error("Cannot get users, Some Error Occurred!");
    }
    return storedUsers ? JSON.parse(storedUsers) : [];
  };

  useEffect(() => {
    try {
      const storedUsers = getUsersFromLocalStorage();
      setUsers(storedUsers);
    } catch (err) {
      showBoundary(err);
    }
  }, [showBoundary]);

  const addUser = (user: { username: string; password: string; role: string }) => {
    const updatedUsers = [...users, user];
    setUsers(updatedUsers);
    saveUsersToLocalStorage(updatedUsers);
    showToast("User Added Successfully!");
  };

  const removeUser = (username: string) => {
    const updatedUsers = users.filter((user) => user.username !== username);
    setUsers(updatedUsers);
    saveUsersToLocalStorage(updatedUsers);
    showToast("User Deleted Successfully!");
  };

  const saveUsersToLocalStorage = (updatedUsers: { username: string; password: string; role: string }[]) => {
    localStorage.setItem("users", JSON.stringify(updatedUsers));
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
