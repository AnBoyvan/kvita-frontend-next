import { Meta, UserCabinetContainer } from '@/components';
import Favorites from '@/modules/UserCabinet/Favorites/Favorites';

const FavoritesPage = () => {
  return (
    <>
      <Meta title="Улюблені" page="cabinet/favorites" />
      <UserCabinetContainer title="Улюблені">
        <Favorites />
      </UserCabinetContainer>
    </>
  );
};

export default FavoritesPage;
