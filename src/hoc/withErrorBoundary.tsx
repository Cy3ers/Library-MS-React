// ./hoc/withErrorBoundary.tsx

import React, { Component, ComponentType } from "react";

interface State {
  hasError: boolean;
  error: Error | null;
  errorInfo: React.ErrorInfo | null;
}

interface Props {
  error?: string;
  setError?: (error: string) => void;
}

const withErrorBoundary = (WrappedComponent: ComponentType<any>) => {
  return class ErrorBoundary extends Component<Props, State> {
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

      return (
        <>
          <WrappedComponent {...this.props} />
          {this.props.error && <div className='inv-error'>{this.props.error}</div>}
        </>
      );
    }
  };
};

export default withErrorBoundary;
