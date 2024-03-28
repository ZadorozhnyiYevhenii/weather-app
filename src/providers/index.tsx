import { ReactQueryProvider } from "./ReactQueryProvider";
import { ReactRouterProvider } from "./ReactRouterProvider";

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <ReactQueryProvider>
      <ReactRouterProvider>
        {children}
      </ReactRouterProvider>
    </ReactQueryProvider>
  );
};
