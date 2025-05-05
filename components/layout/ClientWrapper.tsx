"use client";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

interface ClientWrapperProps {
  children: React.ReactNode;
}
const ClientWrapper = ({ children }: ClientWrapperProps) => {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

export default ClientWrapper;
