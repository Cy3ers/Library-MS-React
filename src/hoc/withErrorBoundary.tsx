// ./hoc/withErrorBoundary.tsx

import React, { Component } from "react";

interface State {
  hasError: boolean;
  error: Error | null;
  errorInfo: React.ErrorInfo | null;
}

const withErrorBoundary = (WrappedComponent: React.ComponentType) => {
  return class ErrorBoundary extends Component<{}, State> {
    state: State = {
      hasError: false,
      error: null,
      errorInfo: null
    };

    static getDerivedStateFromError(error: Error) {
      return { hasError: true };
    }

    componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
      this.setState({
        error,
        errorInfo
      });
    }

    render() {
      if (this.state.hasError) {
        return (
          <div>
            <h2>Something went wrong.</h2>
            <details>
              {this.state.error && this.state.error.toString()}
              <br />
              {this.state.errorInfo?.componentStack}
            </details>
          </div>
        );
      }
      return <WrappedComponent {...this.props} />;
    }
  };
};

export default withErrorBoundary;
