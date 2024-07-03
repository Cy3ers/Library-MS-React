// ./containers/AdminDashboardContainer.tsx

import React, { useContext, useEffect, useState } from "react";
import AdminDashboard from "../components/AdminDashboard";
import { BookContext } from "../contexts/BookContext";
import withErrorBoundary from "../hoc/withErrorBoundary";

const AdminDashboardContainer: React.FC = () => {
  const { books, dispatch } = useContext(BookContext)!;

  return (
    <div>
      <AdminDashboard
        books={books}
        dispatch={dispatch}
      />
    </div>
  );
};

export default withErrorBoundary(AdminDashboardContainer);
