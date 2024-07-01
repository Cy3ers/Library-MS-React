// ./components/UserDashboard.js

import React, { useContext } from "react";
import { BookContext } from "../contexts/BookContext";

const UserDashboard = () => {
  const { books, dispatch } = useContext(BookContext);

  return (
    <div>
      <h1 className='navbar'>User Dashboard</h1>
      <div className='book-list'>
        <ul>
          {books.map((book) => {
            return (
              <li>
                <div className='title'>{book.title}</div>
                <div className='author'>{book.author}</div>
                <div className='isbn'>{book.isbn}</div>
                <div className='issued'>{book.checkedOut ? "Checkout Out" : "Available"}</div>
                <div>
                  {book.checkedOut ? null : (
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
