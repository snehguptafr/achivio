import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import ReactFlow, { Controls, Background } from 'reactflow';
import Header from "../components/Header";
import Forest from "../components/Forest";
import 'reactflow/dist/style.css';
import './css_files/ViewRoadmap.css';
import NotFound from "./NotFound";

export default function ViewRoadmap() {
  const { roadMap } = useParams();
  const [initialNodes, setInitialNodes] = React.useState([]); // store flowchart nodes from checkpoints
  const [initialEdges, setInitialEdges] = React.useState([]); //store the path/connection of nodes in the flowchart
  const navigate = useNavigate;  

  useEffect(()=>{
    function generateRoadmap(roadmap) {
      console.log("generator ran")
      //behold! the roadmap nodes and edges generator
      const roadmapNodes = JSON.parse(localStorage.getItem(roadmap)); // gets  the roadmap from localStorage
      const edges = []; // empty array, to be used later to store edges
      const nodes = roadmapNodes.map((roadmapNode) => {
        //maps the roadmap checkpoints fetched from localStorage to nodes array
        return {
          //syntax for storing nodes in Reactflow
          type:
            roadmapNodes.indexOf(roadmapNode) === 0
              ? "input"
              : roadmapNodes.indexOf(roadmapNode) === roadmapNodes.length - 1
              ? "output"
              : "default",
          id: roadmapNode.id,
          position: {
            x: 100 * (roadmapNodes.indexOf(roadmapNode) % 2),
            y: 150 * roadmapNodes.indexOf(roadmapNode),
          },
          data: { label: <span style={roadmapNode.isCompleted ? {textDecoration: 'line-through'}: {textDecoration: 'none'}}>{roadmapNode.value}</span> },
        };
      });
  
      for (let i = 1; i < nodes.length; i++) {
        //setting edges
        const start = nodes[i - 1].id; //denotes start of the edge
        const end = nodes[i].id; //denotes end of the edge
        edges.push({ id: `e${start}-${end}`, source: start, target: end }); //pushes the each node connection to edges array(syntax as per Reactflow to store edges)
      }
      setInitialNodes(nodes); //sets the state with nodes for flowchart
      setInitialEdges(edges); //sets the state with edges for flowchart
    }
  if(localStorage.getItem(roadMap)){
    generateRoadmap(roadMap);
  }
  }, [roadMap])

  return (
    <div className="app">
      <Header />
      {localStorage.getItem(roadMap) ? <NotFound /> :
      <section id="flow-tree-yes">
        {initialEdges.length>0?(
          <>
          <div id="visible-rm" style={{ width: "500px", height: "80vh" }}>
            <ReactFlow
              defaultNodes={initialNodes}
              defaultEdges={initialEdges}
              fitView
              proOptions={{ hideAttribution: true }}
            >
              <Controls />
              <Background variant="dots" gap={30} size={2} />
            </ReactFlow>
          </div>

          <div>
            <Forest userRoadmap={roadMap} />
          </div>

          {/* <Overlay /> */}
          </>

        ):(
          <h1>Loading...</h1>
        )}

      </section>}
    </div>
  );
}
