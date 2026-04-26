'use client';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

const client = new QueryClient();

function QueryProvider({children}) {
    return (
        <QueryClientProvider client={client}>
            {children}
        </QueryClientProvider>
    )
}

export default QueryProvider;