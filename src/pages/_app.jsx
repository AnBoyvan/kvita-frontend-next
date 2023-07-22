import '@/styles/globals.scss';
import Providers from '@/modules/Providers/Providers';
import Layout from '@/components/Layout/Layout';

const App = ({ Component, pageProps }) => {
  return (
    <>
      <Providers>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Providers>
    </>
  );
};

export default App;
