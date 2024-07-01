// ./components/AdminDashboard.js

import React, { useContext, useState } from "react";
import AddBook from "./AddBook";
import UserList from "./UserList";
import { BookContext } from "../contexts/BookContext";

const AdminDashboard = () => {
  const { books, dispatch } = useContext(BookContext);
  const [users, setUsers] = useState([]);

  const addUser = (user) => {
    setUsers([...users, user]);
  };

  const removeUser = (username) => {
    setUsers(users.filter((user) => user.username !== username));
  };

  return (
    <div>
      <h1 className='navbar'>Admin Dashboard</h1>
      <AddBook />
      <div className='book-list'>
        <h2 className='li-header'>Book List</h2>
        <ul>
          {books.map((book) => {
            return (
              <li>
                <div className='title'>{book.title}</div>
                <div className='author'>{book.author}</div>
                <div className='isbn'>{book.isbn}</div>
                <div className='issued'>{book.checkedOut ? "Checkout Out" : "Available"}</div>
                <div>
                  {book.checkedOut ? (
                    <button onClick={() => dispatch({ type: "RETURN_BOOK", isbn: book.isbn })}>Return Book</button>
                  ) : (
                    <button onClick={() => dispatch({ type: "REMOVE_BOOK", isbn: book.isbn })}>Delete Book</button>
                  )}
                </div>
              </li>
            );
          })}
        </ul>
      </div>
      <UserList
        users={users}
        addUser={addUser}
        removeUser={removeUser}
      />
    </div>
  );
};

export default AdminDashboard;
