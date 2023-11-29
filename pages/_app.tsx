import "@/assets/globals.css";
import type { AppProps } from "next/app";

import {
  HydrationBoundary,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { useState } from "react";
import { AuthGuard } from "@/components";

export default function MyApp({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <HydrationBoundary state={pageProps.dehydratedState}>
        <AuthGuard>
          <Component {...pageProps} />
        </AuthGuard>
      </HydrationBoundary>
    </QueryClientProvider>
  );
}