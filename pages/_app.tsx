import 'typeface-oswald';
import 'typeface-roboto';
import '../styles/index.css';

import type { AppProps } from 'next/app';
import Head from 'next/head';
import { DefaultSeo } from 'next-seo';

import colors from '../colors.json';
import { Layout } from '../components/layout';
import { config } from '../data';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <DefaultSeo
        titleTemplate={`%s | ${config.title}`}
        description={config.description}
        openGraph={{
          type: 'website',
          locale: 'en_AU',
          url: 'https://www.pmtc.com.au/',
          site_name: 'PMTC',
        }}
      />
      <Head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/safari-pinned-tab.svg"
          color={colors.blue[900]}
        />
        <meta name="msapplication-TileColor" content={colors.blue[900]} />
        <meta name="theme-color" content={colors.blue[900]} />
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}
