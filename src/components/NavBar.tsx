import React, { useRef, useState } from 'react';
import { SideMenu } from './common/SideMenu';
import { FiChevronRight } from 'react-icons/fi';
import Image from 'next/image';

export const NavBar = () => {
  const [visibleMenu, setShowMenu] = useState(false);
  const navbar = useRef(null);

  return (
    <>
      <div ref={navbar} className="top-nav">
        <div className="container h-100 d-flex align-items-center">
          <div className="logo">
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
          <div className="main-nav d-flex align-items-center">
            <nav className="mr-auto">
              <ul className="d-flex">
                <li>
                  <a href="#about">About me</a>
                </li>
                <li>
                  <a href="#work">My work</a>
                </li>
                <li>
                  <a href="#contact">Contact me</a>
                </li>
              </ul>
            </nav>
            <a href="#contact" className="btn-purple d-flex align-items-center">
              <span>Say Hello</span>
              <div className="icon ml-2">
                <FiChevronRight />
              </div>
            </a>
          </div>
          <div
            onClick={() => {
              setShowMenu(true);
            }}
            className="menu-icon ml-auto flex-column align-items-end"
          >
            <span className="mt-auto"></span>
            <span></span>
            <span className="mb-auto"></span>
          </div>
        </div>
      </div>
      <SideMenu classes={visibleMenu ? ' show' : ''} closeMenu={setShowMenu} />
    </>
  );
};
