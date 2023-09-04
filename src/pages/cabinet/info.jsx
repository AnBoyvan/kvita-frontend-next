import { Meta, UserCabinetContainer } from '@/components';
import UserInfo from '@/modules/UserCabinet/UserInfo/UserInfo';

const InfoPage = () => {
  return (
    <>
      <Meta title="Особиста інформація" page="cabinet/info" />
      <UserCabinetContainer title="Особиста інформація">
        <UserInfo />
      </UserCabinetContainer>
    </>
  );
};

export default InfoPage;
