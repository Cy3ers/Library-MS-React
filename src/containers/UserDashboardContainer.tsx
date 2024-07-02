// ./containers/UserDashboardContainer.tsx

import React, { useContext } from "react";
import UserDashboard from "../components/UserDashboard";
import { BookContext } from "../contexts/BookContext";
import withErrorBoundary from "../hoc/withErrorBoundary";

const UserDashboardContainer: React.FC = () => {
  const { books, dispatch } = useContext(BookContext)!; // Type assertion

  const handleIssueBook = (isbn: string) => {
    dispatch({ type: "ISSUE_BOOK", isbn });
  };

  const handleReturnBook = (isbn: string) => {
    dispatch({ type: "RETURN_BOOK", isbn });
  };

  return (
    <UserDashboard
      books={books}
      handleIssueBook={handleIssueBook}
      handleReturnBook={handleReturnBook}
    />
  );
};

export default withErrorBoundary(UserDashboardContainer);
