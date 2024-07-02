// ./containers/DashboardContainer.tsx

import React from "react";
import { getUser } from "../auth";
import AdminDashboardContainer from "./AdminDashboardContainer";
import UserDashboardContainer from "./UserDashboardContainer";

const DashboardContainer: React.FC = () => {
  const user = getUser();

  if (!user) {
    return <div>Error: User not found</div>;
  }

  return user.role === "admin" ? <AdminDashboardContainer /> : <UserDashboardContainer />;
};

export default DashboardContainer;
