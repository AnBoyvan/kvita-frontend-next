import PropTypes from 'prop-types';
import { useContext } from 'react';

import Header from '@/modules/Header/Header';
import Footer from '@/modules/Footer/Footer';
import Modal from '../Modal/Modal';
import CustomLoader from '../CustomLoader/CustomLoader';

import { ModalContext } from '@/hooks/useModal';
import { useLoader } from '@/hooks/useLoader';

const Layout = ({ children }) => {
  const { isOpen } = useContext(ModalContext);
  const { isLoading } = useLoader();

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
      {isLoading && <CustomLoader />}
      <Footer />
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
