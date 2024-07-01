// ./App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './components/Login';
import AdminDashboard from './components/AdminDashboard';
import UserDashboard from './components/UserDashboard';
import PrivateRoute from './PrivateRoute';
import { isAuthenticated, getUser, logout } from './auth';
import BookContextProvider from './contexts/BookContext';

const App = () => {
  return (
    <Router>
      <div className="App">
        <BookContextProvider>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route
              path="/admin"
              element={
                <PrivateRoute>
                  <AdminDashboard />
                </PrivateRoute>
              }
            />
            <Route
              path="/user"
              element={
                <PrivateRoute>
                  <UserDashboard />
                </PrivateRoute>
              }
            />
            <Route
              path="/"
              element={
                isAuthenticated() ? (
                  <Navigate to={getUser().role === 'admin' ? '/admin' : '/user'} />
                ) : (
                  <Navigate to="/login" />
                )
              }
            />
          </Routes>
          <button onClick={logout}>Logout</button>
        </BookContextProvider>
      </div>
    </Router>
  );
};

export default App;
