import { useContext, useEffect } from 'react';
import { useRouter } from 'next/router';
import { ModalContext } from '@/hooks/useModal';
import ChangePasswordModal from '@/modules/Auth/components/ChangePasswordModal/ChangePasswordModal';

const PasswordChangePage = () => {
  const router = useRouter();
  const { openModal } = useContext(ModalContext);

  useEffect(() => {
    openModal(<ChangePasswordModal />);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <></>;
};

export default PasswordChangePage;
