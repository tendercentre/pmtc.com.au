+++
title = "Home"
+++

<p class="lead">To submit an online bid, please fill in the form below:</p>
<p class="lead">You will need to know the lot number of the item you are bidding on, <a href="/catalogue.pdf" target="_blank">you can use our catalogue for reference.</a>
</p>
<p>If you would like to bid on multiple items, please fill in and submit this form for each item or you could write it in the <a href="#message">message</a> field at the bottom</p>

<hr>

<form class="bg-grey-lightest border mb-0 mx-auto rounded shadow w-full" name="bid-form" action="/success/" method="POST" netlify>
  <div class="md:flex">

    <!-- COLUMN 1 -->
    <div class="p-3 pb-0 w-full md:w-1/2">

      <!-- ROW: NAME -->
      <div class="form-row">

        <!-- FIRST NAME -->
        <div class="form-column">
          <label class="form-label" for="first-name">Name</label>
          <input class="form-input mb-4" id="first-name" name="first-name" type="text" autofocus autocomplete="given-name" placeholder="Johnny">
          <input class="form-input" id="last-name" name="last-name" type="text" autocomplete="family-name" placeholder="Appleseed">
        </div>

      </div>

      <!-- ROW: ADDRESS -->
      <div class="form-row">

        <!-- ADDRESS -->
        <div class="form-column">
          <label class="form-label" for="address-line1">Address</label>
          <input class="form-input mb-4" id="address-line1" name="address-line1" type="text" autocomplete="address-line1" placeholder="35 Merrigal Road">
          <input class="form-input" type="text" autocomplete="address-line2" name="address-line2" placeholder="Port Macquarie NSW 2444">
        </div>

      </div>

      <!-- ROW: PHONE -->
      <div class="form-row">

        <!-- PHONE NUMBER -->
        <div class="form-column">
          <label class="form-label" for="phone-number">Phone number</label>
          <input class="form-input" id="phone-number" name="phone-number" type="text" autocomplete="tel" placeholder="0400 000 000">
        </div>

      </div>

      <!-- ROW: EMAIL -->
      <div class="form-row">

        <!-- EMAIL ADDRESS -->
        <div class="form-column">
          <label class="form-label" for="email-address">Email address</label>
          <input class="form-input" id="email-address" name="email-address" type="text" autocomplete="email" placeholder="your.name@example.com">
        </div>
      </div>

    </div>

    <!-- COLUMN 2 -->
    <div class="p-3 pb-0 w-full md:w-1/2">

      <!-- ROW: BID INFORMATION -->
      <div class="form-row">

        <!-- LOT NUMBER -->
        <div class="form-column">
          <label class="form-label" for="lot-number">Lot number</label>
          <input class="form-input" id="lot-number" name="lot-number" type="text" autocomplete="off" placeholder="10123">
        </div>

        <!-- LOT DESCRIPTION -->
        <div class="form-column">
          <label class="form-label" for="lot-description">Lot description</label>
          <input class="form-input" id="lot-description" name="lot-description" type="text" autocomplete="off" placeholder="Acoustic guitar">
        </div>

        <!-- BID PRICE -->
        <div class="form-column pb-1">
          <label class="form-label" for="bid-price">Bid price</label>
          <div class="bg-grey-lighter border flex items-center rounded">
            <div class="flex-auto px-4 rounded-l">$</div>

            <input class="border-l border-r flex-auto appearance-none bg-white block px-4 py-3 shadow-inner text-grey-darker w-full" id="bid-price" type="text" autocomplete="off" name="bid-price" placeholder="100">

            <div class="flex-auto px-4 rounded-r">.00</div>

          </div>
          <small class="text-grey-darker">(A buyer's premium of 11% + $3.30 is added to this offer for successful bids.)</small>
        </div>

        <!-- MESSAGE AREA -->
        <div class="form-column">
          <label class="form-label" for="message">Message</label>
          <textarea class="border h-48 p-3 rounded shadow-inner text-grey-darker w-full" id="message" name="message" spellcheck placeholder="Optional — please leave blank unless you have a very good reason"></textarea>
        </div>

      </div>

    </div>

  </div>

  <!-- TERMS & CONDITIONS / SUBMIT BUTTON -->
  <div class="p-3">
    <div class="form-column pb-1">
      <label class="form-label">
        <h3>Terms &amp; Conditions</h3>
      </label>
      <div class="bg-white border h-64 overflow-y-scroll pt-3 pr-3 rounded scrolling-touch shadow-inner text-sm">
        <ol>
  <li>
    <p>Payment methods are to be by cash or EFTPOS. Any other methods must be approved of by the Port Macquarie Tender Centre
      before your tender can be accepted.</p>
  </li>
  <li>
    <p>The Bidder agrees to pay a Buyer’s Premium of 11% plus a $3.30 per lot processing fee.</p>
  </li>
  <li>
    <p>A Bid, once submitted, cannot be withdrawn and is irrevocable.</p>
  </li>
  <li>
    <p>If a Bid is accepted within a period of 7 days from the close of Bids, or if a price is subsequently negotiated it then
      becomes a legally binding contract to purchase as per these terms and conditions.</p>
  </li>
  <li>
    <p>All Bids must be in whole dollars. All Bids submitted with cents will be rounded up to the nearest whole dollar.</p>
  </li>
  <li>
    <p>Port Macquarie Tender Centre, at its sole and absolute discretion, may decide to rule any Bid void.</p>
  </li>
  <li>
    <p>It is the Bidder’s responsibility to enquire as to whether or not their Bid has been successful.</p>
  </li>
  <li>
    <p>In the case of a tied Bid, preference will be given to the lowest Bid Sheet number. Bid Sheets are handed out in Bid
      Sheet number order.</p>
  </li>
  <li>
    <p>Bids submitted after close of sale may or may not be accepted at the sole discretion of the Port Macquarie Tender Centre.</p>
  </li>
  <li>
    <p>It is the responsibility of the Bidder to ensure before submitting a Bid that the goods are suitable for the purpose
      for which they are intended. No allowance will be made for unsuitability after a Bid has been submitted.</p>
  </li>
  <li>
    <p>Any refunds will be issued at the sole discretion of the Port Macquarie Tender Centre and must be processed within 36
      hours of purchase.</p>
  </li>
  <li>
    <p>Descriptions of goods offered for sale are based on descriptions supplied by the Seller. Under no circumstances shall
      the Port Macquarie Tender Centre, it’s employees or agents be liable for any misdescription, error or omission of a
      description be it in a catalogue, advertisement, brochure or any other medium.</p>
  </li>
  <li>
    <p>In the case of a dispute, any remedies or actions taken by a Seller, Buyer, Bidder or any other party shall lie against
      the Seller, Buyer, Bidder or other party, and under no circumstances shall any remedies or actions lie against the
      Port Macquarie Tender Centre, it’s employees or agents.</p>
  </li>
  <li>
    <p>The title of goods and risk of goods is in the Seller’s name until payment has been made by the Buyer, at which time
      title and risk are transferred to the Purchaser. At no time is title or risk in the Port Macquarie Tender Centre’s
      name.</p>
  </li>
  <li>
    <p>The Port Macquarie Tender Centre takes no responsibilities for goods left in-store after payment has been made.</p>
  </li>
  <li>
    <p>If goods are not paid for by the deadline displayed at the place of viewing, Port Macquarie Tender Centre, without giving
      notice to the Bidder may do any or all of the following:</p>

    <p>
      <strong class="text-blue-dark">a.</strong> Charge a storage fee</p>

    <p>
      <strong class="text-blue-dark">b.</strong> Declare the agreement void, contact another Bidder and inform them that their Bid has been successful and
      take legal action against the original Bidder for the difference.</p>

    <p>
      <strong class="text-blue-dark">c.</strong> Take legal action against the Bidder to enforce this contract.</p>

  </li>
</ol>

      </div>
    </div>

    <!-- CHECKBOX -->
    <div class="w-full">
      <input name="agree" type="checkbox" value="agree">
      <label class="px-1">I agree to the <strong class="text-grey-darker">Terms &amp; Conditions</strong></label>
    </div>

    <!-- HONEYPOT -->
    <div class="hidden">
      <label>Don’t fill this out if you're human:</label>
      <input name="bot-field">
    </div>

    <!-- SUBMIT BUTTON -->
    <div class="mt-2 max-w-sm mx-auto text-xl">
      <button class="btn btn-dark w-full" name="signup" type="submit" value="Sign up">Submit bid</button>
    </div>

  </div>

</form>