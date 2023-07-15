import React, { useState } from "react";
import "./css_files/Forest.css";
import tree from "./images/2-treetogrow.png";
import { useNavigate } from "react-router-dom";
import Overlay from "../components/Overlay";

const Tree = ({ isVisible, position }) => {
  const treeStyle = {
    transform: `translate(${position.x}px, ${position.y}px)`,
  };

  return (
    <img
      src={tree}
      alt=""
      className={`tree ${isVisible ? "visible" : "hidden"}`}
      style={treeStyle}
    />
  );
};

const Forest = ({ userRoadmap }) => {
  const [showOverlay, setShowOverlay] = React.useState(false);
  const navigate = useNavigate();
  const messages = [
    "YAAY!! You did it!",
    "WOOHOO!! Look at you achieving your goals!!",
    "You're so amazing! You did it!!",
    "Way to go champ!! Keep it up!",
  ];
  const randIndex = Math.floor(Math.random() * messages.length);

  const roadmap = JSON.parse(localStorage.getItem(userRoadmap)).reverse();
  console.log(roadmap);
  // const totalCheckpoints = roadmap.length;
  const [clearedCheckpoints, setClearedCheckpoints] = useState(
    roadmap.filter((checkpoint) => checkpoint.isCompleted === true).length
  );
  const totalTrees = 50;

  const getRandomPosition = () => {
    const maxX = 0; // Maximum x-coordinate within the specified area
    const maxY = 50; // Maximum y-coordinate within the specified area
    const position = {
      x: Math.floor(Math.random() * maxX),
      y: Math.floor(Math.random() * maxY),
    };
    return position;
  };

  const handleCheckpointCompletion = () => {
    roadmap[clearedCheckpoints].isCompleted = true;
    localStorage.setItem(userRoadmap, JSON.stringify(roadmap.reverse()));
    if (clearedCheckpoints + 1 === roadmap.length) {
      setShowOverlay(true);
      setTimeout(() => window.location.reload(false), 5000);
    } else {
      window.location.reload(false);
    }
    setClearedCheckpoints((prevCount) => prevCount + 1);
  };
  const trees = [];
  if (clearedCheckpoints / roadmap.length > 0) {
    const treesToGib = Math.floor(
      totalTrees * (clearedCheckpoints / roadmap.length)
    );
    console.log(treesToGib);
    for (let i = 0; i < treesToGib; i++) {
      trees.push(
        <Tree key={i} isVisible={true} position={getRandomPosition()} />
      );
    }
  }

  // React.useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setShowOverlay(false);
  //   }, 5000); // Set the duration in milliseconds (e.g., 5000 = 5 seconds)

  //   return () => {
  //     clearTimeout(timer);
  //   };
  // }, []);

  return (
    <>
      <div className="forest">
        <button
          className={
            clearedCheckpoints === roadmap.length ? "discoBtn" : "contactBtn"
          }
          onClick={
            clearedCheckpoints === roadmap.length
              ? () => navigate(`/certificate/${userRoadmap}`)
              : handleCheckpointCompletion
          }
        >
          {clearedCheckpoints === roadmap.length
            ? "Get Certificate!"
            : "Complete Checkpoint"}
        </button>
        <div className="tree-container">
          {/* {Array.from({ length: totalTrees }, (v, i) => (
          <Tree key={i} isVisible={i < clearedCheckpoints} position={getRandomPosition()} />
        ))} */}
          {trees}
        </div>
        {showOverlay && <Overlay message={messages[randIndex]} />}
      </div>
    </>
  );
};

export default Forest;
