import { useState, createContext, useEffect } from 'react';

export const ModalContext = createContext();

export const useModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  const openModal = content => {
    setIsOpen(true);
    setModalContent(content);
    document.querySelector('body').style.overflow = 'hidden';
    window.addEventListener('popstate', handlePopstate);
  };

  const closeModal = () => {
    setIsOpen(false);
    setModalContent(null);
    document.querySelector('body').style.overflow = 'auto';
    window.removeEventListener('popstate', handlePopstate);
  };

  const handlePopstate = event => {
    closeModal();
    window.history.replaceState({ modal: true }, '');
  };

  useEffect(() => {
    const handleEscButton = e => {
      if (e.code === 'Escape') {
        closeModal();
      }
    };

    const body = document.querySelector('body');
    if (isOpen) {
      window.addEventListener('keydown', handleEscButton);
      body.style.overflow = 'hidden';
    } else {
      window.removeEventListener('keydown', handleEscButton);
      body.style.overflow = 'auto';
    }

    return () => {
      window.removeEventListener('keydown', handleEscButton);
      body.style.overflow = 'auto';
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen]);

  return { isOpen, modalContent, openModal, closeModal };
};

export const ModalProvider = ({ children }) => {
  const modal = useModal();

  return (
    <ModalContext.Provider value={modal}>
      {children}
    </ModalContext.Provider>
  );
};
