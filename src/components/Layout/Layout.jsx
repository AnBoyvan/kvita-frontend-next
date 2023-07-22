import Header from '@/modules/Header/Header';
import { useContext } from 'react';
import { ModalContext } from '@/hooks/useModal';
import Modal from '../Modal/Modal';

const Layout = ({ children }) => {
  const { isOpen } = useContext(ModalContext);
  return (
    <>
      <Header />
      {children}
      {isOpen && <Modal />}
    </>
  );
};

export default Layout;
