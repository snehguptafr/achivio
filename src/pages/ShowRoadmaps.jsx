import React from "react";
import Header from "../components/Header";

export default function ShowRoadmaps() {
  //   const [checkpoints, setCheckpoints] = React.useState([]); //state to store checkpoints
  //   const [initialNodes, setInitialNodes] = React.useState([]); // store flowchart nodes from checkpoints
  //   const [initialEdges, setInitialEdges] = React.useState([]); //store the path/connection of nodes in the flowchart

  const roadmaps = Object.keys(localStorage).map((roadmap) => {
    return(
      <div key={Object.keys(localStorage).indexOf(roadmap)} className="roadmap-card">
        <h1>{roadmap}</h1>
      </div>
    )
  })

  return (
    <>
      <Header />
      {roadmaps}
    </>
  );
}
