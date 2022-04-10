import React from "react";
import GetError from "../errorComponent/GetError";

export class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // 다음 렌더링에서 폴백 UI가 보이도록 상태를 업데이트 합니다.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {}

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
