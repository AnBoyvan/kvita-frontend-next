import { Layout } from '@/components';
import Providers from '@/modules/Providers/Providers';

import '@/styles/globals.scss';

const App = ({ Component, pageProps }) => {
  return (
    <>
      <Providers props={pageProps}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Providers>
    </>
  );
};

export default App;
