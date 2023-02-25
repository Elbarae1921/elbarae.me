import React from 'react';
import { SectionLayout } from './common/SectionLayout';
import { SectionTitle } from './common/SectionTitle';
import { ContactForm } from './common/ContactForm';

export const Contact = () => {
  return (
    <div className="section-padding" id="contact">
      <SectionLayout classes="contact-email">
        <div className="via-email col-12 mt-5 mb-5 p-3 p-md-5">
          <SectionTitle text="Say Hi!" />
          <ContactForm />
        </div>
      </SectionLayout>
    </div>
  );
};
