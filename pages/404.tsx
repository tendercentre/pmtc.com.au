import NextLink from 'next/link';
import { NextSeo } from 'next-seo';

export default function NotFoundPage() {
  return (
    <>
      <NextSeo title="404: Page Not Found" />
      <div className="mx-auto w-full max-w-3xl rounded-md bg-white text-gray-800 shadow-md">
        <h1 className="rounded-t-md border-b bg-gray-100 py-2 text-center font-display text-3xl font-medium uppercase text-blue-800">
          404: Page Not Found
        </h1>
        <div className="prose px-4 py-6 sm:py-8 sm:px-6">
          <p>Well that's weird...</p>
          <p>It looks like this page doesn’t exist (yet?)</p>
          <p>
            Please use the ‘back’ button in your browser or click the link below
            to go back to the home page, and if you continue to have issues, get
            in touch.
          </p>
          <p>
            <NextLink href="/">
              <a>Take me home</a>
            </NextLink>
          </p>
        </div>
      </div>
    </>
  );
}
