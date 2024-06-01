import React from "react";

const Footer = () => {
  return (
    <>
      <div className="flex flex-row bg-gray-200 text-black text-xs p-4">
        <div className="p-2">
          <h1>Bank Of Judah</h1>
        </div>
        <div className="p-2">
          <p className="pb-4">
            24/7 Member Services: 1-888-842-6328 | Routing Number: 256074974{" "}
          </p>
          <p className="pb-4">
            About Us | Contact Us | Privacy | Security | Accessibility Browser
            Support
          </p>
          <p>© 2024 Navy Federal Credit Union.All rights reserved. </p>
          <p className="pb-2">
            Federally Insured by NCUA | Equal Housing Lender
          </p>

          <p>APY = Annual Percentage Yield | APR = Annual Percentage Rate </p>
          <p>
            +Rates are based on an evaluation of credit history, so your rate
            may differ.{" "}
          </p>
          <p>
            *Message and data rates may apply. Terms and Conditions are
            available.{" "}
          </p>
          <p>
            iPhone®, iPad® and iPod touch® are trademarks of Apple Inc. App
            StoreSM is a service mark of Apple Inc. AndroidTM and Google PlayTM
            are trademarks of Google Inc.{" "}
          </p>
          <p>
            {" "}
            Image used for representational purposes only; do not imply
            government endorsement.
          </p>
          <p>
            Navy Federal uses small text files called cookies to collect
            anonymous Web site traffic data. This information helps improve our
            Web services. Our cookies do not collect or store any personally
            identifiable information.
          </p>

          <p>
            This site is protected by reCAPTCHA and the Google Privacy Policy
            and Terms of Service apply.{" "}
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
