import React from "react";
import Footer1 from "../Svg/Footer1";
import Footer2 from "../Svg/Footer2";
const Footer = () => {
  return (
    <footer className="footer">
      <a target="new" className="oxfam-logo" href="https://www.kedv.org.tr/">
        <Footer1 />
        <span>KEDV</span>
      </a>
      <a className="footer-link color--white" href="/takeaction">
        <Footer2 />
        <span>İMZALA</span>
      </a>
    </footer>
  );
};

export default Footer;
