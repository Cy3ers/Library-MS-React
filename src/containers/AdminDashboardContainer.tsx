// ./containers/AdminDashboardContainer.tsx

import React, { useContext, useEffect, useState } from "react";
import AdminDashboard from "../components/AdminDashboard";
import { BookContext } from "../contexts/BookContext";
import withErrorBoundary from "../hoc/withErrorBoundary";

const AdminDashboardContainer: React.FC = () => {
  const { books, dispatch } = useContext(BookContext)!;
  const [users, setUsers] = useState<{ username: string; password: string; role: string }[]>([]);

  const getUsersFromLocalStorage = (): { username: string; password: string; role: string }[] => {
    const storedUsers = localStorage.getItem("users");
    return storedUsers ? JSON.parse(storedUsers) : [];
  };

  const saveUsersToLocalStorage = (updatedUsers: { username: string; password: string; role: string }[]) => {
    localStorage.setItem("users", JSON.stringify(updatedUsers));
  };

  useEffect(() => {
    const storedUsers = getUsersFromLocalStorage();
    setUsers(storedUsers);
  }, []);

  const addUser = (user: { username: string; password: string; role: string }) => {
    const updatedUsers = [...users, user];
    setUsers(updatedUsers);
    saveUsersToLocalStorage(updatedUsers);
  };

  const removeUser = (username: string) => {
    const updatedUsers = users.filter((user) => user.username !== username);
    setUsers(updatedUsers);
    saveUsersToLocalStorage(updatedUsers);
  };

  return (
    <AdminDashboard
      books={books}
      dispatch={dispatch}
      users={users}
      addUser={addUser}
      removeUser={removeUser}
    />
  );
};

export default withErrorBoundary(AdminDashboardContainer);
