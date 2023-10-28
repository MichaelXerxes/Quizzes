import React, { ComponentType, ReactNode, Suspense, ReactElement } from "react";

export default function withSuspense<T extends Record<string, unknown>>(
  Component: ComponentType<T>,
  SuspenseComponent: ReactNode = null
): ComponentType<T> {
  return function WithSuspense(props: T): ReactElement {
    return (
      <Suspense fallback={SuspenseComponent || <div>Loading...</div>}>
        <Component {...props} />
      </Suspense>
    );
  };
}
