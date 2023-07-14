import React from "react";
import Header from "../components/Header";
import './css_files/ShowRoadmaps.css';
import { Link } from "react-router-dom";

export default function ShowRoadmaps() {
  //   const [checkpoints, setCheckpoints] = React.useState([]); //state to store checkpoints
  //   const [initialNodes, setInitialNodes] = React.useState([]); // store flowchart nodes from checkpoints
  //   const [initialEdges, setInitialEdges] = React.useState([]); //store the path/connection of nodes in the flowchart

  const roadmaps = Object.keys(localStorage).map((roadmap) => {
    return(
      <div key={Object.keys(localStorage).indexOf(roadmap)} className="roadmap-card">
        <Link to={`/view/${roadmap}`}><h1>{roadmap}</h1></Link>
      </div>
    )
  })

  return (
    <div className="show-rms-page app">
      <Header />
      <div className="roadmap-card">
        <Link to={'/create'}><h1>+</h1></Link>
      </div>
      {roadmaps}
    </div>
  );
}
