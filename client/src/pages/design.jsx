import React, { useState, useCallback, useEffect } from 'react';
import {
  ReactFlow,
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';

import Sidebar from '../components/Sidebar-design';
import ShapeNode from '../components/ShapeNode';

const initialNodes = [];
const initialEdges = [];

let id = 0;
const getUniqueId = () => `node_${id++}`;

export default function DesignerCanvas() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const [reactFlowInstance, setReactFlowInstance] = useState(null);
  const [selectedColor, setSelectedColor] = useState('#8b5cf6');
  const [selectedNodeId, setSelectedNodeId] = useState(null);
  const [history, setHistory] = useState([{ nodes: initialNodes, edges: initialEdges }]);
  const [historyIndex, setHistoryIndex] = useState(0);
  const [selectedFillColor, setSelectedFillColor] = useState('#8b5cf6');
  const [selectedStrokeColor, setSelectedStrokeColor] = useState('#8b5cf6');
  const [selectedStrokeWidth, setSelectedStrokeWidth] = useState(3);

  const addToHistory = useCallback((newNodes, newEdges) => {
    setHistory((prevHistory) => {
      const newHistory = prevHistory.slice(0, historyIndex + 1);
      newHistory.push({ nodes: newNodes, edges: newEdges });
      return newHistory;
    });
    setHistoryIndex((prev) => prev + 1);
  }, [historyIndex]);

  const undo = useCallback(() => {
    if (historyIndex > 0) {
      const newIndex = historyIndex - 1;
      setHistoryIndex(newIndex);
      setNodes(history[newIndex].nodes);
      setEdges(history[newIndex].edges);
    }
  }, [historyIndex, history, setNodes, setEdges]);

  const redo = useCallback(() => {
    if (historyIndex < history.length - 1) {
      const newIndex = historyIndex + 1;
      setHistoryIndex(newIndex);
      setNodes(history[newIndex].nodes);
      setEdges(history[newIndex].edges);
    }
  }, [historyIndex, history, setNodes, setEdges]);

  const onConnect = useCallback(
    (params) => {
      setEdges((eds) => {
        const newEdges = addEdge({ ...params, animated: true }, eds);
        addToHistory(nodes, newEdges);
        return newEdges;
      });
    },
    [setEdges, addToHistory, nodes]
  );

  const onDragOver = useCallback((event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'move';
  }, []);

  const updateNodeData = useCallback(
    (nodeId, updates) => {
      setNodes((nds) =>
        nds.map((node) => (node.id === nodeId ? { ...node, data: { ...node.data, ...updates } } : node))
      );
    },
    [setNodes]
  );

  const onDrop = useCallback(
    (event) => {
      event.preventDefault();

      if (!reactFlowInstance) return;

      const rawData = event.dataTransfer.getData('application/reactflow');
      if (!rawData) return;

      const { shape, color } = JSON.parse(rawData);

      const position = reactFlowInstance.screenToFlowPosition({
        x: event.clientX,
        y: event.clientY,
      });

      const newNode = {
        id: getUniqueId(),
        type: 'shapeNode',
        position,
        data: {
          shape,
          fillColor: selectedFillColor || color || selectedColor,
          strokeColor: selectedStrokeColor || color || selectedColor,
          strokeWidth: selectedStrokeWidth,
          label: '',
          editing: true,
          fontSize: 10,
          fontWeight: 'normal',
          fontStyle: 'normal',
          textDecoration: 'none',
          textAlign: 'center',
          fontColor: '#111827',
        },
      };

      setNodes((nds) => {
        const updated = nds.concat(newNode);
        addToHistory(updated, edges);
        return updated;
      });
    },
    [reactFlowInstance, selectedColor, selectedFillColor, selectedStrokeColor, selectedStrokeWidth, setNodes, edges, addToHistory]
  );

  const handleColorChange = useCallback(
    (color) => {
      setSelectedColor(color);
      setSelectedFillColor(color);
      if (selectedNodeId) {
        updateNodeData(selectedNodeId, { fillColor: color });
      }
    },
    [selectedNodeId, updateNodeData]
  );

  const handleFillColorChange = useCallback(
    (color) => {
      setSelectedFillColor(color);
      if (selectedNodeId) {
        updateNodeData(selectedNodeId, { fillColor: color });
      }
    },
    [selectedNodeId, updateNodeData]
  );

  const handleStrokeColorChange = useCallback(
    (color) => {
      setSelectedStrokeColor(color);
      if (selectedNodeId) {
        updateNodeData(selectedNodeId, { strokeColor: color });
      }
    },
    [selectedNodeId, updateNodeData]
  );

  const handleStrokeWidthChange = useCallback(
    (width) => {
      setSelectedStrokeWidth(width);
      if (selectedNodeId) {
        updateNodeData(selectedNodeId, { strokeWidth: width });
      }
    },
    [selectedNodeId, updateNodeData]
  );

  const handleDeleteNode = useCallback(
    (nodeId) => {
      setNodes((nds) => {
        const updated = nds.filter((node) => node.id !== nodeId);
        setEdges((eds) => {
          const newEdges = eds.filter((edge) => edge.source !== nodeId && edge.target !== nodeId);
          addToHistory(updated, newEdges);
          return newEdges;
        });
        return updated;
      });
      if (selectedNodeId === nodeId) {
        setSelectedNodeId(null);
      }
    },
    [selectedNodeId, setEdges, setNodes, addToHistory]
  );

  const handleLabelChange = useCallback(
    (nodeId, label) => {
      updateNodeData(nodeId, { label, editing: false });
      setNodes((nds) => {
        addToHistory(nds, edges);
        return nds;
      });
    },
    [updateNodeData, edges, setNodes, addToHistory]
  );

  useEffect(() => {
    const handleKeyDown = (event) => {
      const target = event.target;
      const isTypingInInput = target && (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA');

      if (event.ctrlKey || event.metaKey) {
        if (event.key === 'z' && !isTypingInInput) {
          event.preventDefault();
          undo();
          return;
        }
        if ((event.key === 'y' || (event.shiftKey && event.key === 'Z')) && !isTypingInInput) {
          event.preventDefault();
          redo();
          return;
        }
      }

      if ((event.key === 'Delete' || event.key === 'Backspace') && selectedNodeId && !isTypingInInput) {
        event.preventDefault();
        handleDeleteNode(selectedNodeId);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleDeleteNode, selectedNodeId, undo, redo]);

  const nodeTypes = {
    shapeNode: (props) => (
      <ShapeNode
        {...props}
        onDeleteNode={handleDeleteNode}
        onLabelChange={handleLabelChange}
        onUpdateNodeData={updateNodeData}
      />
    ),
  };

  return (
    <div className="flex h-screen w-screen overflow-hidden bg-[#f8f5ff] text-slate-800">
      <Sidebar
        selectedColor={selectedColor}
        selectedFillColor={selectedFillColor}
        selectedStrokeColor={selectedStrokeColor}
        selectedStrokeWidth={selectedStrokeWidth}
        onColorChange={handleColorChange}
        onFillColorChange={handleFillColorChange}
        onStrokeColorChange={handleStrokeColorChange}
        onStrokeWidthChange={handleStrokeWidthChange}
        onUndo={undo}
        onRedo={redo}
        canUndo={historyIndex > 0}
        canRedo={historyIndex < history.length - 1}
      />
      <div className="flex-1 h-full relative bg-[#faf7ff]">
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          onInit={setReactFlowInstance}
          onDrop={onDrop}
          onDragOver={onDragOver}
          onNodeClick={(_, node) => setSelectedNodeId(node.id)}
          onPaneClick={() => {
            setSelectedNodeId(null);
            setNodes((nds) =>
              nds.map((node) => ({
                ...node,
                data: { ...node.data, editing: false },
              }))
            );
          }}
          nodeTypes={nodeTypes}
          colorMode="light"
          fitView
          proOptions={{ hideAttribution: true }}
        >
          <Controls />
          <MiniMap
            style={{ background: '#ffffff', border: '1px solid #e9d5ff' }}
            nodeColor={(node) => node.data?.color || '#8b5cf6'}
          />
          <Background color="#64748b" gap={16} size={1} />
        </ReactFlow>
      </div>
    </div>
  );
}