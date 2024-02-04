import { type Metadata } from 'next';

import { config } from '../config';

export const metadata: Metadata = {
	title: 'Clearance Solutions',
};

export default function ClearanceSolutionsPage() {
	return (
		<>
			<div className="mx-auto w-full max-w-3xl rounded-md bg-white text-gray-800 shadow-md">
				<h1 className="rounded-t-md border-b bg-gray-100 py-2 text-center font-display text-3xl font-medium uppercase text-blue-800">
					Clearance Solutions
				</h1>
				<div className="prose px-4 py-6 text-lg sm:px-6 sm:py-8">
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
						<a className="inline-block" href={`tel:${config.phone}`}>
							{config.phone}
						</a>{' '}
						during business hours.
					</p>
				</div>
			</div>
		</>
	);
}
