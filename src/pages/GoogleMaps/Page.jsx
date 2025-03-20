// import 'leaflet/dist/leaflet.css';

// function GoogleMapsPage() {
//   return (
//     <div className="flex flex-col space-y-10 w-full">
//       <input
//         id="pac-input"
//         className="w-3/4 mt-14 pl-10 border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 h-[40px] text-black text-xl p-5"
//         type="text"
//         placeholder="Search "
//         style={{ left: 0 }}
//       />
//       <div id="address"></div>
//       <div id="map" className="w-full md:h-3/4 h-[50lvh]"></div>

//       <div className="flex justify-around">
//         <button
//           id="sendbtn"
//           className="bg-main-color rounded-[35px] w-[273px] h-[42px] mt-4 hover:bg-main-dark-color border-[3px] border-main-color drop-shadow-md shadow-main-color hover:bg-transparent hover:border-[3px] hover:border-main-color hover:text-main-color"
//         >
//           Set Location
//         </button>

//         <button
//           id="GetCurrent"
//           className="bg-[#6555FF] rounded-[35px] w-[273px] h-[42px] mt-4 drop-shadow-md shadow-[#7163FF59] hover:bg-transparent hover:border-4 hover:border-[#4136A3] hover:text-[#4136A3]"
//         >
//           Get Current Location
//         </button>
//       </div>
//     </div>
//   );
// }

// export default GoogleMapsPage;


// import React, { useState, useEffect } from "react";
// import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
// import "leaflet/dist/leaflet.css";
// import L from "leaflet";
// import "leaflet-control-geocoder";
// import "./style.css"
// // Fix Leaflet icon issue
// delete L.Icon.Default.prototype._getIconUrl;
// L.Icon.Default.mergeOptions({
//   iconRetinaUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
//   iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
//   shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
// });

// // Component to change map view
// const ChangeView = ({ center }) => {
//   const map = useMap();
//   useEffect(() => {
//     map.setView(center, map.getZoom(), { animate: true, duration: 1 });
//   }, [center, map]);
//   return null;
// };

// // Search Control Component
// const GeocoderControl = () => {
//   const map = useMap();

//   useEffect(() => {
//     const geocoder = L.Control.geocoder({
//       defaultMarkGeocode: true,
//     }).addTo(map);

//     geocoder.on("markgeocode", function (e) {
//       map.setView(e.geocode.center, 13, { animate: true, duration: 1 });
//       L.marker(e.geocode.center).addTo(map).bindPopup(e.geocode.name).openPopup();
//     });

//     return () => {
//       map.removeControl(geocoder);
//     };
//   }, [map]);

//   return null;
// };

// const GoogleMapsPage = () => {
//   const [position, setPosition] = useState([31.2156, 29.9553]);  

//   useEffect(() => {
//     if (navigator.geolocation) {
//       navigator.geolocation.getCurrentPosition(
//         (pos) => {
//           setPosition([pos.coords.latitude, pos.coords.longitude]);
//         },
//         (error) => {
//           console.error("Error getting location: ", error);
//         }
//       );
//     } else {
//       console.error("Geolocation is not supported by this browser.");
//     }
//   }, []);

//   return (
//     <div className="relative h-screen w-full">
//       {/* Floating Search Bar */}
//       <div className="absolute top-4 left-1/2 transform -translate-x-1/2 z-10 bg-white shadow-lg p-3 rounded-xl text-center w-80">
//         <p className="text-gray-700 font-semibold">Search for a location</p>
//       </div>

//       {/* Map Container */}
//       <MapContainer center={position} zoom={13} className="h-full w-full rounded-lg shadow-lg">
//         <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
//         <ChangeView center={position} />
//         {/* <GeocoderControl /> */}
//         <Marker position={position}>
//           <Popup className="text-blue-500 font-semibold">You are here!</Popup>
//         </Marker>
//       </MapContainer>
//     </div>
//   );
// };

// export default GoogleMapsPage;

import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMapEvents,useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import "leaflet-control-geocoder";
import "./style.css";

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

// Component to handle map clicks and add markers
const LocationMarker = ({ setPosition }) => {
  useMapEvents({
    click(e) {
      setPosition([e.latlng.lat, e.latlng.lng]);
    },
  });
  return null;
};

const GoogleMapsPage = () => {
  const [position, setPosition] = useState([31.2156, 29.9553]);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          setPosition([pos.coords.latitude, pos.coords.longitude]);
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
    <div className="relative h-screen w-full">
      {/* Floating Search Bar */}
      <div className="absolute top-4 left-1/2 transform -translate-x-1/2 z-10 bg-white shadow-lg p-3 rounded-xl text-center w-80">
        <p className="text-gray-700 font-semibold">Search for a location</p>
      </div>

      {/* Map Container */}
      <MapContainer center={position} zoom={13} className="h-full w-full rounded-lg shadow-lg">
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <ChangeView center={position} />
        <LocationMarker setPosition={setPosition} />
        <Marker position={position}>
          <Popup className="text-blue-500 font-semibold">Selected Location</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default GoogleMapsPage;
