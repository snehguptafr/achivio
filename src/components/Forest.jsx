import React, { useState, useEffect } from 'react';
import "./css_files/Forest.css"
import tree from './images/2-treetogrow.png'

const Tree = ({ isVisible, position }) => {
  const treeStyle = {
    transform: `translate(${position.x}px, ${position.y}px)`,
  };

  return <img src={tree} alt='' className={`tree ${isVisible ? 'visible' : 'hidden'}`} style={treeStyle} />;
};

const Forest = ({userRoadmap}) => {
  const roadmap = JSON.parse(localStorage.getItem(userRoadmap)).reverse();
  console.log(roadmap);
  // const totalCheckpoints = roadmap.length;
  const [clearedCheckpoints, setClearedCheckpoints] = useState(roadmap.filter(checkpoint => checkpoint.isCompleted === true).length);
  const [percentage, setPercentage] = useState(0);
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
    roadmap[clearedCheckpoints].isCompleted = true;
    localStorage.setItem(userRoadmap, JSON.stringify(roadmap.reverse()));
    // const completedPercent = ((clearedCheckpoints+1)/roadmap.length);
    // const treesToGib = Math.floor(totalTrees*completedPercent);
    setClearedCheckpoints((prevCount) => prevCount + 1);
  };

  if(clearedCheckpoints/roadmap.length > 0){
    const treesToGib = Math.floor(totalTrees*(clearedCheckpoints/roadmap.length));
    console.log(treesToGib)
  }

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
