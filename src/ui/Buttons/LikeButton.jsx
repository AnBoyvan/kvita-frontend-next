import styles from './Buttons.module.scss';
import { useEffect, useState } from 'react';
import { Icon } from '../Icon/Icon';
import { useAuth } from '@/hooks/useAuth';
import { useMutateProducts } from '@/hooks/useProducts';

const LikeButton = ({ id, likes }) => {
  const { user, isLoggedIn } = useAuth();

  const { updFavorites } = useMutateProducts();

  const [liked, setLiked] = useState(
    Boolean(isLoggedIn && likes.includes(user._id))
  );

  const like = () => {
    updFavorites(id);
    setLiked(!liked);
  };

  useEffect(() => {
    if (isLoggedIn) {
      setLiked(Boolean(likes.includes(user._id)));
    }
  }, [isLoggedIn, likes, user._id]);

  return (
    <>
      {isLoggedIn && (
        <button
          type="button"
          className={styles.likeBtn}
          onClick={like}
        >
          {!liked ? <Icon id="unliked" /> : <Icon id="liked" />}
        </button>
      )}
    </>
  );
};

export default LikeButton;
