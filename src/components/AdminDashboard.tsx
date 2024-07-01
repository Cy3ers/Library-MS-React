// ./components/AdminDashboard.tsx

import React, { useContext, useState } from "react";
import AddBook from "./AddBook";
import UserList from "./UserList";
import { BookContext } from "../contexts/BookContext";
import { Book } from "../types";

const AdminDashboard: React.FC = () => {
  const { books, dispatch } = useContext(BookContext)!;
  const [users, setUsers] = useState<{ username: string; password: string; role: string }[]>([]);

  const addUser = (user: { username: string; password: string; role: string }) => {
    setUsers([...users, user]);
  };

  const removeUser = (username: string) => {
    setUsers(users.filter((user) => user.username !== username));
  };

  return (
    <div>
      <h1 className='navbar'>Admin Dashboard</h1>
      <AddBook />
      <div className='book-list'>
        <h2 className='li-header'>Book List</h2>
        <ul>
          {books.map((book: Book) => (
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
