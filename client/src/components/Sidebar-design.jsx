import React, { useState } from 'react';

const ShapePreview = ({ shape, color }) => {
  const previewColor = color || '#8b5cf6';

  const commonPreviewStyles = 'w-8 h-8 flex-shrink-0';

  switch (shape) {
    case 'rectangle':
      return (
        <svg viewBox="0 0 100 100" className={commonPreviewStyles}>
          <rect x="10" y="30" width="80" height="40" fill={previewColor} className="opacity-20 stroke-[2px]" stroke={previewColor} />
        </svg>
      );
    case 'rounded':
      return (
        <svg viewBox="0 0 100 100" className={commonPreviewStyles}>
          <rect x="10" y="30" width="80" height="40" rx="8" fill={previewColor} className="opacity-20 stroke-[2px]" stroke={previewColor} />
        </svg>
      );
    case 'circle':
      return (
        <svg viewBox="0 0 100 100" className={commonPreviewStyles}>
          <circle cx="50" cy="50" r="35" fill={previewColor} className="opacity-20 stroke-[2px]" stroke={previewColor} />
        </svg>
      );
    case 'ellipse':
      return (
        <svg viewBox="0 0 100 100" className={commonPreviewStyles}>
          <ellipse cx="50" cy="50" rx="40" ry="25" fill={previewColor} className="opacity-20 stroke-[2px]" stroke={previewColor} />
        </svg>
      );
    case 'diamond':
      return (
        <svg viewBox="0 0 100 100" className={commonPreviewStyles}>
          <polygon points="50,10 85,50 50,90 15,50" fill={previewColor} className="opacity-20 stroke-[2px]" stroke={previewColor} />
        </svg>
      );
    case 'hexagon':
      return (
        <svg viewBox="0 0 100 100" className={commonPreviewStyles}>
          <polygon points="30,20 70,20 85,50 70,80 30,80 15,50" fill={previewColor} className="opacity-20 stroke-[2px]" stroke={previewColor} />
        </svg>
      );
    case 'oval':
      return (
        <svg viewBox="0 0 100 100" className={commonPreviewStyles}>
          <ellipse cx="50" cy="50" rx="35" ry="25" fill={previewColor} className="opacity-20 stroke-[2px]" stroke={previewColor} />
        </svg>
      );
    case 'parallelogram':
      return (
        <svg viewBox="0 0 100 100" className={commonPreviewStyles}>
          <polygon points="20,30 65,30 80,70 35,70" fill={previewColor} className="opacity-20 stroke-[2px]" stroke={previewColor} />
        </svg>
      );
    case 'trapezoid':
      return (
        <svg viewBox="0 0 100 100" className={commonPreviewStyles}>
          <polygon points="25,25 75,25 85,75 15,75" fill={previewColor} className="opacity-20 stroke-[2px]" stroke={previewColor} />
        </svg>
      );
    case 'cylinder':
      return (
        <svg viewBox="0 0 100 100" className={commonPreviewStyles}>
          <ellipse cx="50" cy="30" rx="30" ry="12" fill={previewColor} className="opacity-20 stroke-[2px]" stroke={previewColor} />
          <rect x="20" y="30" width="60" height="35" fill={previewColor} className="opacity-20" />
          <ellipse cx="50" cy="65" rx="30" ry="12" fill="none" stroke={previewColor} strokeWidth="2" />
        </svg>
      );
    case 'document':
      return (
        <svg viewBox="0 0 100 100" className={commonPreviewStyles}>
          <rect x="20" y="15" width="60" height="70" rx="4" fill={previewColor} className="opacity-20 stroke-[2px]" stroke={previewColor} />
          <line x1="30" y1="35" x2="70" y2="35" stroke={previewColor} strokeWidth="1.5" />
          <line x1="30" y1="48" x2="70" y2="48" stroke={previewColor} strokeWidth="1.5" />
          <line x1="30" y1="61" x2="70" y2="61" stroke={previewColor} strokeWidth="1.5" />
        </svg>
      );
    case 'triangle':
      return (
        <svg viewBox="0 0 100 100" className={commonPreviewStyles}>
          <polygon points="50,15 85,80 15,80" fill={previewColor} className="opacity-20 stroke-[2px]" stroke={previewColor} />
        </svg>
      );
    case 'pentagon':
      return (
        <svg viewBox="0 0 100 100" className={commonPreviewStyles}>
          <polygon points="50,10 80,35 65,75 35,75 20,35" fill={previewColor} className="opacity-20 stroke-[2px]" stroke={previewColor} />
        </svg>
      );
    case 'star':
      return (
        <svg viewBox="0 0 100 100" className={commonPreviewStyles}>
          <polygon points="50,15 60,40 85,40 65,60 75,85 50,65 25,85 35,60 15,40 40,40" fill={previewColor} className="opacity-20 stroke-[2px]" stroke={previewColor} />
        </svg>
      );
    case 'cross':
      return (
        <svg viewBox="0 0 100 100" className={commonPreviewStyles}>
          <rect x="40" y="15" width="20" height="70" fill={previewColor} className="opacity-20" />
          <rect x="15" y="40" width="70" height="20" fill={previewColor} className="opacity-20" />
          <rect x="40" y="15" width="20" height="70" fill="none" stroke={previewColor} strokeWidth="2" />
          <rect x="15" y="40" width="70" height="20" fill="none" stroke={previewColor} strokeWidth="2" />
        </svg>
      );
    case 'arrow-right':
      return (
        <svg viewBox="0 0 100 100" className={commonPreviewStyles}>
          <polygon points="15,40 60,40 60,25 85,50 60,75 60,60 15,60" fill={previewColor} className="opacity-20 stroke-[2px]" stroke={previewColor} />
        </svg>
      );
    case 'arrow-left':
      return (
        <svg viewBox="0 0 100 100" className={commonPreviewStyles}>
          <polygon points="85,40 40,40 40,25 15,50 40,75 40,60 85,60" fill={previewColor} className="opacity-20 stroke-[2px]" stroke={previewColor} />
        </svg>
      );
    case 'arrow-up':
      return (
        <svg viewBox="0 0 100 100" className={commonPreviewStyles}>
          <polygon points="40,85 40,40 25,40 50,15 75,40 60,40 60,85" fill={previewColor} className="opacity-20 stroke-[2px]" stroke={previewColor} />
        </svg>
      );
    case 'arrow-down':
      return (
        <svg viewBox="0 0 100 100" className={commonPreviewStyles}>
          <polygon points="40,15 40,60 25,60 50,85 75,60 60,60 60,15" fill={previewColor} className="opacity-20 stroke-[2px]" stroke={previewColor} />
        </svg>
      );
    case 'actor':
      return (
        <svg viewBox="0 0 100 100" className={commonPreviewStyles}>
          <circle cx="50" cy="28" r="12" fill={previewColor} className="opacity-20 stroke-[2px]" stroke={previewColor} />
          <path d="M20 75 Q20 55 35 50 Q50 48 50 48 Q50 48 65 50 Q80 55 80 75" fill={previewColor} className="opacity-20 stroke-[2px]" stroke={previewColor} />
        </svg>
      );
    case 'cloud':
      return (
        <svg viewBox="0 0 100 100" className={commonPreviewStyles}>
          <path d="M 20 60 Q 15 60 15 55 Q 15 48 20 45 Q 18 38 26 36 Q 28 30 38 30 Q 45 26 52 30 Q 62 28 68 36 Q 75 38 75 45 Q 75 48 72 52 Q 80 55 80 62 Q 80 70 70 70 L 20 70" fill={previewColor} className="opacity-20 stroke-[2px]" stroke={previewColor} />
        </svg>
      );
    default:
      return <div className={`${commonPreviewStyles} bg-slate-200 rounded`} />;
  }
};

