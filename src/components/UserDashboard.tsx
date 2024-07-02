// ./components/UserDashboard.tsx

import React from "react";
import { Book } from "../types";
import { logout } from "../auth";
// import ErrorComponent from "./ErrorComponent";

interface UserDashboardProps {
  books: Book[];
  handleIssueBook: (isbn: string) => void;
  handleReturnBook: (isbn: string) => void;
}

const UserDashboard: React.FC<UserDashboardProps> = ({ books, handleIssueBook, handleReturnBook }) => {
  return (
    <div>
      <h1 className='navbar'>User Dashboard</h1>
      {/* <ErrorComponent /> */}
      <div className='book-list'>
        <ul>
          {books.map((book: Book) => {
            return (
              <li key={book.isbn}>
                <div className='title'>{book.title}</div>
                <div className='author'>{book.author}</div>
                <div className='isbn'>{book.isbn}</div>
                <div className='issued'>{book.checkedOut ? "Checked Out" : "Available"}</div>
                <div>
                  {book.checkedOut ? (
                    <button
                      className='dispatch-button'
                      onClick={() => handleReturnBook(book.isbn)}
                    >
                      Return Book
                    </button>
                  ) : (
                    <button
                      className='dispatch-button'
                      onClick={() => handleIssueBook(book.isbn)}
                    >
                      Check Out
                    </button>
                  )}
                </div>
              </li>
            );
          })}
        </ul>
      </div>
      <button
        className='logout-button'
        onClick={logout}
      >
        Logout
      </button>
    </div>
  );
};

export default UserDashboard;
