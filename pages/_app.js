import '../styles/globals.css';

import { DefaultSeo } from 'next-seo';
import Head from 'next/head';
import PropTypes from 'prop-types';

import 'typeface-oswald';
import 'typeface-roboto';

import { Layout } from '../components/layout';
import { config } from '../data';
import tailwindConfig from '../tailwind.config';

export default function App({ Component, pageProps }) {
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
					color={tailwindConfig.theme.extend.colors.blue[900]}
				/>
				<meta
					name="msapplication-TileColor"
					content={tailwindConfig.theme.extend.colors.blue[900]}
				/>
				<meta
					name="theme-color"
					content={tailwindConfig.theme.extend.colors.blue[900]}
				/>
			</Head>
			<Component {...pageProps} />
		</Layout>
	);
}

App.propTypes = {
	Component: PropTypes.func.isRequired,
	pageProps: PropTypes.object.isRequired,
};
