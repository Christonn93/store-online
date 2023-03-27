import React from "react";

const Tags = (tags) => {
 const tag = tags.join(", ");

 return <p>Category: {tag}</p>;
};

export default Tags;
