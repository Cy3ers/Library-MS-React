// ./containers/AdminDashboardContainer.tsx

import React, { useContext, useState } from "react";
import AdminDashboard from "../components/AdminDashboard";
import { BookContext } from "../contexts/BookContext";
import withErrorBoundary from "../hoc/withErrorBoundary";

const AdminDashboardContainer: React.FC = () => {
  const { books, dispatch } = useContext(BookContext)!;
  const [users, setUsers] = useState<{ username: string; password: string; role: string }[]>([]);

  const addUser = (user: { username: string; password: string; role: string }) => {
    setUsers([...users, user]);
  };

  const removeUser = (username: string) => {
    setUsers(users.filter((user) => user.username !== username));
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
