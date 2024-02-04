import { type Metadata } from 'next';

export const metadata: Metadata = {
	title: 'FAQ',
};

export default function FAQPage() {
	return (
		<>
			<div className="w-full max-w-3xl mx-auto text-gray-800 bg-white rounded-md shadow-md">
				<h1 className="py-2 text-3xl font-medium text-center text-blue-800 uppercase bg-gray-100 border-b font-display rounded-t-md">
					FAQ
				</h1>
				<dl className="px-4 py-6 prose sm:py-8 sm:px-6">
					<div>
						<dt className="font-bold">Can I bid below reserve price?</dt>
						<dd>
							Absolutely! Unsold goods can be bought any time for the asking
							price, so there’s no point bidding on (or above).
						</dd>
					</div>
					<div>
						<dt className="font-bold">
							Can I find out what the highest current bid is?
						</dt>
						<dd>
							Nope! That's what the ‘silent’ part in ‘silent auction’ means. You
							can alway buy the item for the asking price, otherwise if you’re
							leaving an offer, put your best offer in first and cross your
							fingers!
						</dd>
					</div>
					<div>
						<dt className="font-bold">
							What happens if my bid is the same as someone else's?
						</dt>
						<dd>
							Bid sheets go out in ascending order, in the case of a tie the bid
							goes to the lowest bid form number.The earlier you put your bid
							in, the better your chances are!
						</dd>
					</div>
				</dl>
			</div>
		</>
	);
}
