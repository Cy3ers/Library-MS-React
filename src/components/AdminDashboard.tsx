// ./components/AdminDashboard.tsx

import React from "react";
import AddBook from "../containers/AddBookContainer";
import UserList from "./UserList";
import { Book } from "../types";

interface AdminDashboardProps {
  books: Book[];
  dispatch: React.Dispatch<any>;
  users: { username: string; password: string; role: string }[];
  addUser: (user: { username: string; password: string; role: string }) => void;
  removeUser: (username: string) => void;
}

const AdminDashboard: React.FC<AdminDashboardProps> = ({ books, dispatch, users, addUser, removeUser }) => {
  return (
    <div>
      <h1 className='navbar'>Admin Dashboard</h1>
      <AddBook />
      <div className='book-list'>
        <h2 className='li-header'>Book List</h2>
        <ul>
          {books.map((book) => (
            <li key={book.isbn}>
              <div className='title'>{book.title}</div>
              <div className='author'>{book.author}</div>
              <div className='isbn'>{book.isbn}</div>
              <div className='issued'>{book.checkedOut ? "Checked Out" : "Available"}</div>
              <div>
                {book.checkedOut ? (
                  <button onClick={() => dispatch({ type: "RETURN_BOOK", isbn: book.isbn })}>Return Book</button>
                ) : (
                  <button onClick={() => dispatch({ type: "REMOVE_BOOK", isbn: book.isbn })}>Delete Book</button>
                )}
              </div>
            </li>
          ))}
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
