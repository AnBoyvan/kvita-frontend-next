import StoreProvider from './components/StoreProvider';
import AuthProvider from './components/AuthProvider';
import { ThemeProvider } from 'next-themes';
import { ModalProvider } from '@/hooks/useModal';
import QueryProvider from './components/QueryProvider';

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
