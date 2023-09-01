import { UserCabinetContainer } from '@/components';
import UserInfo from '@/modules/UserCabinet/UserInfo/UserInfo';

const InfoPage = () => {
  return (
    <>
      <UserCabinetContainer title="Особиста інформація">
        <UserInfo />
      </UserCabinetContainer>
    </>
  );
};

export default InfoPage;
