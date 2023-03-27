import React from "react";

const Image = ({data}) => {
 return <img src={data} alt={data} loading="lazy" />;
};

export default Image;
