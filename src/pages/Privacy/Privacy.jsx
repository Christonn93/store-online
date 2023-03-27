import { Container, Paper } from "@mui/material";
import React from "react";

const Privacy = () => {
 return (
  <Container>
   <Paper elevation={0} sx={{padding: "10px"}}>
    <h1>Privacy Policy</h1>
    <p>
     This Privacy Policy explains how we collect, use, and disclose information that we receive through our website and mobile application (collectively, the "Service"). By using the Service, you
     consent to the collection, use, and disclosure of your information as described in this Privacy Policy.
    </p>
    <h2>Information We Collect</h2>
    <p>We collect information from businesses and students that use our Service. The information we collect may include:</p>
    <ul>
     <li>Personal information, such as name, email address, and contact information.</li>
     <li>Profile information, such as a resume or CV, education and work experience.</li>
     <li>Information about the job or project you are interested in or applying for.</li>
     <li>Information about your skills and qualifications.</li>
     <li>Information about your use of the Service, such as your IP address, browser type, and device type</li>
    </ul>
    <p>We use this information to:</p>
    <ul>
     <li>Provide and improve the Service.</li>
     <li>Communicate with you about the Service, including job or project opportunities.</li>
     <li>Facilitate connections between businesses and students.</li>
    </ul>
    <h2>Disclosure of Information</h2>
    <p>We may disclose your information to third parties in the following circumstances:</p>
    <ul>
     <li>To comply with legal obligations, such as a subpoena or court order.</li>
     <li>To enforce our terms of service or other agreements.</li>
     <li>To protect the rights, property, or safety of Store Online, our users, or the public.</li>
    </ul>
    <h2>Security</h2>
    <p>
     We take reasonable precautions to protect your information from loss, theft, misuse, and unauthorized access, disclosure, alteration, and destruction. However, no method of transmission over the
     internet, or method of electronic storage, is 100% secure. Therefore, we cannot guarantee the absolute security of your information.
    </p>
    <h2>Changes to This Privacy Policy</h2>
    <p>
     We may update this Privacy Policy from time to time. If we make changes to the Privacy Policy, we will notify you by revising the "Last Updated" date at the top of this page and, in some cases,
     we may provide you with additional notice (such as adding a statement to our homepage or sending you an email notification). We encourage you to review the Privacy Policy whenever you access the
     Service to stay informed about our information practices and the ways you can help protect your privacy.
    </p>

    <h2>Contact Us</h2>
    <p>If you have any questions or concerns about this Privacy Policy or our information practices, please contact us by email at Store Online.</p>
    <p><small><i>Effective date:21/03/2023</i></small></p>
   </Paper>
  </Container>
 );
};

export default Privacy;
