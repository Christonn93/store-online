// Importing react
import React, { useState } from "react";
import SuccessFeedback from "../../components/Feedback/SuccessFeedback";

// Importing component
import ContactForm from "../../components/Form/ContactForm";
import { updateHead } from "../../js/headUpdater";
import BasicBreadcrumbs from "../../components/Breadcrumbs/BreadCrumb";

const Contact = () => {
 const [formSubmitted, setFormSubmitted] = useState(false);

 const formSubmit = (values) => {
  console.log(values);
  setFormSubmitted(true);
 };

 updateHead("Contact page", "Store Online home page. We offer a range of items that will suite your needs");
 return (
  <>
   <BasicBreadcrumbs title={"contact"} page={"Contact"} description={"contact"} />
   <h1>Contact us</h1>
   {!formSubmitted ? (
    <ContactForm formSubmit={formSubmit} />
   ) : (
    <SuccessFeedback title="Success" body="Thanks for your message. We will get back to you as soon as we can." link="/" variant="outlined" />
   )}
  </>
 );
};

export default Contact;
