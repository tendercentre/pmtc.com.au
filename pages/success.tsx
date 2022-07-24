import NextLink from 'next/link';
import { NextSeo } from 'next-seo';

export default function SuccessPage() {
  return (
    <>
      <NextSeo title="Success" />
      <div className="mx-auto w-full max-w-3xl rounded-md bg-white text-gray-800 shadow-md">
        <h1 className="rounded-t-md border-b bg-gray-100 py-2 text-center font-display text-3xl font-medium uppercase text-blue-800">
          Success
        </h1>
        <div className="prose px-4 py-6 sm:py-8 sm:px-6">
          <p className="lead">Your bid was submitted.</p>
          <p>
            Good luck! We have received your bid and will be in touch if it is
            accepted.
          </p>
          <p>
            If you would like to submit another bid, click the button below.
          </p>
          <NextLink href="/bid/">
            <a>Keep bidding</a>
          </NextLink>
        </div>
      </div>
    </>
  );
}
