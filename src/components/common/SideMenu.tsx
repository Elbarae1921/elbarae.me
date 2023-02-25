import React from 'react';
import { FiArrowRightCircle } from 'react-icons/fi';
import { CommonComponentProps } from 'types/CommonComponentProps';

interface SideMenuProps extends CommonComponentProps {
  closeMenu: (arg0: boolean) => void;
}

export const SideMenu = ({ classes, closeMenu }: SideMenuProps) => {
  return (
    <div className={'side-menu' + classes}>
      <div
        onClick={() => {
          closeMenu(false);
        }}
        className="shrink-menu"
      >
        <div className="container h-100 d-flex align-items-center">
          <FiArrowRightCircle />
          <span className="ml-3">Shrink</span>
        </div>
      </div>
      <ul className="d-flex flex-column align-items-center pt-5">
        <li
          onClick={() => {
            closeMenu(false);
          }}
        >
          <a href="#about">About me</a>
        </li>
        <li
          onClick={() => {
            closeMenu(false);
          }}
        >
          <a href="#work">My work</a>
        </li>
        <li
          onClick={() => {
            closeMenu(false);
          }}
        >
          <a href="#contact">Contact me</a>
        </li>
      </ul>
    </div>
  );
};
