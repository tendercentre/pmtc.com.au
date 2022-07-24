import NextLink from 'next/link';
import { NextSeo } from 'next-seo';

import { config } from '../data';

export default function SellersPage() {
  return (
    <>
      <NextSeo title="Sellers" />
      <div className="mx-auto w-full max-w-3xl rounded-md bg-white text-gray-800 shadow-md">
        <h1 className="rounded-t-md border-b bg-gray-100 py-2 text-center font-display text-3xl font-medium uppercase text-blue-800">
          Sellers
        </h1>
        <div className="prose px-4 py-6 text-lg sm:py-8 sm:px-6">
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
                      <th className="bg-gray-50 px-6 py-3 text-left text-xs font-medium uppercase leading-4 tracking-wider text-gray-500">
                        Sale price
                      </th>
                      <th className="bg-gray-50 px-6 py-3 text-left text-xs font-medium uppercase leading-4 tracking-wider text-gray-500">
                        Commission rate
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 bg-white">
                    <tr>
                      <td className="whitespace-no-wrap px-6 py-4 text-sm font-medium leading-5">
                        $0 – $499
                      </td>
                      <td className="whitespace-no-wrap px-6 py-4 text-sm leading-5 text-gray-500">
                        22%
                      </td>
                    </tr>
                    <tr>
                      <td className="whitespace-no-wrap px-6 py-4 text-sm font-medium leading-5">
                        $500 – $899
                      </td>
                      <td className="whitespace-no-wrap px-6 py-4 text-sm leading-5 text-gray-500">
                        20%
                      </td>
                    </tr>
                    <tr>
                      <td className="whitespace-no-wrap px-6 py-4 text-sm font-medium leading-5">
                        $900 – $2999
                      </td>
                      <td className="whitespace-no-wrap px-6 py-4 text-sm leading-5 text-gray-500">
                        18%
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div className="prose px-4 py-6 text-lg sm:py-8 sm:px-6">
          <p>$3000 and over by negotiation.</p>
          <p>Minimum commission per item is $3.30.</p>
          <hr />
          <p>
            Sounds like too much work? We also offer clearance solution for
            downsizing and deceased estates
          </p>
          <p>
            <NextLink href="/clearance/">
              <a>Clearance solutions information</a>
            </NextLink>
          </p>
        </div>
      </div>
    </>
  );
}
