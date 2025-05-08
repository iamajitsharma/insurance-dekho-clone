"use client";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import store from "@/store";
import { Provider } from "react-redux";

interface ClientWrapperProps {
  children: React.ReactNode;
}
const ClientWrapper = ({ children }: ClientWrapperProps) => {
  const queryClient = new QueryClient();
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </Provider>
  );
};

export default ClientWrapper;