const SHAPES = [
  // Standard shapes
  { id: 'rectangle', label: 'Rectangle', group: 'Standard' },
  { id: 'rounded', label: 'Rounded Rectangle', group: 'Standard' },
  { id: 'circle', label: 'Circle', group: 'Standard' },
  { id: 'ellipse', label: 'Ellipse', group: 'Standard' },
  // Flowchart shapes
  { id: 'diamond', label: 'Decision / Diamond', group: 'Flowchart' },
  { id: 'hexagon', label: 'Hexagon', group: 'Flowchart' },
  { id: 'oval', label: 'Oval (Process)', group: 'Flowchart' },
  { id: 'parallelogram', label: 'Parallelogram (Input/Output)', group: 'Flowchart' },
  { id: 'trapezoid', label: 'Trapezoid', group: 'Flowchart' },
  { id: 'cylinder', label: 'Database / Cylinder', group: 'Flowchart' },
  { id: 'document', label: 'Document', group: 'Flowchart' },
  // Shapes
  { id: 'triangle', label: 'Triangle', group: 'Shapes' },
  { id: 'pentagon', label: 'Pentagon', group: 'Shapes' },
  { id: 'star', label: 'Star', group: 'Shapes' },
  { id: 'cross', label: 'Cross / Plus', group: 'Shapes' },
  // Arrows
  { id: 'arrow-right', label: 'Arrow Right', group: 'Arrows' },
  { id: 'arrow-left', label: 'Arrow Left', group: 'Arrows' },
  { id: 'arrow-up', label: 'Arrow Up', group: 'Arrows' },
  { id: 'arrow-down', label: 'Arrow Down', group: 'Arrows' },
  // Containers
  { id: 'actor', label: 'Actor / Person', group: 'Containers' },
  { id: 'cloud', label: 'Cloud', group: 'Containers' },
];

