import React from "react";
import { FiArrowRightCircle } from "react-icons/fi";
function SideMenu({ classes, closeMenu }) {
    return (
        <div className={"side-menu" + classes}>
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
}

export default SideMenu;
