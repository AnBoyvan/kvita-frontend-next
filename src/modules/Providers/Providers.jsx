import StoreProvider from './components/StoreProvider';
import AuthProvider from './components/AuthProvider';
import { ThemeProvider } from 'next-themes';
import { ModalProvider } from '@/hooks/useModal';

const Providers = ({ children }) => {
  return (
    <>
      <StoreProvider>
        <ThemeProvider attribute="class" storageKey="theme">
          <AuthProvider>
            <ModalProvider>{children}</ModalProvider>
          </AuthProvider>
        </ThemeProvider>
      </StoreProvider>
    </>
  );
};

export default Providers;
