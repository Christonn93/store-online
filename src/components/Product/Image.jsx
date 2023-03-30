// Importing React
import React from "react";

/**
 * 
 * @param {data}  
 * @returns Image for display
 */
const Image = ({data}) => {
 return <img src={data} alt={data} loading="lazy" />;
};

export default Image;
