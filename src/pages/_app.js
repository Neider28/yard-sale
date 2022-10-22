import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false
import Head from 'next/head';
import { Layout } from '@containers/Layout.jsx';
import { AppContext } from '@context/AppContext.js';
import { ProviderAuth } from '@hooks/useAuth.js';
import { useInitialState } from '@hooks/useInitialState.js';
import '@styles/globals.css';

function MyApp({ Component, pageProps }) {
  const initialState = useInitialState();

  return (
    <>
      <Head>
        <title>Yard Sale</title>
      </Head>
      <ProviderAuth>
        <AppContext.Provider value={initialState}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </AppContext.Provider>
      </ProviderAuth>
    </>
  );
};

export default MyApp;