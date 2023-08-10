import AdminCabinetContainer from '@/components/AdminCabinetContainer/AdminCabinetContainer';
import Contacts from '@/modules/AdminCabinet/Administration/components/Contacts/Contacts';
import HeroType from '@/modules/AdminCabinet/Administration/components/HeroType/HeroType';
import Tags from '@/modules/AdminCabinet/Administration/components/Tags/Tags';

const AdminPage = () => {
  return (
    <>
      <AdminCabinetContainer title="Адміністрування сайту">
        <HeroType />
        <Tags />
        <Contacts />
      </AdminCabinetContainer>
    </>
  );
};

export default AdminPage;
