
import React from 'react';
import '../assets/scss/component/_footer.scss';

// React Icons se import
import { FaEnvelope, FaPhoneAlt, FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__top">
        <h2>
          Have Any Questions? <span>Send Us An Email!</span>
        </h2>
      </div>

      <div className="footer__middle">
        <div className="footer__col">
          <p className="footer__col-title">Drop us an email</p>
          <p><FaEnvelope /> Legal@techkel.com</p>
          <p><FaEnvelope /> hr@techkel.com</p>
        </div>

        <div className="footer__col">
          <p className="footer__col-title">Call us on below numbers</p>
          <p><FaPhoneAlt /> +91 8699339339</p>
        </div>

        <div className="footer__col">
          <p>Let's Connect</p>
          <div className="footer__social">
            <a href="#"className="social-icon active"><FaFacebookF /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaTwitter /></a>
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <p>© 2025 Techkel | All Rights Reserved</p>
        <div className="footer__links">
          <a href="#">Career</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Legal</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

