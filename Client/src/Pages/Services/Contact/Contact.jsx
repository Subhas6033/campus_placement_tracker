import React from "react";
import ContactHero from "./Components/ContactHero";
import ContactInfo from "./Components/ContactInfo";
import ContactForm from "./Components/ContactForm";
import ContactFAQ from "./Components/ContactFAQ";

const Contact = () => {
  return (
    <main className="bg-paper">
      <ContactHero />
      <ContactInfo />
      <ContactForm />
      <ContactFAQ />
    </main>
  );
};

export default Contact;
