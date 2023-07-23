import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { verify } from '@/redux/auth/auth-operations';

const Verification = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  const { verificationToken } = router.query;

  if (verificationToken) {
    dispatch(verify(verificationToken));
    router.replace('/');
  }

  return null;
};

export default Verification;
