import PropTypes from 'prop-types';
import Head from 'next/head';

const Meta = ({ title, descr, page, robots, refresh, image }) => {
  const metaTitle = `${
    title ? title : 'Кондитерська студія "КВіТа"'
  }`;

  const baseURL = 'http://localhost:3000';

  return (
    <>
      <Head>
        <link rel="icon" href="/images/favicon.ico" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />
        <meta charset="utf-8" />
        <meta name="description" content={descr ? descr : ''} />
        <meta name="keywords" content="" />
        <meta name="robots" content="noindex, nofollow" />
        {refresh && (
          <meta http-equiv="refresh" content={`5; url=${baseURL}`} />
        )}

        <title>{metaTitle}</title>

        <meta property="og:title" content={metaTitle} />
        <meta
          property="og:description"
          content={descr ? descr : ''}
        />
        <meta
          property="og:url"
          content={`${baseURL}/${page ? page : ''}`}
        />
        <meta property="og:image" content={image ? image : ''} />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="uk_UA" />
      </Head>
    </>
  );
};

Meta.propTypes = {
  title: PropTypes.string,
};

export default Meta;
