import {
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { useState } from 'react';

const QueryProvider = ({ children, props }) => {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={props.dehydratedState}>{children}</Hydrate>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
};

export default QueryProvider;
