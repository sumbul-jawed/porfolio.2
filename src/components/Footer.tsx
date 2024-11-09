import React from 'react';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";

function Footer() {
  return (
    <div>
      <footer className='footer'>
        <div className='footer-container'>
          {/* Centered Text */}
          <div className="footer-center">
            <p className="footer-text">
              © 2024 Sumbul-Jawed
            </p>
          </div>

          {/* Social Links on Right */}
          <div className="footer-social">
            <div className='social-links'>
              <Link href="#">
                <FaFacebookF className='social-icon facebook' />
              </Link>
              <Link href="#">
                <FaTwitter className='social-icon twitter' />
              </Link>
              <Link href="#">
                <FaInstagram className='social-icon instagram' />
              </Link>
              <Link href="https://www.linkedin.com/feed/">
                <FaLinkedin className='social-icon linkedin' />
              </Link>
            </div>
            <div>
              <a href="mailto:sumbuljawedtdb.1@gmail.com" target='_blank' className='email-link'>
                <AiOutlineMail className='email-icon' />
                sumbuljawedtdb.1@gmail.com
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
