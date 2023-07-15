import React from 'react';
import "./css_files/Overlay.css"
const OverlayComponent = ({ message }) => {
  return (
    <div className="overlay">
      <h1>{message}</h1>
    </div>
  );
};

export default OverlayComponent;
