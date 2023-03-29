// Importing React
import React, { useState } from "react";

// Importing MUI
import { Button, TextField, Box, Container, InputAdornment, Checkbox } from "@mui/material";

// Importing MUI Icons
import AccountCircle from "@mui/icons-material/AccountCircle";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import TitleIcon from "@mui/icons-material/Title";
import SubjectIcon from "@mui/icons-material/Subject";

// Importing formik
import { Formik } from "formik";
import * as yup from "yup";

// TODO
/**
 * 
 * @param {*} param0 
 * @returns 
 */
const ContactForm = ({formSubmit}) => {
 const [isChecked, setIsChecked] = useState(false);


 const initialValues = {
  name: "",
  phone: "",
  email: "",
  subject: "",
  message: "",
 };

 // eslint-disable-next-line
 const emailRegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

 const phoneRegExp = /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

 const checkoutSchema = yup.object().shape({
  name: yup.string().min(3, "must be at least 3 characters long").required("Your name is missing"),
  phone: yup.string().min(3, "must be at least 3 characters long").matches(phoneRegExp, "Phone number is not valid").required("Please add your number"),
  email: yup.string().min(3, "must be at least 3 characters long").matches(emailRegExp, "The email must be a valid email").email("invalid email").required("required"),
  subject: yup.string().min(3, "must be at least 3 characters long").required("Please add a subject title"),
  message: yup.string().min(3, "must be at least 3 characters long").required("Please add a message"),
 });

 return (
  <Container align="center">
   <Box sx={{ padding: 2 }}>
    <Formik onSubmit={formSubmit} initialValues={initialValues} validationSchema={checkoutSchema}>
     {({ values, errors, touched, handleBlur, handleSubmit, handleChange }) => (
      <form onSubmit={handleSubmit}>
       <Box>
        <TextField
         label="Name"
         variant="outlined"
         fullWidth
         margin="normal"
         type="text"
         onBlur={handleBlur}
         onChange={handleChange}
         value={values.name}
         name="name"
         error={!!touched.name && !!errors.name}
         helperText={touched.name && errors.name}
         InputProps={{
          startAdornment: (
           <InputAdornment position="start">
            <AccountCircle />
           </InputAdornment>
          ),
         }}
        />
        <TextField
         variant="outlined"
         fullWidth
         margin="normal"
         type="tel"
         label="Phone"
         onBlur={handleBlur}
         onChange={handleChange}
         value={values.phone}
         name="phone"
         error={!!touched.phone && !!errors.phone}
         helperText={touched.phone && errors.phone}
         InputProps={{
          startAdornment: (
           <InputAdornment position="start">
            <LocalPhoneIcon />
           </InputAdornment>
          ),
         }}
        />
        <TextField
         variant="outlined"
         fullWidth
         margin="normal"
         type="email"
         label="Email"
         onBlur={handleBlur}
         onChange={handleChange}
         value={values.email}
         name="email"
         error={!!touched.email && !!errors.email}
         helperText={touched.email && errors.email}
         InputProps={{
          startAdornment: (
           <InputAdornment position="start">
            <AlternateEmailIcon />
           </InputAdornment>
          ),
         }}
        />
        <TextField
         variant="outlined"
         fullWidth
         margin="normal"
         type="text"
         label="Subject"
         onBlur={handleBlur}
         onChange={handleChange}
         value={values.subject}
         name="subject"
         error={!!touched.subject && !!errors.subject}
         helperText={touched.subject && errors.subject}
         InputProps={{
          startAdornment: (
           <InputAdornment position="start">
            <TitleIcon />
           </InputAdornment>
          ),
         }}
        />
        <TextField
         variant="outlined"
         fullWidth
         margin="normal"
         type="text"
         label="Message"
         multiline
         rows={4}
         onBlur={handleBlur}
         onChange={handleChange}
         value={values.message}
         name="message"
         error={!!touched.message && !!errors.message}
         helperText={touched.message && errors.message}
         InputProps={{
          startAdornment: (
           <InputAdornment position="start">
            <SubjectIcon />
           </InputAdornment>
          ),
         }}
        />
        <Box display="flex" justifyContent="end" mt="20px">
         <Checkbox checked={isChecked} onChange={(e) => setIsChecked(e.target.checked)} />
         <p>By sending this form I agree til the terms of use</p>
        </Box>
        <Button type="submit" color="secondary" variant="contained" disabled={!isChecked}>
         Send
        </Button>
       </Box>
      </form>
     )}
    </Formik>
   </Box>
  </Container>
 );
};

export default ContactForm;
