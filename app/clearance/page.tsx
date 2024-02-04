import { type Metadata } from 'next';

import { config } from '../config';

export const metadata: Metadata = {
	title: 'Clearance Solutions',
};

export default function ClearanceSolutionsPage() {
	return (
		<>
			<div className="w-full max-w-3xl mx-auto text-gray-800 bg-white rounded-md shadow-md">
				<h1 className="py-2 text-3xl font-medium text-center text-blue-800 uppercase bg-gray-100 border-b font-display rounded-t-md">
					Clearance Solutions
				</h1>
				<div className="px-4 py-6 text-lg prose sm:py-8 sm:px-6">
					<p>
						At the Port Macquarie Tender Centre, we understand the logistical
						and emotional challenges involved in downsizing a home or clearing a
						deceased estate.
					</p>
					<p>
						We aim to offer a customised service that can be adapted entirely to
						your needs, circumstances and priorities. We will value and sell
						your items with minimal effort on your part, giving you one less
						thing to worry about during an already stressful time.
					</p>
					<p>
						If you would like to employ our services, please contact us on{' '}
						<a href={`tel:${config.phone}`} className="inline-block">
							{config.phone}
						</a>{' '}
						during business hours.
					</p>
				</div>
			</div>
		</>
	);
}
