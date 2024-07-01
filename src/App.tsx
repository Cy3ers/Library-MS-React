// ./App.tsx

import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import LoginContainer from "./containers/LoginContainer";
import AdminDashboardContainer from "./containers/AdminDashboardContainer";
import UserDashboardContainer from "./containers/UserDashboardContainer";
import PrivateRoute from "./PrivateRoute";
import { isAuthenticated, getUser, logout } from "./auth";
import BookContextProvider from "./contexts/BookContext";

const App: React.FC = () => {
  return (
    <Router>
      <div className='App'>
        <BookContextProvider>
          <Routes>
            <Route
              path='/login'
              element={<LoginContainer />}
            />
            <Route
              path='/admin'
              element={
                <PrivateRoute>
                  <AdminDashboardContainer />
                </PrivateRoute>
              }
            />
            <Route
              path='/user'
              element={
                <PrivateRoute>
                  <UserDashboardContainer />
                </PrivateRoute>
              }
            />
            <Route
              path='/'
              element={
                isAuthenticated() ? (
                  getUser()?.role === "admin" ? ( // Use optional chaining operator
                    <Navigate to='/admin' />
                  ) : (
                    <Navigate to='/user' />
                  )
                ) : (
                  <Navigate to='/login' />
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
