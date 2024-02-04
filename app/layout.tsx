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
			<body className="flex min-h-svh flex-col bg-blue-900 font-sans text-white">
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
			<ul className="mx-auto flex w-full max-w-5xl items-center justify-around">
				{config.siteNavigation.map((navItem) => (
					<li className="flex-1" key={navItem.slug}>
						<NextLink
							className="inline-block w-full border-t-4 border-transparent py-4 text-center font-medium transition duration-150 ease-in-out hover:border-yellow-200 hover:bg-blue-800"
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
				<h1 className="font-display text-5xl font-medium uppercase text-yellow-200">
					<NextLink href="/">{config.title}</NextLink>
				</h1>
				<p className="text-2xl font-medium italic">{config.tagline}</p>
			</div>
		</header>
	);
}

function Footer() {
	return (
		<footer className="mt-20 w-full bg-white">
			<div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 md:flex md:items-center md:justify-between lg:px-8">
				<div className="flex justify-center space-x-6 md:order-2">
					{config.socialLinks.map((socialLink) => (
						<a
							className="text-gray-500 transition duration-150 ease-in-out hover:text-gray-600"
							href={socialLink.url}
							key={socialLink.url}
						>
							<span className="sr-only">{socialLink.label}</span>
							<socialLink.icon className="h-6 w-6" />
						</a>
					))}
				</div>
				<div className="mt-8 md:order-1 md:mt-0">
					<p className="text-center text-base leading-6 text-gray-600">
						© {new Date().getFullYear()} {config.title}. All rights reserved.
					</p>
				</div>
			</div>
		</footer>
	);
}
