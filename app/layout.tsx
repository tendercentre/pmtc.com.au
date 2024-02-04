import './index.css';

import { clsx } from 'clsx';
import { type Metadata } from 'next';
import { Oswald, Roboto } from 'next/font/google';
import NextLink from 'next/link';

import { config } from './config';

const roboto = Roboto({
	weight: ['400', '500', '700'],
	subsets: ['latin'],
	variable: '--roboto',
});

const oswald = Oswald({
	weight: ['500'],
	subsets: ['latin'],
	variable: '--oswald',
});

export const metadata: Metadata = {
	title: {
		default: config.title,
		template: `%s | ${config.title}`,
	},
	description: config.description,
	metadataBase: new URL(config.baseUrl),
	openGraph: {
		title: config.title,
		description: config.description,
		url: config.baseUrl,
		siteName: config.title,
		images: [
			{
				url: `${config.baseUrl}/hero.jpg`,
				width: 960,
				height: 539,
			},
		],
		locale: 'en',
		type: 'website',
	},
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html
			className={clsx(oswald.variable, roboto.variable, 'antialiased')}
			lang="en-AU"
		>
			<body className="flex flex-col min-h-svh font-sans text-white bg-blue-900">
				<Nav />
				<Header />
				<main className="flex-1">{children}</main>
				<Footer />
			</body>
		</html>
	);
}

function Nav() {
	return (
		<nav>
			<ul className="flex items-center justify-around w-full max-w-5xl mx-auto">
				{config.siteNavigation.map((navItem) => (
					<li className="flex-1" key={navItem.slug}>
						<NextLink
							className="inline-block w-full py-4 font-medium text-center transition duration-150 ease-in-out border-t-4 border-transparent hover:border-yellow-200 hover:bg-blue-800"
							href={navItem.slug}
						>
							{navItem.label}
						</NextLink>
					</li>
				))}
			</ul>
		</nav>
	);
}

function Header() {
	return (
		<header>
			<div className="py-20 text-center">
				<h1 className="text-5xl font-medium text-yellow-200 uppercase font-display">
					<NextLink href="/">{config.title}</NextLink>
				</h1>
				<p className="text-2xl italic font-medium">{config.tagline}</p>
			</div>
		</header>
	);
}

function Footer() {
	return (
		<footer className="w-full mt-20 bg-white">
			<div className="max-w-5xl px-4 py-12 mx-auto sm:px-6 md:flex md:items-center md:justify-between lg:px-8">
				<div className="flex justify-center space-x-6 md:order-2">
					{config.socialLinks.map((socialLink) => (
						<a
							className="text-gray-500 transition duration-150 ease-in-out hover:text-gray-600"
							href={socialLink.url}
							key={socialLink.url}
						>
							<span className="sr-only">{socialLink.label}</span>
							<socialLink.icon className="w-6 h-6" />
						</a>
					))}
				</div>
				<div className="mt-8 md:mt-0 md:order-1">
					<p className="text-base leading-6 text-center text-gray-600">
						© {new Date().getFullYear()} {config.title}. All rights reserved.
					</p>
				</div>
			</div>
		</footer>
	);
}
