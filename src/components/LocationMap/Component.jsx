import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMapEvents, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Fix Leaflet icon issue
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
});

// Component to change map view
const ChangeView = ({ center }) => {
  const map = useMap();
  useEffect(() => {
    map.setView(center, map.getZoom(), { animate: true, duration: 1 });
  }, [center, map]);
  return null;
};

// Component to handle map clicks and update location
const LocationMarker = ({ setPosition, onLocationSelect }) => {
  useMapEvents({
    click(e) {
      const newPosition = [e.latlng.lat, e.latlng.lng];
      setPosition(newPosition);
      if (onLocationSelect) onLocationSelect(newPosition); // Send to parent
    },
  });
  return null;
};

const GoogleMapsPage = ({ onLocationSelect }) => {
  const [position, setPosition] = useState([31.2156, 29.9553]);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          const newPosition = [pos.coords.latitude, pos.coords.longitude];
          setPosition(newPosition);
          if (onLocationSelect) onLocationSelect(newPosition); // Send to parent
        },
        (error) => {
          console.error("Error getting location: ", error);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  }, []);

  return (
    <div className="relative h-full w-full">
      <div className="absolute top-4 left-1/2 transform -translate-x-1/2 z-10 bg-white shadow-lg p-3 rounded-xl text-center w-80">
        <p className="text-gray-700 font-semibold">Search for a location</p>
      </div>

      <MapContainer center={position} zoom={13} className="h-full w-full rounded-lg shadow-lg">
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <ChangeView center={position} />
        <LocationMarker setPosition={setPosition} onLocationSelect={onLocationSelect} />
        <Marker position={position}>
          <Popup className="text-blue-500 font-semibold">Selected Location</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default GoogleMapsPage;
