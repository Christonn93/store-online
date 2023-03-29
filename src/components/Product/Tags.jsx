// Importing React
import React from "react";

// TODO
/**
 * 
 * @param {*} tags 
 * @returns 
 */
const Tags = (tags) => {
 const tag = tags.join(", ");

 return <p>Category: {tag}</p>;
};

export default Tags;
