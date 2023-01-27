import { NodeProps, Handle, Position } from "reactflow";
import { NodeResizer } from "@reactflow/node-resizer";

import "@reactflow/node-resizer/dist/style.css";

export function Square(props: NodeProps) {
  return (
    <div className="bg-violet-500 rounded w-full h-full min-w-[200px] min-h-[200px]">
      <NodeResizer
        minHeight={200}
        minWidth={200}
        isVisible={props.selected}
        lineClassName="border-blue-400"
        handleClassName="h-3 w-3 bg-white border-2 rounded border-blue-400"
      />
      <Handle
        id="right"
        type="source"
        position={Position.Right}
        className="-right-4 w-3 h-3 bg-blue-400/80"
      />
      <Handle
        id="left"
        type="source"
        position={Position.Left}
        className="-left-4 w-3 h-3 bg-blue-400/80"
      />
      <Handle
        id="top"
        type="source"
        position={Position.Top}
        className="-top-4 w-3 h-3 bg-blue-400/80"
      />
      <Handle
        id="Bottom"
        type="source"
        position={Position.Bottom}
        className="-bottom-4 w-3 h-3 bg-blue-400/80"
      />
    </div>
  );
}
