import React from "react";
import Image from "next/image";


function Footer() {
    return (
        <footer>
            <div className="container h-100 py-4 d-flex flex-column flex-md-row align-items-center justify-content-between">
                <div className="d-flex flex-column flex-md-row  align-items-center">
                    {/* <div className="logo mr-2">
                        <img className="logo-black" src="/images/logo.svg" alt="Elbarae logo" draggable="false" />
                        <img className="logo-white" src="/images/logo-white.svg" alt="Elbarae logo" draggable="false" />
                    </div> */}
                    <div className="footer-links mt-3 mt-md-0 ml-md-4">
                        <ul className="d-flex flex-wrap">
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
                    </div>
                </div>
                <h3 className="text-uppercase mb-0 mt-3 mb-0 mt-md-2">
                    Benali Zakaria &copy; 2020 All Rights reserved
                </h3>
            </div>
        </footer>
    );
}

export default Footer;
