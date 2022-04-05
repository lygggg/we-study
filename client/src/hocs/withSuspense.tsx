import React from "react";

export const withSuspense =
  (Component: any, Skeleton?: React.ReactNode) => (props: any) => {
    return (
      <React.Suspense fallback={Skeleton || <div>loading</div>}>
        <Component {...props} />
      </React.Suspense>
    );
  };
