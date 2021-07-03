import React from "react";
import SectionLayout from "./common/SectionLayout";
import SectionTitle from "./common/SectionTitle";
import { FiBox } from "react-icons/fi";
import Loader from "./common/Loader";
import Image from "next/image";

function AboutMe({ domLoaded }) {
    return (
        <SectionLayout classes="about section-padding mb-5" id="about">
            <div className="w-100 col-md-6">
                {!domLoaded ? (
                    <Loader />
                ) : (
                    // eslint-disable-next-line
                    <img 
                        className="w-100"
                        src="/images/computerillustration.png"
                        alt="Elbarae Rguig computer illustration"
                    />
                )}
            </div>
            <div className="col-md-6 my-auto pl-5">
                <SectionTitle text="Get to know me more" />
                <div className="about-body ml-lg-4 pl-lg-3 pb-5">
                    <p>
                        Hey there, my name is <strong>Zakaria Benali</strong>{" "}
                        I&apos;m 23 years old full stack developer and UI/UX
                        designer, with over 3 years of experience, that&apos;s why i
                        make sure you get the best of both worlds. I love
                        creating great things, and I would love to be part of
                        your great thing, Here are some of the technologies I&apos;m
                        very familiar with:
                    </p>
                    <div className="skills mt-4 d-flex justify-content-between flex-wrap">
                        <div className="skill">
                            <FiBox />
                            <span>Html &amp; CSS</span>
                        </div>

                        <div className="skill">
                            <FiBox />
                            <span>PHP &amp; Laravel</span>
                        </div>

                        <div className="skill">
                            <FiBox />
                            <span>Mysql &amp; SQL Server</span>
                        </div>

                        <div className="skill">
                            <FiBox />
                            <span>Javascript &amp; Jquery</span>
                        </div>

                        <div className="skill">
                            <FiBox />
                            <span>React &amp; Redux</span>
                        </div>

                        <div className="skill">
                            <FiBox />
                            <span>UI &amp; UX Design</span>
                        </div>

                        <div className="skill">
                            <FiBox />
                            <span>cPanel &amp; AWS</span>
                        </div>
                    </div>
                </div>
            </div>
        </SectionLayout>
    );
}

export default AboutMe;
