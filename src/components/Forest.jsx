import React, { useState } from 'react';
import './Forest.css';
import tree from '../images/2-treetogrow.png'

const Tree = ({ isVisible, position }) => {
  const treeStyle = {
    transform: `translate(${position.x}px, ${position.y}px)`,
  };

  return <img src={tree} alt='' className={`tree ${isVisible ? 'visible' : 'hidden'}`} style={treeStyle} />;
};

const Forest = () => {
  const [clearedCheckpoints, setClearedCheckpoints] = useState(0);
  const totalTrees = 25;

  const getRandomPosition = () => {
    const maxX = 100; // Maximum x-coordinate within the specified area
    const maxY = 100; // Maximum y-coordinate within the specified area
    const position = {
      x: Math.floor(Math.random() * maxX),
      y: Math.floor(Math.random() * maxY),
    };
    return position;
  };

  const handleCheckpointCompletion = () => {
    setClearedCheckpoints((prevCount) => prevCount + 1);
  };

  return (
    <div className="forest">
      <div className="tree-container">
        {Array.from({ length: totalTrees }, (v, i) => (
          <Tree key={i} isVisible={i < clearedCheckpoints} position={getRandomPosition()} />
        ))}
      </div>
      <button onClick={handleCheckpointCompletion}>Complete Checkpoint</button>
    </div>
  );
};

export default Forest;
