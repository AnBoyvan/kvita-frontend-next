import { AdminCabinetContainer, Meta } from '@/components';
import {
  Contacts,
  HeroType,
  Tags,
} from '@/modules/AdminCabinet/Administration/components';

const AdminPage = () => {
  return (
    <>
      <Meta title="Адміністрування" page="admin/administrating" />
      <AdminCabinetContainer title="Адміністрування сайту">
        <HeroType />
        <Tags />
        <Contacts />
      </AdminCabinetContainer>
    </>
  );
};

export default AdminPage;
