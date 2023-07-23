import { useContext, useEffect } from 'react';
import { useRouter } from 'next/router';
import { ModalContext } from '@/hooks/useModal';
import ChangePasswordModal from '@/modules/Auth/components/ChangePasswordModal/ChangePasswordModal';

const PasswordChangePage = () => {
  const router = useRouter();
  const { openModal } = useContext(ModalContext);

  const { passwordToken } = router.query;

  useEffect(() => {
    openModal(<ChangePasswordModal token={passwordToken} />);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <></>;
};

export default PasswordChangePage;
