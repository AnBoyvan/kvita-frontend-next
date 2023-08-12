import { ThemeProvider } from 'next-themes';
import { ModalProvider } from '@/hooks/useModal';

import {
  AuthProvider,
  QueryProvider,
  StoreProvider,
} from './components';

const Providers = ({ children, props }) => {
  return (
    <>
      <QueryProvider props={props}>
        <StoreProvider>
          <ThemeProvider attribute="class" storageKey="theme">
            <AuthProvider>
              <ModalProvider>{children}</ModalProvider>
            </AuthProvider>
          </ThemeProvider>
        </StoreProvider>
      </QueryProvider>
    </>
  );
};

export default Providers;
