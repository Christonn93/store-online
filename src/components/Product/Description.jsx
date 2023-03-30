// Importing React
import React from "react";

// Importing MUI
import { Box } from "@mui/material";

/**
 * 
 * @param {data}  
 * @returns Return product description based on data input
 */
const Description = ({ data }) => {
 return (
  <Box>
   <p>{data}</p>
   <p>
    Lorem ipsum dolor sit amet, nec ne delectus signiferumque. Ei pri porro singulis, no quot saperet facilisis sed, no instructior intellegebat usu. Id mei ullum graece oportere, vis at expetendis
    signiferumque, sint volumus mel cu. Quodsi senserit aliquando ne pri, vim gubergren percipitur ei. (added this to fill out the page a bit more so the design would work good)
   </p>
  </Box>
 );
};

export default Description;
