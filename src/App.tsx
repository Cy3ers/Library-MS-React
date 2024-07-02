// ./App.tsx

import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import LoginContainer from "./containers/LoginContainer";
import DashboardContainer from "./containers/DashboardContainer";
import PrivateRoute from "./PrivateRoute";
import { isAuthenticated, logout } from "./auth";
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
              path='/dashboard'
              element={
                <PrivateRoute>
                  <DashboardContainer />
                </PrivateRoute>
              }
            />
            <Route
              path='/'
              element={isAuthenticated() ? <Navigate to='/dashboard' /> : <Navigate to='/login' />}
            />
          </Routes>
          <button onClick={logout}>Logout</button>
        </BookContextProvider>
      </div>
    </Router>
  );
};

export default App;
