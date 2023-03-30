// Importing React
import React from "react";


/**
 * 
 * @param {*} tags 
 * @returns Tags to be displayed on product page
 */
const Tags = (tags) => {
 const tag = tags.join(", ");

 return <p>Category: {tag}</p>;
};

export default Tags;
