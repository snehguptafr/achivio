import React from 'react';
import "./css_files/Overlay.css"
import useWindowSize from 'react-use/lib/useWindowSize'
import Confetti from 'react-confetti'

const Overlay = ({ message, confetti }) => {

  const { width, height } = useWindowSize()

  return (
    <div className="overlay">

      {confetti && <Confetti
        width={width}
        height={height}
      />}

      <h1>{message}</h1>
    </div>
  );
};

export default Overlay;
