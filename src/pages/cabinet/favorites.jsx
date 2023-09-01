import { UserCabinetContainer } from '@/components';
import Favorites from '@/modules/UserCabinet/Favorites/Favorites';

const FavoritesPage = () => {
  return (
    <>
      <UserCabinetContainer title="Улюблені">
        <Favorites />
      </UserCabinetContainer>
    </>
  );
};

export default FavoritesPage;
