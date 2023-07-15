import React from 'react';
import "./css_files/Overlay.css"
const Overlay = ({ message }) => {
  return (
    <div className="overlay">
      <h1>{message}</h1>
    </div>
  );
};

export default Overlay;
