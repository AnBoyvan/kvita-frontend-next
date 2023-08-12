import { useContext, useEffect } from 'react';

import { ChangePasswordModal } from '@/modules/Auth/components';

import { ModalContext } from '@/hooks/useModal';

const PasswordChangePage = () => {
  const { openModal } = useContext(ModalContext);

  useEffect(() => {
    openModal(<ChangePasswordModal />);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <></>;
};

export default PasswordChangePage;
