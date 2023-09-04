import { ThemeProvider } from 'next-themes';

import {
  AuthProvider,
  QueryProvider,
  StoreProvider,
} from './components';

import { ModalProvider } from '@/hooks/useModal';
import { LoaderProvider } from '@/hooks/useLoader';

const Providers = ({ children, props }) => {
  return (
    <>
      <QueryProvider props={props}>
        <StoreProvider>
          <ThemeProvider attribute="class" storageKey="theme">
            <AuthProvider>
              <ModalProvider>
                <LoaderProvider>{children}</LoaderProvider>
              </ModalProvider>
            </AuthProvider>
          </ThemeProvider>
        </StoreProvider>
      </QueryProvider>
    </>
  );
};

export default Providers;
