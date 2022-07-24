import type { InputHTMLAttributes } from 'react';
import { forwardRef } from 'react';
import { useForm } from 'react-hook-form';

import { TermsAndConditions } from './terms-and-conditions';

const inputClasses = `block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-400 focus:ring-opacity-50 sm:text-sm`;

const Input = forwardRef<
  HTMLInputElement,
  InputHTMLAttributes<HTMLInputElement>
>(function Input(props, forwardedRef) {
  return (
    <input
      {...props}
      ref={forwardedRef}
      className={`${inputClasses} ${props.className}`.trim()}
    />
  );
});

/**
 * An alternative to `Object.keys()` that avoids type widening.
 *
 * @example
 * Object.keys({ foo: 1, bar: 2 }) // string[]
 * typedKeys({ foo: 1, bar: 2 }) // ("foo" | "bar")[]
 */
function typedKeys<T extends object>(value: T) {
  return Object.keys(value) as Array<keyof T>;
}

function encode(data: Record<string, string>) {
  return typedKeys(data)
    .map((key) => {
      return encodeURIComponent(key) + '=' + encodeURIComponent(data[key]);
    })
    .join('&');
}

const defaultValues = {
  'first-name': '',
  'last-name': '',
  'address-line1': '',
  'address-line2': '',
  'phone-number': '',
  'email-address': '',
  'lot-number': '',
  'lot-description': '',
  'bid-price': '',
  message: '',
  terms: '',
};

export function BiddingForm() {
  const form = useForm({ defaultValues, shouldUseNativeValidation: true });

  const handleSubmit = form.handleSubmit(async (formValues) => {
    try {
      const data = { 'form-name': 'bid-form', ...formValues };
      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode(data),
      });
    } catch (error) {
      alert(error);
    }
  });

  return (
    <form
      action="/success/"
      method="POST"
      data-netlify="true"
      name="bid-form"
      onSubmit={handleSubmit}
      className="mx-auto mb-0 w-full rounded border bg-gray-100 shadow"
    >
      <Input type="hidden" name="form-name" defaultValue="bid-form" />
      <div className="md:flex">
        <div className="w-full space-y-4 p-3 pb-0 md:w-1/2">
          <div>
            <label className="grid gap-2" htmlFor="first-name">
              <div>Name</div>
              <Input
                autoComplete="given-name"
                id="first-name"
                placeholder="Johnny"
                type="text"
                {...form.register('first-name', {
                  required: true,
                })}
              />
              <Input
                autoComplete="family-name"
                id="last-name"
                placeholder="Appleseed"
                type="text"
                {...form.register('last-name', {
                  required: true,
                })}
              />
            </label>
          </div>
          <div>
            <label className="grid gap-2" htmlFor="address-line1">
              <div>Address</div>
              <Input
                autoComplete="address-line1"
                id="address-line1"
                placeholder="35 Merrigal Road"
                type="text"
                {...form.register('address-line1', {
                  required: true,
                })}
              />
              <Input
                autoComplete="address-line2"
                id="address-line2"
                placeholder="Port Macquarie NSW 2444"
                type="text"
                {...form.register('address-line2', {
                  required: true,
                })}
              />
            </label>
          </div>
          <div className="form-row">
            <div className="form-column">
              <label className="grid gap-2" htmlFor="phone-number">
                <div>Phone number</div>
                <Input
                  autoComplete="tel"
                  id="phone-number"
                  placeholder="0400 000 000"
                  type="tel"
                  {...form.register('phone-number', {
                    required: true,
                  })}
                />
              </label>
            </div>
          </div>
          <div className="form-row">
            <div className="form-column">
              <label className="grid gap-2" htmlFor="email-address">
                <div>Email address</div>
                <Input
                  autoComplete="email"
                  id="email-address"
                  placeholder="your.name@example.com"
                  type="email"
                  {...form.register('email-address', {
                    required: true,
                  })}
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
                <Input
                  autoComplete="off"
                  id="lot-number"
                  placeholder="10123"
                  type="text"
                  {...form.register('lot-number', {
                    required: true,
                  })}
                />
              </label>
            </div>
            <div className="form-column">
              <label className="grid gap-2" htmlFor="lot-description">
                <div>Lot description</div>
                <Input
                  autoComplete="off"
                  id="lot-description"
                  placeholder="Acoustic guitar"
                  type="text"
                  {...form.register('lot-description', {
                    required: true,
                  })}
                />
              </label>
            </div>
            <div className="form-column pb-1">
              <label className="grid gap-2" htmlFor="bid-price">
                <div>Bid price</div>
                <div className="relative rounded-md shadow-sm">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <span className="text-gray-500 sm:text-sm">$</span>
                  </div>
                  <Input
                    autoComplete="off"
                    className="block w-full rounded-md border-gray-300 pl-7 pr-12 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-400 focus:ring-opacity-50 sm:text-sm"
                    id="bid-price"
                    placeholder="100"
                    type="text"
                    {...form.register('bid-price', {
                      required: true,
                    })}
                  />
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                    <span className="text-gray-500 sm:text-sm">.00</span>
                  </div>
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
                  className={`h-48 ${inputClasses}`}
                  defaultValue=""
                  id="message"
                  placeholder="Optional — please leave blank unless you have a very good reason"
                  spellCheck
                  {...form.register('message', {
                    required: false,
                  })}
                />
              </label>
            </div>
          </div>
        </div>
      </div>
      <div className="p-3">
        <TermsAndConditions />
        <div className="mt-2 w-full">
          <div className="relative flex items-start">
            <div className="flex h-5 items-center">
              <input
                id="terms"
                type="checkbox"
                className="h-4 w-4 rounded border-gray-300 text-blue-800 shadow-sm focus:ring-blue-400 focus:ring-opacity-50"
                {...form.register('terms', {
                  required: true,
                })}
              />
            </div>
            <div className="ml-3 text-sm">
              <label htmlFor="terms" className="font-medium text-gray-700">
                I agree to the{' '}
                <strong className="text-grey-darker">
                  Terms &amp; Conditions
                </strong>
              </label>
            </div>
          </div>
        </div>
        <div className="hidden">
          <label htmlFor="bot-field">
            Don’t fill this out if you're human:
            <Input name="bot-field" />
          </label>
        </div>
        <div className="mx-auto mt-2 max-w-sm text-xl">
          <button
            type="submit"
            className="inline-block w-full rounded border-b-8 border-blue-900 bg-blue-800 px-4 py-2 text-center font-medium text-white"
          >
            Submit bid
          </button>
        </div>
      </div>
    </form>
  );
}
