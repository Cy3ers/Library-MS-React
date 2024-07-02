// ./components/ErrorComponent.tsx

import React from "react";

const ErrorComponent: React.FC = () => {
  throw new Error("This is a test error!");
};

export default ErrorComponent;
