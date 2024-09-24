import React from "react";
import pic from '../assets/lvrequest.JPG';

const Lvr = () => {
  const imageStyle = {
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '90%', // Adjust the width as needed
    height: 'auto', // Maintain the aspect ratio
  };

  return (
    <>
      <img src={pic} alt="LV Logo" style={imageStyle} />
    </>
  );
};

export default Lvr;
