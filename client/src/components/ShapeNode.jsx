import React, { useEffect, useState } from 'react';
import { Handle, Position } from '@xyflow/react';

const ShapeSvg = ({ shape, fillColor, strokeColor, strokeWidth, label, fontWeight, fontStyle, textDecoration, textAlign, fontSize, fontColor }) => {
  const fill = fillColor || '#8b5cf6';
  const stroke = strokeColor || fillColor || '#8b5cf6';
  const width = strokeWidth || 3;
  const displayLabel = label && label.trim() ? label : 'Enter text';
  const fSize = fontSize || 10;
  const fWeight = fontWeight === 'bold' ? 'bold' : 'normal';
  const fStyle = fontStyle === 'italic' ? 'italic' : 'normal';
  const tDecor = textDecoration === 'underline' ? 'underline' : 'none';

  const commonText = (
    <text x="50" y="48" textAnchor="middle" fill={fontColor || '#111827'} fontSize={fSize} fontWeight={fWeight} fontStyle={fStyle} textDecoration={tDecor} className="font-semibold select-none">
      {displayLabel}
    </text>
  );

  switch (shape) {
    case 'circle':
      return (
        <svg viewBox="0 0 100 100" className="h-24 w-24 drop-shadow-sm">
          <circle cx="50" cy="50" r="44" fill={fill} className="opacity-20" stroke={stroke} strokeWidth={width} />
          {commonText}
        </svg>
      );

    case 'ellipse':
      return (
        <svg viewBox="0 0 120 70" className="h-20 w-32 drop-shadow-sm">
          <ellipse cx="60" cy="35" rx="54" ry="24" fill={fill} className="opacity-20" stroke={stroke} strokeWidth={width} />
          {commonText}
        </svg>
      );

    case 'diamond':
      return (
        <svg viewBox="0 0 100 100" className="h-24 w-24 drop-shadow-sm">
          <polygon points="50,8 92,50 50,92 8,50" fill={fill} className="opacity-20" stroke={stroke} strokeWidth={width} />
          {commonText}
        </svg>
      );

    case 'hexagon':
      return (
        <svg viewBox="0 0 100 100" className="h-24 w-24 drop-shadow-sm">
          <polygon points="25,10 75,10 95,50 75,90 25,90 5,50" fill={fill} className="opacity-20" stroke={stroke} strokeWidth={width} />
          {commonText}
        </svg>
      );

    case 'parallelogram':
      return (
        <svg viewBox="0 0 100 100" className="h-24 w-24 drop-shadow-sm">
          <polygon points="18,10 92,10 82,90 8,90" fill={fill} className="opacity-20" stroke={stroke} strokeWidth={width} />
          {commonText}
        </svg>
      );

    case 'document':
      return (
        <svg viewBox="0 0 100 100" className="h-24 w-24 drop-shadow-sm">
          <rect x="20" y="15" width="60" height="70" rx="8" fill={fill} className="opacity-20" stroke={stroke} strokeWidth={width} />
          <path d="M20 15 L60 15 L80 35 L80 85" fill="none" stroke={stroke} strokeWidth={width} />
          {commonText}
        </svg>
      );

    case 'actor':
      return (
        <svg viewBox="0 0 100 100" className="h-24 w-24 drop-shadow-sm">
          <circle cx="50" cy="28" r="14" fill={fill} className="opacity-20" stroke={stroke} strokeWidth={width} />
          <path d="M18 82 C18 60 34 54 50 54 C66 54 82 60 82 82" fill="none" stroke={stroke} strokeWidth={width} />
          {commonText}
        </svg>
      );

    case 'cylinder':
    case 'database':
      return (
        <svg viewBox="0 0 100 100" className="h-24 w-24 drop-shadow-sm">
          <path d="M 15 25 A 35 14 0 0 0 85 25 A 35 14 0 0 0 15 25 Z" fill={fill} className="opacity-20" stroke={stroke} strokeWidth={width} />
          <path d="M 15 25 L 15 75 A 35 14 0 0 0 85 75 L 85 25" fill={fill} className="opacity-20" stroke={stroke} strokeWidth={width} />
          {commonText}
        </svg>
      );

    case 'oval':
      return (
        <svg viewBox="0 0 100 100" className="h-20 w-32 drop-shadow-sm">
          <ellipse cx="50" cy="50" rx="45" ry="30" fill={fill} className="opacity-20" stroke={stroke} strokeWidth={width} />
          {commonText}
        </svg>
      );

    case 'trapezoid':
      return (
        <svg viewBox="0 0 100 100" className="h-24 w-24 drop-shadow-sm">
          <polygon points="25,10 75,10 90,90 10,90" fill={fill} className="opacity-20" stroke={stroke} strokeWidth={width} />
          {commonText}
        </svg>
      );

    case 'triangle':
      return (
        <svg viewBox="0 0 100 100" className="h-24 w-24 drop-shadow-sm">
          <polygon points="50,10 90,85 10,85" fill={fill} className="opacity-20" stroke={stroke} strokeWidth={width} />
          {commonText}
        </svg>
      );

    case 'pentagon':
      return (
        <svg viewBox="0 0 100 100" className="h-24 w-24 drop-shadow-sm">
          <polygon points="50,5 95,35 78,90 22,90 5,35" fill={fill} className="opacity-20" stroke={stroke} strokeWidth={width} />
          {commonText}
        </svg>
      );

    case 'star':
      return (
        <svg viewBox="0 0 100 100" className="h-24 w-24 drop-shadow-sm">
          <polygon points="50,10 61,40 92,40 67,60 78,90 50,70 22,90 33,60 8,40 39,40" fill={fill} className="opacity-20" stroke={stroke} strokeWidth={width} />
          {commonText}
        </svg>
      );

    case 'cross':
      return (
        <svg viewBox="0 0 100 100" className="h-24 w-24 drop-shadow-sm">
          <rect x="40" y="10" width="20" height="80" fill={fill} className="opacity-20" />
          <rect x="10" y="40" width="80" height="20" fill={fill} className="opacity-20" />
          <rect x="40" y="10" width="20" height="80" fill="none" stroke={stroke} strokeWidth={width} />
          <rect x="10" y="40" width="80" height="20" fill="none" stroke={stroke} strokeWidth={width} />
          {commonText}
        </svg>
      );

    case 'arrow-right':
      return (
        <svg viewBox="0 0 100 100" className="h-20 w-32 drop-shadow-sm">
          <polygon points="10,40 70,40 70,20 95,50 70,80 70,60 10,60" fill={fill} className="opacity-20" stroke={stroke} strokeWidth={width} />
          {commonText}
        </svg>
      );

    case 'arrow-left':
      return (
        <svg viewBox="0 0 100 100" className="h-20 w-32 drop-shadow-sm">
          <polygon points="90,40 30,40 30,20 5,50 30,80 30,60 90,60" fill={fill} className="opacity-20" stroke={stroke} strokeWidth={width} />
          {commonText}
        </svg>
      );

    case 'arrow-up':
      return (
        <svg viewBox="0 0 100 100" className="h-32 w-20 drop-shadow-sm">
          <polygon points="40,90 40,30 20,30 50,5 80,30 60,30 60,90" fill={fill} className="opacity-20" stroke={stroke} strokeWidth={width} />
          {commonText}
        </svg>
      );

    case 'arrow-down':
      return (
        <svg viewBox="0 0 100 100" className="h-32 w-20 drop-shadow-sm">
          <polygon points="40,10 40,70 20,70 50,95 80,70 60,70 60,10" fill={fill} className="opacity-20" stroke={stroke} strokeWidth={width} />
          {commonText}
        </svg>
      );

    case 'cloud':
      return (
        <svg viewBox="0 0 100 100" className="h-20 w-32 drop-shadow-sm">
          <path d="M 20 70 Q 15 70 15 65 Q 15 55 20 50 Q 18 40 28 38 Q 30 30 42 30 Q 50 25 58 30 Q 70 28 75 38 Q 82 40 82 50 Q 82 55 78 60 Q 85 65 85 75 Q 85 85 75 85 Q 20 85 20 70" fill={fill} className="opacity-20" stroke={stroke} strokeWidth={width} />
          {commonText}
        </svg>
      );

    case 'rounded':
      return (
        <div
          style={{ borderColor: stroke, backgroundColor: `${fill}22` }}
          className="flex h-20 w-32 items-center justify-center rounded-2xl border-2 p-2 text-center"
        >
          <span className="wrap-break-word text-[11px] font-semibold text-slate-800" style={{fontWeight: fWeight, fontStyle: fStyle, textDecoration: tDecor, color: fontColor || '#111827'}}>{displayLabel}</span>
        </div>
      );

    case 'rectangle':
    default:
      return (
        <div
          style={{ borderColor: stroke, backgroundColor: `${fill}22` }}
          className="flex h-20 w-32 items-center justify-center rounded-lg border-2 p-2 text-center"
        >
          <span className="wrap-break-word text-[11px] font-semibold text-slate-800" style={{fontWeight: fWeight, fontStyle: fStyle, textDecoration: tDecor, color: fontColor || '#111827'}}>{displayLabel}</span>
        </div>
      );
  }
};

