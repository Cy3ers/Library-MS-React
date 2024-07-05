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
import { ErrorBoundary } from "react-error-boundary";
import { RenderError } from "./components/errors/ErrorBoundaryComponent";

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
    <div className='App'>
      <ErrorBoundary
        FallbackComponent={RenderError}
        onError={() => console.log("Some error caught!!")}
      >
        <BookContextProvider>
          <ToastProvider>
            <RouterProvider router={router} />
          </ToastProvider>
        </BookContextProvider>
      </ErrorBoundary>
    </div>
  );
};

export default withErrorBoundary(App);
