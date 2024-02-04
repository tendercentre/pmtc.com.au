import { DocumentRenderer } from '@keystatic/core/renderer';
import { type Metadata } from 'next';
import { notFound } from 'next/navigation';

import { Field, Input, Textarea } from '../_components/field';
import { Fieldset } from '../_components/fieldset';
import { documentRenderers } from '../_components/renderers';
import { reader } from '../reader';

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

function BiddingForm() {
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
				<div className="flex w-full flex-1 flex-col gap-4 p-3">
					<Fieldset legend="Name">
						<Field label="First name" labelVisibility="hidden">
							<Input
								autoComplete="given-name"
								name="first-name"
								placeholder="Johnny"
								required
							/>
						</Field>
						<Field label="Last name" labelVisibility="hidden">
							<Input
								autoComplete="family-name"
								name="last-name"
								placeholder="Appleseed"
								required
							/>
						</Field>
					</Fieldset>

					<Fieldset legend="Address">
						<Field label="Line 1" labelVisibility="hidden">
							<Input
								autoComplete="address-line1"
								name="address-line1"
								placeholder="35 Merrigal Road"
								required
							/>
						</Field>
						<Field label="Line 2" labelVisibility="hidden">
							<Input
								autoComplete="address-line2"
								name="address-line2"
								placeholder="Port Macquarie NSW 2444"
								required
							/>
						</Field>
					</Fieldset>

					<Field label="Phone number">
						<Input
							autoComplete="tel"
							name="phone-number"
							placeholder="0400 000 000"
							required
							type="tel"
						/>
					</Field>

					<Field label="Email address">
						<Input
							autoComplete="email"
							name="email-address"
							placeholder="your.name@example.com"
							required
							type="email"
						/>
					</Field>
				</div>
				<div className="flex w-full flex-1 flex-col gap-4 p-3">
					<Field label="Lot number">
						<Input
							autoComplete="off"
							className="rounded border-gray-300"
							name="lot-number"
							placeholder="10123"
							required
						/>
					</Field>

					<Field label="Lot description">
						<Input
							autoComplete="off"
							className="rounded border-gray-300"
							name="lot-description"
							placeholder="Acoustic guitar"
							required
							type="text"
						/>
					</Field>

					<Field label="Bid price">
						<small className="text-grey-darker" id="buyer-premium">
							(A buyer's premium of 11% + $3.30 is added to this offer for
							successful bids.)
						</small>
						<span className="flex rounded border">
							<span className="flex items-center rounded-l border-r px-4">
								$
							</span>
							<Input
								aria-describedby="buyer-premium"
								autoComplete="off"
								className="flex-1 !rounded-none border-none"
								name="bid-price"
								placeholder="100"
								required
							/>
							<span className="flex items-center rounded-r border-l px-4">
								.00
							</span>
						</span>
					</Field>
					<Field label="Message">
						<Textarea
							className="h-24"
							name="message"
							placeholder="Optional — please leave blank unless you have a good reason"
							rows={3}
							spellCheck
						/>
					</Field>
				</div>
			</div>
			<div className="p-3">
				<Terms />
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

async function Terms() {
	const termsAndConditions = await reader.singletons.termsAndConditions.read();
	if (!termsAndConditions) notFound();
	return (
		<>
			<h2>Terms &amp; Conditions</h2>
			<div className="prose h-64 max-w-none overflow-y-scroll rounded border bg-white px-4 pt-3 text-sm shadow-inner">
				<DocumentRenderer
					document={await termsAndConditions.content()}
					renderers={documentRenderers}
				/>
			</div>
		</>
	);
}
