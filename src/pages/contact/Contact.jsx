import React from "react";
import Services from "../../components/customer-services/Services";
import Reusable from "../../components/reusable-hero/Reusable";
import ContactSection from "../../components/contactSection/ContactSection";

const Contact = () => {
  return (
    <div>
      <Reusable title="Contact" link="Contact" />
      <div className="container">
        <ContactSection />
      </div>
      <Services />
    </div>
  );
};

export default Contact;
