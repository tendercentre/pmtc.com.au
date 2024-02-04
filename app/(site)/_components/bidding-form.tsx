import { TermsAndConditions } from './terms-and-conditions';

export function BiddingForm() {
	return (
		<form
			action="/success/"
			className="mx-auto mb-0 w-full rounded border bg-gray-100 shadow"
			data-netlify="true"
			method="POST"
			name="bid-form"
		>
			<input defaultValue="bid-form" name="form-name" type="hidden" />
			<div className="md:flex">
				<div className="w-full space-y-4 p-3 pb-0 md:w-1/2">
					<div>
						<label className="grid gap-2" htmlFor="first-name">
							<div>Name</div>
							<input
								autoComplete="given-name"
								className="w-full rounded border-gray-300"
								id="first-name"
								name="first-name"
								placeholder="Johnny"
								required
								type="text"
							/>
							<input
								autoComplete="family-name"
								className="rounded border-gray-300"
								id="last-name"
								name="last-name"
								placeholder="Appleseed"
								required
								type="text"
							/>
						</label>
					</div>
					<div>
						<label className="grid gap-2" htmlFor="address-line1">
							<div>Address</div>
							<input
								autoComplete="address-line1"
								className="rounded border-gray-300"
								id="address-line1"
								name="address-line1"
								placeholder="35 Merrigal Road"
								required
								type="text"
							/>
							<input
								autoComplete="address-line2"
								className="rounded border-gray-300"
								name="address-line2"
								placeholder="Port Macquarie NSW 2444"
								required
								type="text"
							/>
						</label>
					</div>
					<div className="form-row">
						<div className="form-column">
							<label className="grid gap-2" htmlFor="phone-number">
								<div>Phone number</div>
								<input
									autoComplete="tel"
									className="rounded border-gray-300"
									id="phone-number"
									name="phone-number"
									placeholder="0400 000 000"
									required
									type="tel"
								/>
							</label>
						</div>
					</div>
					<div className="form-row">
						<div className="form-column">
							<label className="grid gap-2" htmlFor="email-address">
								<div>Email address</div>
								<input
									autoComplete="email"
									className="rounded border-gray-300"
									id="email-address"
									name="email-address"
									placeholder="your.name@example.com"
									required
									type="email"
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
									autoComplete="off"
									className="rounded border-gray-300"
									id="lot-number"
									name="lot-number"
									placeholder="10123"
									required
									type="text"
								/>
							</label>
						</div>
						<div className="form-column">
							<label className="grid gap-2" htmlFor="lot-description">
								<div>Lot description</div>
								<input
									autoComplete="off"
									className="rounded border-gray-300"
									id="lot-description"
									name="lot-description"
									placeholder="Acoustic guitar"
									required
									type="text"
								/>
							</label>
						</div>
						<div className="form-column pb-1">
							<label className="grid gap-2" htmlFor="bid-price">
								<div>Bid price</div>
								<div className="bg-grey-lighter flex items-center rounded border">
									<div className="flex-auto rounded-l px-4">$</div>
									<input
										autoComplete="off"
										className="text-grey-darker block w-full flex-auto appearance-none border-y-0 border-l border-r border-gray-200 bg-white px-4 py-3 shadow-inner"
										id="bid-price"
										name="bid-price"
										placeholder="100"
										required
									/>
									<div className="flex-auto rounded-r px-4">.00</div>
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
									className="text-grey-darker h-48 w-full rounded border border-gray-300 p-3 shadow-inner"
									defaultValue=""
									id="message"
									name="message"
									placeholder="Optional — please leave blank unless you have a very good reason"
									spellCheck
								/>
							</label>
						</div>
					</div>
				</div>
			</div>
			<div className="p-3">
				<TermsAndConditions />
				<div className="mt-2 w-full">
					<label className="inline-flex items-center">
						<input defaultChecked type="checkbox" />
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
				<div className="mx-auto mt-2 max-w-sm text-xl">
					<button
						className="inline-block w-full rounded border-b-8 border-blue-900 bg-blue-800 px-4 py-2 text-center font-medium text-white"
						type="submit"
					>
						Submit bid
					</button>
				</div>
			</div>
		</form>
	);
}
