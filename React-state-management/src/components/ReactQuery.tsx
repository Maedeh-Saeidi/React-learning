import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ReactQueryDemo from "./ReactQueryDemo";
import React from "react";

const queryClient = new QueryClient();

export default function ReactQuery() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDemo></ReactQueryDemo>
    </QueryClientProvider>
  );
}
