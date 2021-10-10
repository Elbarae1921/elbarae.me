import React from "react";
import { FiChevronDown } from "react-icons/fi";
import SectionLayout from "./common/SectionLayout";
import Illustration from "./common/AnimatedIllustration";
import Loader from "./common/Loader";

function Hero({ domLoaded }) {
    return (
        <SectionLayout classes="hero d-flex pt-5" id="hero">
            <div className="col-lg-6">
                <h1>Hello There 👋!</h1>
                <p>
                I’m Elbarae &amp; I’m a self-taught Fullstack Javascript developer!
                </p>
                <div className="buttons d-flex flex-wrap mr-3">
                    <a
                        href="#contact"
                        className="btn-purple outline-transparent d-flex align-items-center ml-md-auto mb-2 mb-md-0 mr-3"
                    >
                        <span>Get in touch</span>
                        <div className="icon ml-2">
                            <FiChevronDown />
                        </div>
                    </a>

                    <a
                        href="#work"
                        className="btn-purple outline d-flex align-items-center mb-2 mb-md-0 mr-4"
                    >
                        <span>My work</span>
                        <div className="icon ml-2">
                            <FiChevronDown />
                        </div>
                    </a>
                </div>
            </div>
            <div className="col-lg-6 d-none d-lg-flex">
                <div className="illustration">
                    {domLoaded ? <Illustration /> : <Loader />}
                </div>
            </div>
        </SectionLayout>
    );
}

export default Hero;
