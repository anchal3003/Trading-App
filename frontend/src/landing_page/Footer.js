import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer style={{ backgroundColor: "rgb(250, 250, 250)" }}>
      <div className="container border-top mt-5">
        <div className="row mt-5">
          <div className="col">
            <img
              src="media/images/logo.svg"
              alt="Company Logo"
              style={{ width: "50%" }}
            />
            <p>
              &copy; 2010 - 2024, Not Zerodha Broking Ltd. All rights reserved.
            </p>
          </div>

          <div className="col">
            <p className="fw-bold">Company</p>
            <Link to="/about" className="d-block mb-1">About</Link>
            <Link to="/product" className="d-block mb-1">Products</Link>
            <Link to="/pricing" className="d-block mb-1">Pricing</Link>
            <a href="#" className="d-block mb-1" onClick={(e) => e.preventDefault()}>Referral programme</a>
            <a href="#" className="d-block mb-1" onClick={(e) => e.preventDefault()}>Careers</a>
            <a href="#" className="d-block mb-1" onClick={(e) => e.preventDefault()}>Zerodha.tech</a>
            <a href="#" className="d-block mb-1" onClick={(e) => e.preventDefault()}>Press & media</a>
            <a href="#" className="d-block mb-1" onClick={(e) => e.preventDefault()}>Zerodha cares (CSR)</a>
          </div>

          <div className="col">
            <p className="fw-bold">Support</p>
            <Link to="/support" className="d-block mb-1">Contact</Link>
            <a href="#" className="d-block mb-1" onClick={(e) => e.preventDefault()}>Support portal</a>
            <a href="#" className="d-block mb-1" onClick={(e) => e.preventDefault()}>Z-Connect blog</a>
            <a href="#" className="d-block mb-1" onClick={(e) => e.preventDefault()}>List of charges</a>
            <a href="#" className="d-block mb-1" onClick={(e) => e.preventDefault()}>Downloads & resources</a>
          </div>

          <div className="col">
            <p className="fw-bold">Account</p>
            <a href="#" className="d-block mb-1" onClick={(e) => e.preventDefault()}>Open an account</a>
            <a href="#" className="d-block mb-1" onClick={(e) => e.preventDefault()}>Fund transfer</a>
            <a href="#" className="d-block mb-1" onClick={(e) => e.preventDefault()}>60 day challenge</a>
          </div>
        </div>

        <div className="mt-5 text-muted" style={{ fontSize: "14px" }}>
          <p>
            Zerodha Broking Ltd.: Member of NSE & BSE – SEBI Registration no.:
            INZ000031633 CDSL: Depository services through Zerodha Securities Pvt. Ltd.
            – SEBI Registration no.: IN-DP-100-2015 Commodity Trading through Zerodha
            Commodities Pvt. Ltd. MCX: 46025 – SEBI Registration no.: INZ000038238
            Registered Address: Zerodha Broking Ltd., #153/154, 4th Cross, Dollars Colony,
            Opp. Clarence Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India.
          </p>

          <p>
            For any complaints pertaining to securities broking please write to
            complaints@zerodha.com, for DP related to dp@zerodha.com.
            Please ensure you carefully read the Risk Disclosure Document as prescribed by SEBI | ICF
          </p>

          <p>
            Procedure to file a complaint on SEBI SCORES: Register on SCORES portal.
            Mandatory details: Name, PAN, Address, Mobile Number, E-mail ID.
            Benefits: Effective communication, speedy redressal of grievances.
          </p>

          <p>
            Investments in securities market are subject to market risks; read
            all related documents carefully before investing.
          </p>

          <p>
            Prevent unauthorized transactions in your account. Update your mobile number/email ID
            with your stock broker. Receive transaction info directly from Exchange at day-end.
            KYC is a one-time exercise with a SEBI-registered intermediary. No need to redo KYC again
            with other intermediaries.
          </p>

          <p>
            If you are subscribing to an IPO, do not issue a cheque. Instead, authorize your bank to
            debit your account in case of allotment. Funds will remain in your bank if not allotted.
            We don't provide stock tips or authorize anyone to trade on behalf of others.
            Report impersonation immediately via our support ticket system.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
