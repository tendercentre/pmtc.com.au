import { NextSeo } from "next-seo";
import Link from "next/link";
import Image from "next/image";
import { useInView } from "react-intersection-observer";

import { config } from "../data";

export default function IndexPage() {
  return (
    <>
      <NextSeo title="Home" />
      <div className="grid w-full max-w-5xl gap-6 px-4 py-6 mx-auto text-gray-800 bg-gray-200 rounded-md shadow-md sm:py-8 sm:px-6">
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
    <article className="relative overflow-hidden text-white bg-blue-800 border-b-8 border-blue-900 rounded">
      <div className="absolute inset-0">
        <Image
          src="/hero.jpg"
          width="960"
          height="539"
          loading="lazy"
          alt=""
          className="absolute inset-0 object-cover w-full h-full"
        />
      </div>
      <div className="relative bg-blue-900 bg-opacity-75">
        <div className="relative w-full max-w-3xl px-4 py-20 mx-auto text-3xl text-center sm:px-6 lg:px-8">
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
    heading: "Buying?",
    copy: `<p>All the information you need about how buying from the Tender Centre works.</p>`,
    slug: "/buyers/",
  },
  {
    heading: "Selling?",
    copy: `<p>When can you take goods in to sell? What are the commission rates?</p><p>Find out here.</p>`,
    slug: "/sellers/",
  },
  {
    heading: "FAQ",
    copy: `<p>You got questions?</p><p>We got answers!</p>`,
    slug: "/faq/",
  },
];

function Cards() {
  return (
    <article className="grid gap-4 lg:grid-cols-3">
      {cards.map((card) => (
        <div
          key={card.slug}
          className="flex flex-col bg-white border rounded shadow"
        >
          <h2 className="py-2 text-2xl font-medium text-center text-blue-800 uppercase bg-gray-100 font-display rounded-t-md">
            {card.heading}
          </h2>
          <div className="flex flex-col flex-1 px-4 py-6 border-t">
            <div dangerouslySetInnerHTML={{ __html: card.copy }} />
            <div className="pt-12 mt-auto">
              <Link
                href={card.slug}
                aria-label={`Read more about ${card.heading}`}
                className="inline-block w-full px-4 py-2 font-medium text-center text-white bg-blue-800 border-b-8 border-blue-900 rounded"
              >
                Read more
              </Link>
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
    <article className="flex flex-col px-4 py-6 space-y-4 bg-white border rounded shadow">
      <h2 className="text-2xl font-medium text-blue-800 uppercase font-display">
        Hours
      </h2>
      <div className="flex-1 px-4 py-6 bg-gray-200 border rounded shadow">
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
      <div className="flex-1 px-4 py-6 bg-gray-200 border rounded shadow">
        <h3 className="text-xl font-bold">Receiving</h3>
        <div className="mt-4 font-bold">By appointment only</div>
      </div>
    </article>
  );
}

function Contact() {
  return (
    <article className="px-4 py-6 space-y-4 bg-white border rounded shadow">
      <h2 className="text-2xl font-medium text-blue-800 uppercase font-display">
        Contact
      </h2>
      <div className="px-4 py-6 bg-gray-200 border rounded shadow">
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
      <h2 className="text-2xl font-medium text-blue-800 uppercase font-display">
        Social
      </h2>
      <div className="px-4 py-6 bg-gray-200 border rounded shadow">
        <div className="flex items-center space-x-4">
          {config.socialLinks.map((socialLink) => (
            <a key={socialLink.url} href={socialLink.url}>
              <span className="sr-only">{socialLink.label}</span>
              <socialLink.icon className="w-8 text-blue-800" />
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
    <article className="px-4 py-6 bg-white border rounded-md shadow">
      <div ref={ref} className="overflow-hidden rounded aspect-w-16 aspect-h-9">
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
