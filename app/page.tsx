import NextImage from 'next/image';

import { Card, type CardProps } from './_components/card';
import { Map } from './_components/map';
import { config } from './config';

export default function IndexPage() {
	return (
		<>
			<div className="grid w-full max-w-5xl gap-6 px-4 py-6 mx-auto text-gray-800 bg-gray-200 rounded-md shadow-md sm:py-8 sm:px-6">
				<Hero />
				<Cards />
				<Info />
				<Map />
			</div>
		</>
	);
}

function Hero() {
	return (
		<article className="relative overflow-hidden text-white bg-blue-800 border-b-8 border-blue-900 rounded">
			<div className="absolute inset-0">
				<NextImage
					alt=""
					className="absolute inset-0 object-cover w-full h-full"
					height={539}
					loading="lazy"
					src="/hero.jpg"
					width={960}
				/>
			</div>
			<div className="relative bg-blue-900 bg-opacity-75">
				<div className="relative w-full max-w-3xl px-4 py-20 mx-auto text-3xl text-center sm:px-6 lg:px-8">
					<p>
						We are the largest second-hand and consignment store on the Mid
						North Coast.
					</p>
					<p>What will you find at the Tender Centre?</p>
				</div>
			</div>
		</article>
	);
}

const cards = [
	{
		heading: 'Buying?',
		copy: (
			<>
				<p>
					All the information you need about how buying from the Tender Centre
					works.
				</p>
			</>
		),
		href: '/buyers',
	},
	{
		heading: 'Selling?',
		copy: (
			<>
				<p>
					When can you take goods in to sell? What are the commission rates?
				</p>
				<p>Find out here.</p>
			</>
		),
		href: '/sellers',
	},
	{
		heading: 'FAQ',
		copy: (
			<>
				<p>You got questions?</p>
				<p>We got answers!</p>
			</>
		),
		href: '/faq',
	},
] satisfies Array<CardProps>;

function Cards() {
	return (
		<article className="grid gap-4 lg:grid-cols-3">
			{cards.map((card) => (
				<Card key={card.href} {...card} />
			))}
		</article>
	);
}

function Info() {
	return (
		<div className="grid gap-4 lg:grid-cols-2">
			<Hours />
			<Contact />
		</div>
	);
}

function Hours() {
	return (
		<article className="flex flex-col px-4 py-6 space-y-4 bg-white border rounded shadow">
			<h2 className="text-2xl font-medium text-blue-800 uppercase font-display">
				Hours
			</h2>
			<div className="flex-1 px-4 py-6 bg-gray-200 border rounded shadow">
				<h3 className="text-xl font-bold">General</h3>
				<dl className="mt-4 space-y-4">
					<div>
						<dt className="font-bold">Monday – Friday</dt>
						<dd>9:00am — 5:00pm</dd>
					</div>
					<div>
						<dt className="font-bold">Weekends</dt>
						<dd>9:00am — 2:00pm</dd>
					</div>
				</dl>
			</div>
			<div className="flex-1 px-4 py-6 bg-gray-200 border rounded shadow">
				<h3 className="text-xl font-bold">Receiving</h3>
				<div className="mt-4 font-bold">By appointment only</div>
			</div>
		</article>
	);
}

function Contact() {
	return (
		<article className="px-4 py-6 space-y-4 bg-white border rounded shadow">
			<h2 className="text-2xl font-medium text-blue-800 uppercase font-display">
				Contact
			</h2>
			<div className="px-4 py-6 bg-gray-200 border rounded shadow">
				<dl className="mt-4 space-y-4">
					<div>
						<dt className="font-bold">Phone</dt>
						<dd>
							<a className="font-bold underline" href={`tel:${config.phone}`}>
								{config.phone}
							</a>
						</dd>
					</div>
					<div>
						<dt className="font-bold">Email</dt>
						<dd>
							<a
								className="font-bold underline"
								href={`mailto:${config.email}`}
							>
								{config.email}
							</a>
						</dd>
					</div>
					<div>
						<dt className="font-bold">Address</dt>
						<dd>
							<a
								className="font-bold underline"
								href={config.address.googleMaps}
							>
								{config.address.line1}, {config.address.line2}
							</a>
						</dd>
					</div>
				</dl>
			</div>
			<h2 className="text-2xl font-medium text-blue-800 uppercase font-display">
				Social
			</h2>
			<div className="px-4 py-6 bg-gray-200 border rounded shadow">
				<div className="flex items-center space-x-4">
					{config.socialLinks.map((socialLink) => (
						<a href={socialLink.url} key={socialLink.url}>
							<span className="sr-only">{socialLink.label}</span>
							<socialLink.icon className="w-8 text-blue-800" />
						</a>
					))}
				</div>
			</div>
		</article>
	);
}
