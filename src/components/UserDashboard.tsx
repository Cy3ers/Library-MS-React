// ./components/UserDashboard.tsx

import React, { useContext } from "react";
import { BookContext } from "../contexts/BookContext";
import { Book } from "../types";

const UserDashboard: React.FC = () => {
  const { books, dispatch } = useContext(BookContext)!; // Type assertion

  return (
    <div>
      <h1 className='navbar'>User Dashboard</h1>
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
                  {!book.checkedOut && (
                    <button onClick={() => dispatch({ type: "ISSUE_BOOK", isbn: book.isbn })}>Check Out</button>
                  )}
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default UserDashboard;
