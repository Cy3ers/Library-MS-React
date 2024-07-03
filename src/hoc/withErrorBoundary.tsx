// ./hoc/withErrorBoundary.tsx

import React, { ComponentType } from "react";

interface ErrorProps {
  error?: string;
  setError?: (error: string) => void;
}

const withErrorBoundary = (WrappedComponent: ComponentType<any>) => (props: ErrorProps) => {
  const { error } = props;
  return (
    <div>
      <WrappedComponent {...props} />
      {error && <div className='error-msg'>{error}</div>}
    </div>
  );
};

export default withErrorBoundary;
