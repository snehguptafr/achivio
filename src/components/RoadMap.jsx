import React, { useCallback } from 'react';
import ReactFlow, {
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
} from 'reactflow';
import 'reactflow/dist/style.css';

const initialNodes = [
  { id: '1', position: { x: 80, y: 80 }, data: { label: 'Sign up' }, type: 'input' },
  { id: '2', position: { x: 90, y: 180 }, data: { label: 'Create Roadmap' } },
  { id: '3', position: { x: 100, y: 280 }, data: { label: 'Visualize the Roadmap' } },
  { id: '4', position: { x: 110, y: 380 }, data: { label: 'Track Progress' }, sourcePosition: 'right' },
  { id: '5', position: { x: 350, y: 400 }, data: { label: 'Earn Rewards' }, targetPosition: 'left', sourcePosition: 'top' },
  { id: '6', position: { x: 450, y: 300 }, data: { label: 'Obtain Certificate' }, targetPosition: 'bottom', sourcePosition: 'top' },
  { id: '7', position: { x: 460, y: 200 }, data: { label: 'Connect and Share' }, targetPosition: 'bottom', sourcePosition: 'top' },
  { id: '8', position: { x: 470, y: 100 }, data: { label: '#ACHIVIO!' }, type: 'output', targetPosition: 'bottom' },
].reverse();

const initialEdges = [{ id: 'e1-2', source: '1', target: '2' }, { id: 'e2-3', source: '2', target: '3' },
{ id: 'e3-4', source: '3', target: '4' }, { id: 'e4-5', source: '4', target: '5' }, { id: 'e5-6', source: '5', target: '6' },
{ id: 'e6-7', source: '6', target: '7' }, { id: 'e7-8', source: '7', target: '8' }];

export default function RoadMap() {
  // eslint-disable-next-line
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = useCallback((params) => setEdges((eds) => addEdge(params, eds)), [setEdges]);

  return (
    <div className='static-rm' style={{ width: '50vw', height: '70vh' }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        fitView
      >
        <Controls />
        <Background variant="dots" gap={12} size={1} />
      </ReactFlow>
    </div>
  );
}