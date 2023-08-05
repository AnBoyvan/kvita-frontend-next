import Header from '@/modules/Header/Header';
import { useContext } from 'react';
import { ModalContext } from '@/hooks/useModal';
import Modal from '../Modal/Modal';
import Footer from '@/modules/Footer/Footer';

const Layout = ({ children }) => {
  const { isOpen } = useContext(ModalContext);
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
      }}
    >
      <Header />
      {children}
      {isOpen && <Modal />}
      <Footer />
    </div>
  );
};

export default Layout;
