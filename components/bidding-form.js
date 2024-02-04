import { TermsAndConditions } from './terms-and-conditions';

export function BiddingForm() {
	return (
		<form
			action="/success/"
			method="POST"
			data-netlify="true"
			name="bid-form"
			className="w-full mx-auto mb-0 bg-gray-100 border rounded shadow"
		>
			<input type="hidden" name="form-name" defaultValue="bid-form" />
			<div className="md:flex">
				<div className="w-full p-3 pb-0 space-y-4 md:w-1/2">
					<div>
						<label className="grid gap-2" htmlFor="first-name">
							<div>Name</div>
							<input
								id="first-name"
								name="first-name"
								autoComplete="given-name"
								placeholder="Johnny"
								required
								type="text"
								className="w-full rounded border-gray-300"
							/>
							<input
								type="text"
								id="last-name"
								name="last-name"
								autoComplete="family-name"
								placeholder="Appleseed"
								required
								className="rounded border-gray-300"
							/>
						</label>
					</div>
					<div>
						<label className="grid gap-2" htmlFor="address-line1">
							<div>Address</div>
							<input
								id="address-line1"
								name="address-line1"
								autoComplete="address-line1"
								placeholder="35 Merrigal Road"
								type="text"
								required
								className="rounded border-gray-300"
							/>
							<input
								type="text"
								autoComplete="address-line2"
								name="address-line2"
								placeholder="Port Macquarie NSW 2444"
								required
								className="rounded border-gray-300"
							/>
						</label>
					</div>
					<div className="form-row">
						<div className="form-column">
							<label className="grid gap-2" htmlFor="phone-number">
								<div>Phone number</div>
								<input
									type="tel"
									id="phone-number"
									name="phone-number"
									autoComplete="tel"
									placeholder="0400 000 000"
									required
									className="rounded border-gray-300"
								/>
							</label>
						</div>
					</div>
					<div className="form-row">
						<div className="form-column">
							<label className="grid gap-2" htmlFor="email-address">
								<div>Email address</div>
								<input
									type="email"
									id="email-address"
									name="email-address"
									autoComplete="email"
									placeholder="your.name@example.com"
									required
									className="rounded border-gray-300"
								/>
							</label>
						</div>
					</div>
				</div>
				<div className="w-full p-3 pb-0 md:w-1/2">
					<div className="space-y-4">
						<div className="form-column">
							<label className="grid gap-2" htmlFor="lot-number">
								<div>Lot number</div>
								<input
									type="text"
									id="lot-number"
									name="lot-number"
									autoComplete="off"
									placeholder={10123}
									required
									className="rounded border-gray-300"
								/>
							</label>
						</div>
						<div className="form-column">
							<label className="grid gap-2" htmlFor="lot-description">
								<div>Lot description</div>
								<input
									type="text"
									id="lot-description"
									name="lot-description"
									autoComplete="off"
									placeholder="Acoustic guitar"
									required
									className="rounded border-gray-300"
								/>
							</label>
						</div>
						<div className="pb-1 form-column">
							<label className="grid gap-2" htmlFor="bid-price">
								<div>Bid price</div>
								<div className="flex items-center border rounded bg-grey-lighter">
									<div className="flex-auto px-4 rounded-l">$</div>
									<input
										className="flex-auto border-y-0 border-gray-200 block w-full px-4 py-3 bg-white border-l border-r shadow-inner appearance-none text-grey-darker"
										id="bid-price"
										autoComplete="off"
										name="bid-price"
										placeholder={100}
										required
									/>
									<div className="flex-auto px-4 rounded-r">.00</div>
								</div>
							</label>
							<small className="text-grey-darker">
								(A buyer's premium of 11% + $3.30 is added to this offer for
								successful bids.)
							</small>
						</div>
						<div className="form-column">
							<label className="grid gap-2" htmlFor="message">
								<div>Message</div>
								<textarea
									className="w-full border-gray-300 h-48 p-3 border rounded shadow-inner text-grey-darker"
									id="message"
									name="message"
									spellCheck
									placeholder="Optional — please leave blank unless you have a very good reason"
									defaultValue=""
								/>
							</label>
						</div>
					</div>
				</div>
			</div>
			<div className="p-3">
				<TermsAndConditions />
				<div className="w-full mt-2">
					{/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
					<label className="inline-flex items-center">
						<input type="checkbox" defaultChecked />
						<span className="pl-2">
							I agree to the{' '}
							<strong className="text-grey-darker">
								Terms &amp; Conditions
							</strong>
						</span>
					</label>
				</div>
				<div className="hidden">
					<label htmlFor="bot-field">
						Don’t fill this out if you're human:
						<input name="bot-field" />
					</label>
				</div>
				<div className="max-w-sm mx-auto mt-2 text-xl">
					<button
						type="submit"
						className="inline-block w-full px-4 py-2 font-medium text-center text-white bg-blue-800 border-b-8 border-blue-900 rounded"
					>
						Submit bid
					</button>
				</div>
			</div>
		</form>
	);
}