const COLORS = [
  { hex: '#ef4444', name: 'Red' },
  { hex: '#f97316', name: 'Orange' },
  { hex: '#eab308', name: 'Yellow' },
  { hex: '#22c55e', name: 'Green' },
  { hex: '#3b82f6', name: 'Blue' },
  { hex: '#8b5cf6', name: 'Violet' },
  { hex: '#ec4899', name: 'Pink' },
  { hex: '#0f172a', name: 'Slate' },
];

export default function SidebarDesign({ 
  selectedColor, 
  selectedFillColor,
  selectedStrokeColor,
  selectedStrokeWidth,
  onColorChange, 
  onFillColorChange,
  onStrokeColorChange,
  onStrokeWidthChange,
  onUndo,
  onRedo,
  canUndo,
  canRedo,
}) {
  const [nodeLabel, setNodeLabel] = useState('');

  const onDragStart = (event, shapeId) => {
    const dragData = {
      shape: shapeId,
      fillColor: selectedFillColor,
      strokeColor: selectedStrokeColor,
      strokeWidth: selectedStrokeWidth,
      color: selectedFillColor,
      label: nodeLabel || `New ${shapeId}`,
    };
    event.dataTransfer.setData('application/reactflow', JSON.stringify(dragData));
    event.dataTransfer.effectAllowed = 'move';
  };

  return (
    <aside className="w-72 flex flex-col gap-5 border-r border-violet-200 bg-white p-5 text-slate-700 shadow-sm h-full overflow-y-auto">
      <div>
        <h2 className="text-lg font-bold text-slate-900">Canvas Tool</h2>
        <p className="text-xs text-slate-500">
          Pick a color, drag a shape, then click a node to change its color or double-click to rename it.
        </p>
      </div>

      <div className="flex gap-2">
        <button
          onClick={onUndo}
          disabled={!canUndo}
          className="flex-1 rounded bg-violet-500 px-3 py-2 text-xs font-semibold text-white disabled:bg-slate-300 hover:bg-violet-600 transition"
          title="Undo (Ctrl+Z)"
        >
          ↶ Undo
        </button>
        <button
          onClick={onRedo}
          disabled={!canRedo}
          className="flex-1 rounded bg-violet-500 px-3 py-2 text-xs font-semibold text-white disabled:bg-slate-300 hover:bg-violet-600 transition"
          title="Redo (Ctrl+Y)"
        >
          ↷ Redo
        </button>
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-[11px] font-semibold uppercase tracking-[0.2em] text-violet-600">
          1. Label / Entity Name
        </label>
        <input
          type="text"
          value={nodeLabel}
          onChange={(e) => setNodeLabel(e.target.value)}
          placeholder="e.g. Auth Service, Users"
          className="rounded border border-violet-200 bg-violet-50 px-3 py-2 text-sm text-slate-700 outline-none focus:border-violet-400"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-[11px] font-semibold uppercase tracking-[0.2em] text-violet-600">
          2. Pick a Color
        </label>
        <div className="grid grid-cols-4 gap-2">
          {COLORS.map((color) => (
            <button
              key={color.hex}
              onClick={() => onColorChange(color.hex)}
              style={{ backgroundColor: color.hex }}
              className={`h-8 rounded-md border border-slate-200 transition-transform ${
                selectedColor === color.hex ? 'scale-110 ring-2 ring-violet-400' : 'hover:scale-105'
              }`}
              title={color.name}
            />
          ))}
        </div>
        <label className="flex items-center justify-between rounded border border-violet-200 bg-violet-50 px-3 py-2 text-sm font-medium text-slate-700">
          <span>Custom picker</span>
          <input
            type="color"
            value={selectedColor}
            onChange={(event) => onColorChange(event.target.value)}
            className="h-7 w-10 cursor-pointer rounded border-0 bg-transparent p-0"
          />
        </label>
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-[11px] font-semibold uppercase tracking-[0.2em] text-violet-600">
          Fill Color
        </label>
        <label className="flex items-center justify-between rounded border border-violet-200 bg-violet-50 px-3 py-2 text-sm font-medium text-slate-700">
          <span>Select Fill</span>
          <input
            type="color"
            value={selectedFillColor}
            onChange={(event) => onFillColorChange(event.target.value)}
            className="h-7 w-10 cursor-pointer rounded border-0 bg-transparent p-0"
          />
        </label>
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-[11px] font-semibold uppercase tracking-[0.2em] text-violet-600">
          Stroke Color
        </label>
        <label className="flex items-center justify-between rounded border border-violet-200 bg-violet-50 px-3 py-2 text-sm font-medium text-slate-700">
          <span>Border Color</span>
          <input
            type="color"
            value={selectedStrokeColor}
            onChange={(event) => onStrokeColorChange(event.target.value)}
            className="h-7 w-10 cursor-pointer rounded border-0 bg-transparent p-0"
          />
        </label>
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-[11px] font-semibold uppercase tracking-[0.2em] text-violet-600">
          Stroke Width
        </label>
        <div className="flex gap-2">
          {[1, 3, 5].map((width) => (
            <button
              key={width}
              onClick={() => onStrokeWidthChange(width)}
              className={`flex-1 rounded px-2 py-1 text-xs font-semibold transition ${
                selectedStrokeWidth === width
                  ? 'bg-violet-500 text-white ring-2 ring-violet-300'
                  : 'border border-violet-200 bg-slate-50 text-slate-700 hover:bg-violet-50'
              }`}
            >
              {width === 1 ? 'Slim' : width === 3 ? 'Normal' : 'Thick'}
            </button>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-[11px] font-semibold uppercase tracking-[0.2em] text-violet-600">
          3. Drag Shapes
        </label>
        <div className="grid grid-cols-5 gap-2 overflow-y-auto pr-1 max-h-[60vh]">
          {SHAPES.map((shape) => (
            <div
              key={shape.id}
              draggable
              onDragStart={(event) => onDragStart(event, shape.id)}
              className="flex flex-col items-center justify-center gap-1 rounded-lg border border-violet-200 bg-slate-50 p-2 transition-all hover:border-violet-400 hover:bg-violet-50 cursor-grab active:cursor-grabbing"
              title={shape.label}
            >
              <ShapePreview shape={shape.id} color={selectedColor} />
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
}