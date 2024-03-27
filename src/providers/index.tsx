import { ReactQueryProvider } from "./ReactQueryProvider"

export const AppProvider = ({children}: {children: React.ReactNode}) => {
  return (
    <ReactQueryProvider>
      {children}
    </ReactQueryProvider>
  )
}