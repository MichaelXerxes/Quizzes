import React, { ComponentType, ReactNode, Suspense, ReactElement } from "react";

// export default function withSuspense<T extends Record<string, unknown>>(
//   Component: ComponentType<T>,
//   SuspenseComponent: ReactNode = null
// ): ComponentType<T> {
//   return function WithSuspense(props: T): ReactElement {
//     return (
//       <Suspense fallback={SuspenseComponent || <div>Loading...</div>}>
//         <Component {...props} />
//       </Suspense>
//     );
//   };
// }
export default function withSuspense<T>(
  Component: ComponentType<T>,
  SuspenseComponent: ReactNode = null
): FunctionComponent<T> {
  const WithSuspense: FunctionComponent<T> = (props: T) => {
    return (
      <Suspense fallback={SuspenseComponent || <div>Loading...</div>}>
        <Component {...props} />
      </Suspense>
    );
  };

  return WithSuspense;
}
