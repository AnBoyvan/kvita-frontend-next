import { useRouter } from 'next/router';

const AboutPage = () => {
  const router = useRouter();
  console.log('router', router);
  // console.log('query', query);

  return (
    <>
      <h1>ABOUT</h1>
    </>
  );
};

export default AboutPage;
