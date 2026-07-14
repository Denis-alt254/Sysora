import React from "react";
import { ComposableMap, Geographies, Geography, Marker } from "react-simple-maps";

// A reliable, open-source 110m resolution world map data topology URL
const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

// Your data center coordinate points [Longitude, Latitude]
const dataCenters = [
  { name: "Ashburn (US-East)", coordinates: [-77.4874, 39.0438] },
  { name: "Frankfurt (EU-Central)", coordinates: [8.6821, 50.1109] },
  { name: "Singapore (AP-Southeast)", coordinates: [103.8198, 1.3521] },
  { name: "São Paulo (SA-East)", coordinates: [-46.6333, -23.5505] },
  { name: "Nairobi (KE)", coordinates: [36.8219, -1.2921] },
  { name: "Pretoria (ZA)", coordinates: [28.1878, -25.7479] }
];

export default function DataCenterMap() {
  return (
    <div className="w-full bg-[#e1e0e6] p-3 rounded-xl shadow-2xl">
      
      <ComposableMap 
        projection="geoEqualEarth" // Clean, modern looking projection style
        projectionConfig={{ scale: 220 }}
        className="w-full h-75 m-0 p-0 max-h-125"
      >
        {/* Render the actual continent layers */}
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                fill="#aca9b9"     
                strokeWidth={0.5}
                style={{
                  default: { outline: "none" },
                  hover: { fill: "#ffffff", outline: "none" }, // Lights up slightly on hover
                  pressed: { outline: "none" },
                }}
              />
            ))
          }
        </Geographies>

        {/* Loop through and display data center marker pins */}
        {dataCenters.map(({ name, coordinates }) => (
          <Marker key={name} coordinates={coordinates}>
            {/* Outer glowing pulsing circle effect */}
            <circle r={12} fill="#9168bb" opacity={0.4} className="animate-ping" />
            {/* Sharp inner core circle */}
            <circle r={8} fill="#9168bb" stroke="#863fd0" strokeWidth={1.5} />
            
            {/* Text label underneath/next to the marker */}
            <text
              textAnchor="middle"
              y={-12}
              className="fill-slate-300 font-sans text-[14px] pointer-events-none font-semibold shadow-sm select-none"
            >
              {name}
            </text>
          </Marker>
        ))}
      </ComposableMap>
    </div>
  );
}