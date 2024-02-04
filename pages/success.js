import { NextSeo } from 'next-seo';
import Link from 'next/link';

export default function SuccessPage() {
	return (
		<>
			<NextSeo title="Success" />
			<div className="w-full max-w-3xl mx-auto text-gray-800 bg-white rounded-md shadow-md">
				<h1 className="py-2 text-3xl font-medium text-center text-blue-800 uppercase bg-gray-100 border-b font-display rounded-t-md">
					Success
				</h1>
				<div className="px-4 py-6 prose sm:py-8 sm:px-6">
					<p className="lead">Your bid was submitted.</p>
					<p>
						Good luck! We have received your bid and will be in touch if it is
						accepted.
					</p>
					<p>
						If you would like to submit another bid, click the button below.
					</p>
					<Link href="/bid/">Keep bidding</Link>
				</div>
			</div>
		</>
	);
}
