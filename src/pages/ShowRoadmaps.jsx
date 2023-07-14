import React from "react";
import Header from "../components/Header";
import './css_files/ShowRoadmaps.css';
import { useNavigate } from "react-router-dom";

export default function ShowRoadmaps() {
  //   const [checkpoints, setCheckpoints] = React.useState([]); //state to store checkpoints
  //   const [initialNodes, setInitialNodes] = React.useState([]); // store flowchart nodes from checkpoints
  //   const [initialEdges, setInitialEdges] = React.useState([]); //store the path/connection of nodes in the flowchart

  const navigate = useNavigate();

  const roadmaps = Object.keys(localStorage).map((roadmap) => {
    return (
      <div onClick={() => navigate(`/view/${roadmap}`)} key={Object.keys(localStorage).indexOf(roadmap)} className="roadmap-card">
        <h1>{roadmap}</h1>
      </div>
    )
  })

  return (
    <div className="show-rms-page app">
      <Header />

      <div className="cards-edit">

        <div onClick={() => navigate(`/create`)} className="roadmap-card">
          <h1><span className="material-symbols-outlined">
            add
          </span></h1>
        </div>
        {roadmaps}

      </div>

    </div>
  );
}
