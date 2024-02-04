import { type Metadata } from 'next';
import NextLink from 'next/link';

import { config } from '../../config';

export const metadata: Metadata = {
	title: 'Buyers',
};

export default function BuyersPage() {
	return (
		<>
			<div className="mx-auto w-full max-w-3xl rounded-md bg-white text-gray-800 shadow-md">
				<h1 className="rounded-t-md border-b bg-gray-100 py-2 text-center font-display text-3xl font-medium uppercase text-blue-800">
					Buyers
				</h1>
				<div className="prose px-4 py-6 sm:px-6 sm:py-8">
					<p className="lead">
						Port Macquarie Tender Centre receive hundreds of new items every
						single week! We don’t know what will come in either so it’s one of
						the exciting components of the tendering process for everyone that
						bids.
					</p>
					<p>Here are some of the things we frequently have for sale:</p>
					<ul>
						<li>Antiques &amp; oldwares</li>
						<li>Collectables &amp; hobbies</li>
						<li>Tools &amp; Hardware</li>
						<li>Furniture &amp; homeware</li>
						<li>Sports</li>
						<li>Camping &amp; outdoors</li>
						<li>Plants &amp; gardening</li>
						<li>Automotive &amp; marine</li>
						<li>TV, audio &amp; electronics</li>
						<li>Jewellery &amp; clothing</li>
						<li>Musical instruments</li>
					</ul>
					<p>
						All successful bids do incur a buyers premium (
						{config.buyersPremium} of the sale price) and a{' '}
						{config.processingFee} per lot processing fee. For more information,
						please ask our staff or call us on{' '}
						<a href={`tel:${config.phone}`}>{config.phone}</a>.
					</p>
				</div>
				<hr />
				<div className="prose px-4 py-6 sm:px-6 sm:py-8">
					<p>Want to bid on something?</p>
					<p>
						<NextLink href="/bid/">Click here</NextLink>
					</p>
				</div>
			</div>
		</>
	);
}
