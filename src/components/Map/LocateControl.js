import React from 'react';
import { useMap } from 'react-leaflet';
import L from 'leaflet';

const LocateControl = ({ onLocationFound }) => {
  const map = useMap();

  const handleLocate = () => {
    map.locate({ setView: true, maxZoom: 16 });
  };

  map.on('locationfound', (e) => {
    const radius = e.accuracy;
    const circle = L.circle(e.latlng, radius);
    circle.addTo(map);
    if (onLocationFound) {
      onLocationFound(e.latlng);
    }
  });

  return (
    <button onClick={handleLocate} style={{ position: 'absolute', top: 10, right: 10, zIndex: 1000 }}>
      موقعي الحالي
    </button>
  );
};

export default LocateControl;
