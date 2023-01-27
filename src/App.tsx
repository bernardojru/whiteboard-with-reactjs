import ReactFlow, {
  addEdge,
  Background,
  Connection,
  ConnectionMode,
  Controls,
  Node,
  useEdgesState,
  useNodesState,
} from "reactflow";
import { zinc } from "tailwindcss/colors";
import "reactflow/dist/style.css";
import * as Toolbar from '@radix-ui/react-toolbar';

import { Square } from "./components/nodes/Square";
import { useCallback } from "react";
import DefaultEdge from "./components/edges/DefaultEdge";

// reactFlow tem: nodes, Edges

const NODE_TYPES = {
  square: Square,
}; // aceita os componentes na tela

const EDGE_TYPES = {
  default: DefaultEdge,
}

const INITIAL_NODES = [
  // insere os componentes aceitados na tela
  {
    id: crypto.randomUUID(),
    type: "square",
    position: {
      x: 200,
      y: 300,
    },
    data: {}, //nos permite mandar informações do app até os nodes(components)
  },
  {
    id: crypto.randomUUID(),
    type: "square",
    position: {
      x: 1000,
      y: 300,
    },
    data: {}, //nos permite mandar informações do app até os nodes(components)
  },
] satisfies Node[];

export function App() {
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const [nodes, setNodes, onNodesChange] = useNodesState(INITIAL_NODES)

  const onConnect = useCallback((connection: Connection) => {
    return setEdges((edges) => addEdge(connection, edges));
  }, []);

  function addSquareNode() {
    setNodes((nodes) => [
      ...nodes,
      {
        id: crypto.randomUUID(),
        type: 'square',
        position: {
          x: 750,
          y: 250,
        },
        data: {},
      }
    ])
  }

  return (
    <div className="w-screen h-screen">
      <ReactFlow
        nodeTypes={NODE_TYPES}
        edgeTypes={EDGE_TYPES}
        nodes={nodes}
        onNodesChange={onNodesChange}
        edges={edges}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        connectionMode={ConnectionMode.Loose}
        defaultEdgeOptions={{
          type: 'default',
        }}
      >
        <Background gap={12} size={2} color={zinc[200]} />
        <Controls />
      </ReactFlow>

      <Toolbar.Root className="fixed bottom-20 left-1/2 -translate-x-1/2 bg-white rounded-2xl shadow-lg border border-zinc-300 px-8 h-20 w-96 overflow-hidden">
        <Toolbar.Button 
          onClick={addSquareNode}
          className='w-32 h-32 bg-violet-500 mt-6 rounded transition-transform hover:-translate-y-2'
        />
      </Toolbar.Root>
    </div>
  );
}
