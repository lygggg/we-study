import React from "react";
import GetError from "../errorComponent/GetError";

export class ErrorBoundary extends React.Component<{}, { hasError: boolean }> {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return <GetError />;
    }

    return this.props.children;
  }
}

export const withErrorBoundary = (Component: any) => (props: any) => {
  return (
    <ErrorBoundary>
      <Component {...props} />
    </ErrorBoundary>
  );
};
