import Image from 'next/image';
import React from 'react';

export const Footer = () => {
  return (
    <footer>
      <div className="container h-100 py-4 d-flex flex-column flex-md-row align-items-center justify-content-between">
        <div className="d-flex flex-column flex-md-row  align-items-center">
          <div className="logo mr-2">
            <Image
              className="logo-black"
              src="/images/logo.svg"
              alt="Elbarae website logo"
              fill
              style={{ objectFit: 'contain' }}
            />
            <Image
              className="logo-white"
              src="/images/logo-white.svg"
              alt="Elbarae website logo"
              fill
              style={{ objectFit: 'contain' }}
            />
          </div>
          <div className="footer-links mt-3 mt-md-0 ml-md-4">
            <ul className="d-flex flex-wrap">
              <li>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/Elbarae1921"
                >
                  Github
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.linkedin.com/in/elbarae-rguig/"
                >
                  Linkedin
                </a>
              </li>
            </ul>
          </div>
        </div>
        <h3 className="text-uppercase mb-0 mt-3 mb-0 mt-md-2">
          Designed by{' '}
          <a target="_blank" rel="noreferrer" href="http://zakariabenali.me/">
            BENALI ZAKARIA
          </a>
        </h3>
      </div>
    </footer>
  );
};
