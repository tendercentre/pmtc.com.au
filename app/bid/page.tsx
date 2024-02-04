import { type Metadata } from 'next';

import { BiddingForm } from '../_components/bidding-form';

export const metadata: Metadata = {
	title: 'Bid',
};

export default function BidPage() {
	return (
		<>
			<div className="mx-auto w-full max-w-3xl rounded-md bg-white text-gray-800 shadow-md">
				<h1 className="rounded-t-md border-b bg-gray-100 py-2 text-center font-display text-3xl font-medium uppercase text-blue-800">
					Online Bid
				</h1>
				<div className="px-4 py-6 sm:px-6 sm:py-8">
					<div className="prose mb-6">
						<p className="lead">
							To submit an online bid, please fill in the form below:
						</p>
						<p className="lead">
							You will need to know the lot number of the item you are bidding
							on,{' '}
							<a href="/catalogue.pdf" target="_blank">
								you can use our catalogue for reference.
							</a>
						</p>
						<p>
							If you would like to bid on multiple items, please fill in and
							submit this form for each item or you could write it in the{' '}
							<a href="#message">message</a> field at the bottom
						</p>
					</div>
					<BiddingForm />
				</div>
			</div>
		</>
	);
}