export default function ShapeNode({ id, data, isConnectable, selected, onDeleteNode, onLabelChange, onUpdateNodeData }) {
  const [draftLabel, setDraftLabel] = useState(data?.label || '');
  const [isEditing, setIsEditing] = useState(Boolean(data?.editing));

  useEffect(() => {
    setDraftLabel(data?.label || '');
    setIsEditing(Boolean(data?.editing));
  }, [data?.editing, data?.label]);

  useEffect(() => {
    if (!selected && isEditing) {
      setIsEditing(false);
    }
  }, [selected]);

  const commitLabel = () => {
    const nextLabel = draftLabel.trim();
    onLabelChange?.(id, nextLabel || '');
    setIsEditing(false);
  };

  return (
    <div className={`relative p-0 ${selected ? 'rounded-none outline outline-violet-500' : ''}`}>
      <Handle
        type="target"
        position={Position.Left}
        isConnectable={isConnectable}
        style={{ background: '#8b5cf6', width: 8, height: 8 }}
      />

      {selected && (
        <button
          type="button"
          onClick={(event) => {
            event.stopPropagation();
            onDeleteNode?.(id);
          }}
          className="absolute right-1 top-1 z-20 rounded-full bg-white/90 px-2 text-xs font-bold text-slate-700 shadow"
        >
          ×
        </button>
      )}

      {selected && !isEditing && (
        <div className="absolute -top-10 left-0 z-20 flex gap-1 rounded-lg border border-violet-200 bg-white shadow-md p-1">
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onUpdateNodeData?.(id, { fontWeight: data?.fontWeight === 'bold' ? 'normal' : 'bold' });
            }}
            className={`px-2 py-1 text-xs font-bold rounded ${data?.fontWeight === 'bold' ? 'bg-violet-500 text-white' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'}`}
            title="Bold"
          >
            B
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onUpdateNodeData?.(id, { fontStyle: data?.fontStyle === 'italic' ? 'normal' : 'italic' });
            }}
            className={`px-2 py-1 text-xs italic rounded ${data?.fontStyle === 'italic' ? 'bg-violet-500 text-white' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'}`}
            title="Italic"
          >
            I
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onUpdateNodeData?.(id, { textDecoration: data?.textDecoration === 'underline' ? 'none' : 'underline' });
            }}
            className={`px-2 py-1 text-xs underline rounded ${data?.textDecoration === 'underline' ? 'bg-violet-500 text-white' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'}`}
            title="Underline"
          >
            U
          </button>
          <div className="border-l border-slate-300 mx-1"></div>
          <select
            onChange={(e) => {
              e.stopPropagation();
              onUpdateNodeData?.(id, { fontSize: parseInt(e.target.value) });
            }}
            value={data?.fontSize || 10}
            className="px-2 py-1 text-xs rounded bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200"
            title="Font Size"
          >
            <option value="8">8px</option>
            <option value="10">10px</option>
            <option value="12">12px</option>
            <option value="14">14px</option>
            <option value="16">16px</option>
          </select>
          <input
            type="color"
            value={data?.fontColor || '#111827'}
            onChange={(e) => {
              e.stopPropagation();
              onUpdateNodeData?.(id, { fontColor: e.target.value });
            }}
            className="w-8 h-8 rounded border-0 cursor-pointer"
            title="Text Color"
          />
        </div>
      )}

      <div
        className="cursor-pointer"
        onDoubleClick={(event) => {
          event.stopPropagation();
          setIsEditing(true);
        }}
        onClick={(event) => {
          if (selected) {
            event.stopPropagation();
            setIsEditing(true);
          }
        }}
      >
        {isEditing ? (
          <div className="relative flex h-20 w-32 items-center justify-center rounded-lg shadow-sm">
            <ShapeSvg 
              shape={data?.shape} 
              fillColor={data?.fillColor} 
              strokeColor={data?.strokeColor}
              strokeWidth={data?.strokeWidth}
              label={draftLabel} 
              fontWeight={data?.fontWeight}
              fontStyle={data?.fontStyle}
              textDecoration={data?.textDecoration}
              textAlign={data?.textAlign}
              fontSize={data?.fontSize}
              fontColor={data?.fontColor}
            />
            <input
              autoFocus
              value={draftLabel}
              onChange={(event) => setDraftLabel(event.target.value)}
              onBlur={commitLabel}
              onMouseDown={(event) => event.stopPropagation()}
              onClick={(event) => event.stopPropagation()}
              onKeyDown={(event) => {
                if (event.key === 'Enter') {
                  event.preventDefault();
                  commitLabel();
                }
                if (event.key === 'Escape') {
                  setDraftLabel(data?.label || '');
                  setIsEditing(false);
                }
              }}
              placeholder="Enter text"
              className="absolute inset-0 z-10 flex w-full items-center justify-center rounded-lg border border-violet-300 bg-white/80 px-2 py-1 text-center text-[11px] font-semibold text-slate-700 outline-none"
            />
          </div>
        ) : (
          <ShapeSvg 
            shape={data?.shape} 
            fillColor={data?.fillColor} 
            strokeColor={data?.strokeColor}
            strokeWidth={data?.strokeWidth}
            label={data?.label} 
            fontWeight={data?.fontWeight}
            fontStyle={data?.fontStyle}
            textDecoration={data?.textDecoration}
            textAlign={data?.textAlign}
            fontSize={data?.fontSize}
            fontColor={data?.fontColor}
          />
        )}
      </div>

      <Handle
        type="source"
        position={Position.Right}
        isConnectable={isConnectable}
        style={{ background: '#8b5cf6', width: 8, height: 8 }}
      />
    </div>
  );
}