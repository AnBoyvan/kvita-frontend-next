import PropTypes from 'prop-types';
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

Meta.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Meta;
