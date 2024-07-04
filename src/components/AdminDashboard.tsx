// ./components/AdminDashboard.tsx

import React from "react";
import { logout } from "../auth";
import { Book } from "../types";
import { useNavigate } from "react-router-dom";
import { useToast } from "../contexts/ToastContext";

interface AdminDashboardProps {
  books: Book[];
  dispatch: React.Dispatch<any>;
}

const AdminDashboard: React.FC<AdminDashboardProps> = ({ books, dispatch }) => {
  const navigate = useNavigate();
  const { showToast } = useToast();
  return (
    <div>
      <h1 className='navbar'>Admin Dashboard</h1>
      <br />
      {/* Route Here */}
      <button
        className='nav-button'
        onClick={() => {
          navigate("/dashboard/book");
        }}
      >
        Add Books
      </button>
      <button
        className='nav-button'
        onClick={() => {
          navigate("/dashboard/user");
        }}
      >
        Add Users
      </button>
      <button
        className='nav-button'
        onClick={logout}
      >
        Logout
      </button>
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
                {!book.checkedOut && (
                  <button
                    className='dispatch-button'
                    onClick={() => {
                      dispatch({ type: "REMOVE_BOOK", isbn: book.isbn });
                      showToast("Book deleted successfully!");
                    }}
                  >
                    Delete Book
                  </button>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AdminDashboard;
