import React from "react";
import SectionLayout from "./common/SectionLayout";
import SectionTitle from "./common/SectionTitle";
import ContactForm from "./common/ContactForm";
// import ViaFiverr from "./Fiverr";

function Index() {
    return (
        <div className="section-padding" id="contact">
            {/* <SectionLayout classes="contact-fiverr">
                <div className="via-fiverr col-12 py-5 d-flex flex-column align-items-center mb-5">
                    <SectionTitle text="Find me on fiverr" classes="white" />
                    <ViaFiverr />
                </div>
            </SectionLayout> */}
            <SectionLayout classes="contact-email">
                <div className="via-email col-12 mt-5 mb-5 p-3 p-md-5">
                    <SectionTitle text="Say Hi!" />
                    <ContactForm />
                </div>
            </SectionLayout>
        </div>
    );
}

export default Index;
