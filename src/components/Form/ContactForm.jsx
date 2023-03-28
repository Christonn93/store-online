// Importing react
import React from "react";

// Importing MUI
import { Button, TextField, Box, Container, useMediaQuery, useTheme, Paper } from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import Checkbox from "@mui/material/Checkbox";

// Importing icons
import AccountCircle from "@mui/icons-material/AccountCircle";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import TitleIcon from "@mui/icons-material/Title";
import SubjectIcon from "@mui/icons-material/Subject";

// Importing Dialog

// Importing formik
import { Formik } from "formik";
import * as yup from "yup";

const ContactForm = () => {
 const device = useTheme();
 const isMobile = useMediaQuery(device.breakpoints.down("md"));

 const formSubmit = (values) => {
  console.log(values);
 };

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
       <Box
        display="grid"
        gap="30px"
        gridTemplateColumns={"repeat(4, minmax(0, 1fr))"}
        sx={{
         "& > div": { gridColumn: isMobile ? undefined : "span 2" },
        }}
       >
        <TextField
         variant="filled"
         type="text"
         label="Name"
         onBlur={handleBlur}
         onChange={handleChange}
         value={values.name}
         name="name"
         error={!!touched.name && !!errors.name}
         helperText={touched.name && errors.name}
         sx={{ gridColumn: "span 4" }}
         InputProps={{
          startAdornment: (
           <InputAdornment position="start">
            <AccountCircle />
           </InputAdornment>
          ),
         }}
        />
        <TextField
         variant="filled"
         type="tel"
         label="phone"
         onBlur={handleBlur}
         onChange={handleChange}
         value={values.phone}
         name="phone"
         error={!!touched.phone && !!errors.phone}
         helperText={touched.phone && errors.phone}
         sx={{ gridColumn: "span 4" }}
         InputProps={{
          startAdornment: (
           <InputAdornment position="start">
            <LocalPhoneIcon />
           </InputAdornment>
          ),
         }}
        />
        <TextField
         variant="filled"
         type="email"
         label="Email"
         onBlur={handleBlur}
         onChange={handleChange}
         value={values.email}
         name="email"
         error={!!touched.email && !!errors.email}
         helperText={touched.email && errors.email}
         sx={{ gridColumn: "span 4" }}
         InputProps={{
          startAdornment: (
           <InputAdornment position="start">
            <AlternateEmailIcon />
           </InputAdornment>
          ),
         }}
        />
        <TextField
         variant="filled"
         type="text"
         label="Subject"
         onBlur={handleBlur}
         onChange={handleChange}
         value={values.subject}
         name="subject"
         error={!!touched.subject && !!errors.subject}
         helperText={touched.subject && errors.subject}
         sx={{ gridColumn: "span 4" }}
         InputProps={{
          startAdornment: (
           <InputAdornment position="start">
            <TitleIcon />
           </InputAdornment>
          ),
         }}
        />
        <TextField
         variant="filled"
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
         sx={{ gridColumn: "span 4" }}
         InputProps={{
          startAdornment: (
           <InputAdornment position="start">
            <SubjectIcon />
           </InputAdornment>
          ),
         }}
        />
        <Box display={"flex"} alignItems="center">
         <Checkbox />
         <p>By sending this form I agree til the terms of use</p>
        </Box>
       </Box>
       <Box display="flex" justifyContent="end" mt="20px">
        <Button type="submit" color="secondary" variant="contained">
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
