import { NextSeo } from 'next-seo';
import Link from 'next/link';

import { config } from '../data';

export default function SellersPage() {
	return (
		<>
			<NextSeo title="Sellers" />
			<div className="w-full max-w-3xl mx-auto text-gray-800 bg-white rounded-md shadow-md">
				<h1 className="py-2 text-3xl font-medium text-center text-blue-800 uppercase bg-gray-100 border-b font-display rounded-t-md">
					Sellers
				</h1>
				<div className="px-4 py-6 text-lg prose sm:py-8 sm:px-6">
					<p>We receive new stock weekdays from 9:00 am — 4:30 pm.</p>
					<p>
						It’s free to put in, and we’ll keep it on display for you for up to
						a month, at no cost!
					</p>
					<p>
						All goods coming in do need to be approved by staff, so for larger
						items it is best to call ahead first or even better,{' '}
						<a className="inline-block" href={`mailto:${config.email}`}>
							email us a picture
						</a>
					</p>
				</div>
				<div className="flex flex-col px-4 sm:px-6">
					<div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
						<div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
							<div className="overflow-hidden border-b border-gray-200 shadow sm:rounded-lg">
								<table className="min-w-full divide-y divide-gray-200">
									<thead>
										<tr>
											<th className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase bg-gray-50">
												Sale price
											</th>
											<th className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase bg-gray-50">
												Commission rate
											</th>
										</tr>
									</thead>
									<tbody className="bg-white divide-y divide-gray-200">
										<tr>
											<td className="px-6 py-4 text-sm font-medium leading-5 whitespace-no-wrap">
												$0 – $499
											</td>
											<td className="px-6 py-4 text-sm leading-5 text-gray-500 whitespace-no-wrap">
												22%
											</td>
										</tr>
										<tr>
											<td className="px-6 py-4 text-sm font-medium leading-5 whitespace-no-wrap">
												$500 – $899
											</td>
											<td className="px-6 py-4 text-sm leading-5 text-gray-500 whitespace-no-wrap">
												20%
											</td>
										</tr>
										<tr>
											<td className="px-6 py-4 text-sm font-medium leading-5 whitespace-no-wrap">
												$900 – $2999
											</td>
											<td className="px-6 py-4 text-sm leading-5 text-gray-500 whitespace-no-wrap">
												18%
											</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
					</div>
				</div>
				<div className="px-4 py-6 text-lg prose sm:py-8 sm:px-6">
					<p>$3000 and over by negotiation.</p>
					<p>Minimum commission per item is $3.30.</p>
					<hr />
					<p>
						Sounds like too much work? We also offer clearance solution for
						downsizing and deceased estates
					</p>
					<p>
						<Link href="/clearance/">Clearance solutions information</Link>
					</p>
				</div>
			</div>
		</>
	);
}
