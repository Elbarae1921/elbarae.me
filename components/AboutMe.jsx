import React from "react";
import SectionLayout from "./common/SectionLayout";
import SectionTitle from "./common/SectionTitle";
import { FiBox } from "react-icons/fi";
import Loader from "./common/Loader";

function AboutMe({ domLoaded }) {
    return (
        <SectionLayout classes="about section-padding mb-5" id="about">
            <div className="w-100 col-md-6">
                {!domLoaded ? (
                    <Loader />
                ) : (
                    // eslint-disable-next-line
                    <img
                        draggable="false"
                        className="w-100"
                        src="/images/computerillustration.png"
                        alt="Elbarae Rguig computer illustration"
                    />
                )}
            </div>
            <div className="col-md-6 my-auto pl-5">
                <SectionTitle text="More about me" />
                <div className="about-body ml-lg-4 pl-lg-3 pb-5">
                    <p>
                        I&quot;m currently a Full-stack developer (mostly Flutter and some Ops) at
                        &nbsp;<a href="https://bewizyu.com/" target="_blank" rel="noreferrer">Bewizyu</a>.
                        I love javascript and I love using it to build wonderful things.<br/>
                        Some of the tools I also love to play with:
                    </p>
                    <div className="skills mt-4 d-flex justify-content-between flex-wrap">
                        <div className="skill">
                            <FiBox />
                            <span>PostgreSQL</span>
                        </div>

                        <div className="skill">
                            <FiBox />
                            <span>Typescript</span>
                        </div>

                        <div className="skill">
                            <FiBox />
                            <span>Linux</span>
                        </div>

                        <div className="skill">
                            <FiBox />
                            <span>Docker</span>
                        </div>

                        <div className="skill">
                            <FiBox />
                            <span>AWS</span>
                        </div>

                        <div className="skill">
                            <FiBox />
                            <span>React &amp; NextJS</span>
                        </div>

                        <div className="skill">
                            <FiBox />
                            <span>NodeJS</span>
                        </div>

                        <div className="skill">
                            <FiBox />
                            <span>Flutter</span>
                        </div>
                    </div>
                </div>
            </div>
        </SectionLayout>
    );
}

export default AboutMe;
