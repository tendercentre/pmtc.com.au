import PropTypes from 'prop-types';

import { Footer } from './footer';
import { Header } from './header';
import { Navigation } from './navigation';

export function Layout({ children }) {
	return (
		<div className="flex flex-col min-h-screen font-sans antialiased text-white bg-blue-900 fill-available">
			<Navigation />
			<Header />

			<main className="flex-1 px-4">{children}</main>
			<Footer />
		</div>
	);
}

Layout.propTypes = {
	children: PropTypes.node.isRequired,
};
