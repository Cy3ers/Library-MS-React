// ./App.tsx

import React, { useState } from "react";
import { createBrowserRouter, RouterProvider, RouteObject, Navigate } from "react-router-dom";
import withErrorBoundary from "./hoc/withErrorBoundary";
import LoginContainer from "./containers/LoginContainer";
import DashboardContainer from "./containers/DashboardContainer";
import PrivateRoute from "./PrivateRoute";
import { isAuthenticated } from "./auth";
import BookContextProvider from "./contexts/BookContext";

const ErrorBoundaryLoginContainer = withErrorBoundary(LoginContainer);

const App: React.FC = () => {
  const [error, setError] = useState("");

  const routes: RouteObject[] = [
    {
      path: "/login",
      element: (
        <ErrorBoundaryLoginContainer
          error={error}
          setError={setError}
        />
      )
    },
    {
      path: "/dashboard",
      element: (
        <PrivateRoute>
          <DashboardContainer />
        </PrivateRoute>
      )
    },
    {
      path: "/",
      element: isAuthenticated() ? <Navigate to='/dashboard' /> : <Navigate to='/login' />
    }
  ];

  const router = createBrowserRouter(routes);

  return (
    <BookContextProvider>
      <div className='App'>
        <RouterProvider router={router} />
      </div>
    </BookContextProvider>
  );
};

export default withErrorBoundary(App);
