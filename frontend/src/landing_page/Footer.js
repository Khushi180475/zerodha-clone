import React from "react";

function Footer() {
  return (
    <footer style={{ backgroundColor: "rgb(250, 250, 250)" }} className="border-top mt-5">
      <div className="container mt-5">
        <div className="row mt-5">
          {/* Logo and Social Section */}
          <div className="col-lg-3 col-sm-12 mb-4">
            <img src="media/logo.svg" style={{ width: "50%" }} alt="Zerodha Logo" />
            <p className="mt-3 text-muted" style={{ fontSize: "14px" }}>
              &copy; 2010 - 2026, Zerodha Broking Ltd. <br />
              All rights reserved.
            </p>
          </div>

          {/* Account Section */}
          <div className="col-lg-3 col-sm-6">
            <h5 className="mb-3 fs-6 fw-bold">Account</h5>
            <ul className="list-unstyled footer-links">
              <li><a href="">Open demat account</a></li>
              <li><a href="">Minor demat account</a></li>
              <li><a href="">NRI demat account</a></li>
              <li><a href="">HUF demat account</a></li>
              <li><a href="">Commodity</a></li>
              <li><a href="">Dematerialisation</a></li>
              <li><a href="">Fund transfer</a></li>
              <li><a href="">MTF</a></li>
            </ul>
          </div>

          {/* Support Section */}
          <div className="col-lg-3 col-sm-6">
            <h5 className="mb-3 fs-6 fw-bold">Support</h5>
            <ul className="list-unstyled footer-links">
              <li><a href="">Support portal</a></li>
              <li><a href="">How to file a complaint?</a></li>
              <li><a href="">Status of your complaints</a></li>
              <li><a href="">Bulletin</a></li>
              <li><a href="">Circular</a></li>
              <li><a href="">Z-Connect blog</a></li>
              <li><a href="">Downloads</a></li>
              <li><a href="">Contact us</a></li>
            </ul>
          </div>

          {/* Company Section */}
          <div className="col-lg-3 col-sm-6">
            <h5 className="mb-3 fs-6 fw-bold">Company</h5>
            <ul className="list-unstyled footer-links">
              <li><a href="">About</a></li>
              <li><a href="">Philosophy</a></li>
              <li><a href="">Press & media</a></li>
              <li><a href="">Careers</a></li>
              <li><a href="">Zerodha Cares (CSR)</a></li>
              <li><a href="">Zerodha.tech</a></li>
              <li><a href="">Open source</a></li>
              <li><a href="">Referral program</a></li>
            </ul>
          </div>
        </div>

        {/* Disclaimer Text */}
        <div className="mt-5 text-muted" style={{ fontSize: "12px", lineHeight: "1.8" }}>
          <p>
            Zerodha Broking Ltd.: Member of NSE​ &​ BSE – SEBI Registration no.:
            INZ000031633 CDSL: Depository services through Zerodha Securities
            Pvt. Ltd. – SEBI Registration no.: IN-DP-100-2015 Commodity Trading
            through Zerodha Commodities Pvt. Ltd. MCX: 46025 – SEBI Registration
            no.: INZ000038238 Registered Address: Zerodha Broking Ltd.,
            #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School,
            J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any
            complaints pertaining to securities broking please write to
            complaints@zerodha.com, for DP related to dp@zerodha.com. Please
            ensure you carefully read the Risk Disclosure Document as prescribed
            by SEBI | ICF
          </p>

          <p>
            Procedure to file a complaint on SEBI SCORES: Register on SCORES
            portal. Mandatory details for filing complaints on SCORES: Name,
            PAN, Address, Mobile Number, E-mail ID. Benefits: Effective
            Communication, Speedy redressal of the grievances
          </p>

          <p>
            Investments in securities market are subject to market risks; read
            all the related documents carefully before investing.
          </p>

          <p>
            "Prevent unauthorised transactions in your account. Update your
            mobile numbers/email IDs with your stock brokers. Receive
            information of your transactions directly from Exchange on your
            mobile/email at the end of the day. Issued in the interest of
            investors. KYC is one time exercise while dealing in securities
            markets - once KYC is done through a SEBI registered intermediary
            (broker, DP, Mutual Fund etc.), you need not undergo the same
            process again when you approach another intermediary." Dear
            Investor, if you are subscribing to an IPO, there is no need to
            issue a cheque. Please write the Bank account number and sign the
            IPO application form to authorize your bank to make payment in case
            of allotment. In case of non allotment the funds will remain in your
            bank account. As a business we don't give stock tips, and have not
            authorized anyone to trade on behalf of others. If you find anyone
            claiming to be part of Zerodha and offering such services, please
            create a ticket here.
          </p>
        </div>
        <div className="mt-4 pt-3 border-top d-flex justify-content-center flex-wrap" style={{ fontSize: "13px" }}>
          <ul className="list-inline text-muted fw-semibold">
            <li className="list-inline-item mx-3"><a href="" className="text-decoration-none text-muted">NSE</a></li>
            <li className="list-inline-item mx-3"><a href="" className="text-decoration-none text-muted">BSE</a></li>
            <li className="list-inline-item mx-3"><a href="" className="text-decoration-none text-muted">MCX</a></li>
            <li className="list-inline-item mx-3"><a href="" className="text-decoration-none text-muted">Terms & conditions</a></li>
            <li className="list-inline-item mx-3"><a href="" className="text-decoration-none text-muted">Policies & procedures</a></li>
            <li className="list-inline-item mx-3"><a href="" className="text-decoration-none text-muted">Privacy policy</a></li>
            <li className="list-inline-item mx-3"><a href="" className="text-decoration-none text-muted">Disclosure</a></li>
            <li className="list-inline-item mx-3"><a href="" className="text-decoration-none text-muted">For investor's attention</a></li>
            <li className="list-inline-item mx-3"><a href="" className="text-decoration-none text-muted">Investor charter</a></li>
          </ul>
        </div>
      </div>

      {/* Internal CSS - Add this to your App.css or a style tag */}
      <style>{`
        .footer-links li {
          margin-bottom: 8px;
        }
        .footer-links a {
          text-decoration: none;
          color: #666;
          font-size: 14px;
        }
        .footer-links a:hover {
          color: #387ed1;
        }
      `}</style>
    </footer>
  );
}

export default Footer;