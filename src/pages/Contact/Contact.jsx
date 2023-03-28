// Importing react
import React from "react";

// Importing component
import ContactForm from "../../components/Form/ContactForm";
import { updateHead } from "../../js/headUpdater";

const Contact = () => {
 updateHead("Contact page", "Store Online home page. We offer a range of items that will suite your needs");
 return (
  <>
   <h1>Contact us</h1>
   <ContactForm />
  </>
 );
};

export default Contact;
