import Head from 'next/head';

const Meta = ({ title }) => {
  return (
    <>
      <Head>
        <link rel="icon" href="images/favicon.ico" />
        <title>{title}</title>
      </Head>
    </>
  );
};

export default Meta;
