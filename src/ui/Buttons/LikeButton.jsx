import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import Icon from '@/ui/Icon/Icon';

import { useAuth } from '@/hooks/useAuth';
import { useMutateProducts } from '@/hooks/useProducts';

import styles from './Buttons.module.scss';

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
  }, [isLoggedIn, likes, user?._id]);

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

LikeButton.propTypes = {
  id: PropTypes.string.isRequired,
  likes: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default LikeButton;
