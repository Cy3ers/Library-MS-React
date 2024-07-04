// ./App.tsx

import React from "react";
import { createBrowserRouter, RouterProvider, RouteObject, Navigate, Outlet } from "react-router-dom";
import withErrorBoundary from "./hoc/withErrorBoundary";
import LoginContainer from "./containers/LoginContainer";
import DashboardContainer from "./containers/DashboardContainer";
import PrivateRoute from "./PrivateRoute";
import { isAuthenticated } from "./auth";
import BookContextProvider from "./contexts/BookContext";
import AddBookContainer from "./containers/AddBookContainer";
import UserListContainer from "./containers/UserListContainer";
import ToastProvider from "./contexts/ToastContext";

const ErrorBoundaryLoginContainer = withErrorBoundary(LoginContainer);

const App: React.FC = () => {
  const routes: RouteObject[] = [
    {
      path: "login",
      element: <ErrorBoundaryLoginContainer />
    },
    {
      path: "dashboard",
      element: <Outlet />,
      children: [
        {
          path: "",
          element: (
            <PrivateRoute>
              <DashboardContainer />
            </PrivateRoute>
          )
        },
        {
          path: "book",
          element: <AddBookContainer />
        },
        {
          path: "user",
          element: <UserListContainer />
        }
      ]
    },
    {
      path: "/",
      element: isAuthenticated() ? <Navigate to='/dashboard' /> : <Navigate to='/login' />
    }
  ];

  const router = createBrowserRouter(routes);

  return (
    <BookContextProvider>
      <ToastProvider>
        <div className='App'>
          <RouterProvider router={router} />
        </div>
      </ToastProvider>
    </BookContextProvider>
  );
};

export default withErrorBoundary(App);
