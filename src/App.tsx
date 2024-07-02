// ./App.tsx

import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import withErrorBoundary from "./hoc/withErrorBoundary";
import LoginContainer from "./containers/LoginContainer";
import DashboardContainer from "./containers/DashboardContainer";
import PrivateRoute from "./PrivateRoute";
import { isAuthenticated } from "./auth";
import BookContextProvider from "./contexts/BookContext";

const ErrorBoundaryLoginContainer = withErrorBoundary(LoginContainer);

const App: React.FC = () => {
  const [error, setError] = useState("");

  return (
    <Router>
      <div className='App'>
        <BookContextProvider>
          <Routes>
            <Route
              path='/login'
              element={
                <ErrorBoundaryLoginContainer
                  error={error}
                  setError={setError}
                />
              }
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
        </BookContextProvider>
      </div>
    </Router>
  );
};

export default withErrorBoundary(App);
