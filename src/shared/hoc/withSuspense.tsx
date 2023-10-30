import React, {
  ComponentType,
  ReactNode,
  Suspense,
  FunctionComponent,
} from "react";

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
type JSXElementConstructor<T> = {
  (props: T): JSX.Element | null;
};

export default function withSuspense<T>(
  Component: JSXElementConstructor<T>, // Use the more specific type here
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
