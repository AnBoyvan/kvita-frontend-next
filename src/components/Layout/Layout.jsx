import PropTypes from 'prop-types';
import { useContext } from 'react';

import Header from '@/modules/Header/Header';
import Footer from '@/modules/Footer/Footer';
import Modal from '../Modal/Modal';

import { ModalContext } from '@/hooks/useModal';

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

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
