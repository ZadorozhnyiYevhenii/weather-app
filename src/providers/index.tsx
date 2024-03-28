import { ReactQueryProvider } from "./ReactQueryProvider";
import { ReactRouterProvider } from "./ReactRouterProvider";
import { ReduxProvider } from "./ReduxProvider";

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <ReduxProvider>
      <ReactQueryProvider>
        <ReactRouterProvider>
          {children}
        </ReactRouterProvider>
      </ReactQueryProvider>
    </ReduxProvider>
  );
};
