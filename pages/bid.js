import { NextSeo } from "next-seo";

import { BiddingForm } from "../components/bidding-form";

export default function BidPage() {
  return (
    <>
      <NextSeo title="Bid" />
      <div className="w-full max-w-3xl mx-auto text-gray-800 bg-white rounded-md shadow-md">
        <h1 className="py-2 text-3xl font-medium text-center text-blue-800 uppercase bg-gray-100 border-b font-display rounded-t-md">
          Online Bid
        </h1>
        <div className="px-4 py-6 sm:py-8 sm:px-6">
          <div className="mb-6 prose">
            <p className="lead">
              To submit an online bid, please fill in the form below:
            </p>
            <p className="lead">
              You will need to know the lot number of the item you are bidding
              on,{" "}
              <a href="/catalogue.pdf" target="_blank">
                you can use our catalogue for reference.
              </a>
            </p>
            <p>
              If you would like to bid on multiple items, please fill in and
              submit this form for each item or you could write it in the{" "}
              <a href="#message">message</a> field at the bottom
            </p>
          </div>
          <BiddingForm />
        </div>
      </div>
    </>
  );
}
