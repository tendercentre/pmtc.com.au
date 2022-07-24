import NextImage from 'next/future/image';
import NextLink from 'next/link';
import { NextSeo } from 'next-seo';
import { useInView } from 'react-intersection-observer';

import { config } from '../data';

export default function IndexPage() {
  return (
    <>
      <NextSeo title="Home" />
      <div className="mx-auto grid w-full max-w-5xl gap-6 rounded-md bg-gray-200 px-4 py-6 text-gray-800 shadow-md sm:py-8 sm:px-6">
        <Hero />
        <Cards />
        <Info />
        <Map />
      </div>
    </>
  );
}

function Hero() {
  return (
    <article className="relative overflow-hidden rounded border-b-8 border-blue-900 bg-blue-800 text-white">
      <div className="absolute inset-0">
        <NextImage
          src="/hero.jpg"
          width={960}
          height={539}
          loading="lazy"
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />
      </div>
      <div className="relative bg-blue-900 bg-opacity-75">
        <div className="relative mx-auto w-full max-w-3xl px-4 py-20 text-center text-3xl sm:px-6 lg:px-8">
          <p>
            We are the largest second-hand and consignment store on the Mid
            North Coast.
          </p>
          <p>What will you find at the Tender Centre?</p>
        </div>
      </div>
    </article>
  );
}

const cards = [
  {
    heading: 'Buying?',
    copy: [
      <p key={1}>
        All the information you need about how buying from the Tender Centre
        works.
      </p>,
    ],
    slug: '/buyers/',
  },
  {
    heading: 'Selling?',
    copy: [
      <p key={1}>
        When can you take goods in to sell? What are the commission rates?
      </p>,
      <p key={2}>Find out here.</p>,
    ],
    slug: '/sellers/',
  },
  {
    heading: 'FAQ',
    copy: [<p key={1}>You got questions?</p>, <p key={2}>We got answers!</p>],
    slug: '/faq/',
  },
] as const;

function Cards() {
  return (
    <article className="grid gap-4 lg:grid-cols-3">
      {cards.map(({ copy, heading, slug }) => (
        <div
          key={slug}
          className="flex flex-col rounded border bg-white shadow"
        >
          <h2 className="rounded-t-md bg-gray-100 py-2 text-center font-display text-2xl font-medium uppercase text-blue-800">
            {heading}
          </h2>
          <div className="flex flex-1 flex-col border-t px-4 py-6">
            <div>{copy}</div>
            <div className="mt-auto pt-12">
              <NextLink href={slug}>
                <a
                  aria-label={`Read more about ${heading}`}
                  className="inline-block w-full rounded border-b-8 border-blue-900 bg-blue-800 px-4 py-2 text-center font-medium text-white"
                >
                  Read more
                </a>
              </NextLink>
            </div>
          </div>
        </div>
      ))}
    </article>
  );
}

function Info() {
  return (
    <div className="grid gap-4 lg:grid-cols-2">
      <Hours />
      <Contact />
    </div>
  );
}

function Hours() {
  return (
    <article className="flex flex-col space-y-4 rounded border bg-white px-4 py-6 shadow">
      <h2 className="font-display text-2xl font-medium uppercase text-blue-800">
        Hours
      </h2>
      <div className="flex-1 rounded border bg-gray-200 px-4 py-6 shadow">
        <h3 className="text-xl font-bold">General</h3>
        <dl className="mt-4 space-y-4">
          <div>
            <dt className="font-bold">Monday – Friday</dt>
            <dd>9:00am — 5:00pm</dd>
          </div>
          <div>
            <dt className="font-bold">Weekends</dt>
            <dd>9:00am — 2:00pm</dd>
          </div>
        </dl>
      </div>
      <div className="flex-1 rounded border bg-gray-200 px-4 py-6 shadow">
        <h3 className="text-xl font-bold">Receiving</h3>
        <div className="mt-4 font-bold">By appointment only</div>
      </div>
    </article>
  );
}

function Contact() {
  return (
    <article className="space-y-4 rounded border bg-white px-4 py-6 shadow">
      <h2 className="font-display text-2xl font-medium uppercase text-blue-800">
        Contact
      </h2>
      <div className="rounded border bg-gray-200 px-4 py-6 shadow">
        <dl className="mt-4 space-y-4">
          <div>
            <dt className="font-bold">Phone</dt>
            <dd>
              <a href={`tel:${config.phone}`} className="font-bold underline">
                {config.phone}
              </a>
            </dd>
          </div>
          <div>
            <dt className="font-bold">Email</dt>
            <dd>
              <a
                href={`mailto:${config.email}`}
                className="font-bold underline"
              >
                {config.email}
              </a>
            </dd>
          </div>
          <div>
            <dt className="font-bold">Address</dt>
            <dd>
              <a
                href={config.address.googleMaps}
                className="font-bold underline"
              >
                {config.address.line1}, {config.address.line2}
              </a>
            </dd>
          </div>
        </dl>
      </div>
      <h2 className="font-display text-2xl font-medium uppercase text-blue-800">
        Social
      </h2>
      <div className="rounded border bg-gray-200 px-4 py-6 shadow">
        <div className="flex items-center space-x-4">
          {config.socialLinks.map(({ icon: Icon, label, url }) => (
            <a key={url} href={url}>
              <span className="sr-only">{label}</span>
              <Icon className="w-8 text-blue-800" />
            </a>
          ))}
        </div>
      </div>
    </article>
  );
}

function Map() {
  const { ref, inView } = useInView();

  return (
    <article className="rounded-md border bg-white px-4 py-6 shadow">
      <div ref={ref} className="aspect-w-16 aspect-h-9 overflow-hidden rounded">
        {inView && (
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6806.934245756351!2d152.882405!3d-31.456334!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x9f3b717d29c9fdd6!2sPort%20Macquarie%20Tender%20Centre!5e0!3m2!1sen!2sus!4v1605390939667!5m2!1sen!2sus"
            frameBorder={0}
            style={{ border: 0 }}
            allowFullScreen
            aria-hidden={false}
            tabIndex={0}
            title={`${config.title} Location`}
            className="absolute inset-0"
          />
        )}
      </div>
    </article>
  );
}
