import { AdminCabinetContainer } from "@/components";
import { Contacts, HeroType, Tags } from "@/modules/AdminCabinet/Administration/components";

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
