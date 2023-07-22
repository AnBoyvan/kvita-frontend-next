import StoreProvider from './components/StoreProvider';
import AuthProvider from './components/AuthProvider';
import { ThemeProvider } from 'next-themes';

const Providers = ({ children }) => {
  return (
    <>
      <StoreProvider>
        <ThemeProvider attribute="class" storageKey="theme">
          <AuthProvider>{children}</AuthProvider>
        </ThemeProvider>
      </StoreProvider>
    </>
  );
};

export default Providers;
