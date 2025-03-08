import { Autocomplete, GoogleMap, LoadScript } from "@react-google-maps/api";
import { useCallback, useState } from "react";
import { Marker } from "react-leaflet";

const mapContainerStyle = {
  width: "100%",
  height: "400px",
};

const center = {
  lat: 30.0444, // Default to Cairo, Egypt
  lng: 31.2357,
};

function LocationPicker() {
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [autocomplete, setAutocomplete] = useState(null);

  const onMapClick = useCallback((event) => {
    setSelectedLocation({
      lat: event.latLng.lat(),
      lng: event.latLng.lng(),
      name: "Selected Location",
    });
  }, []);

  const onPlaceChanged = () => {
    if (autocomplete) {
      const place = autocomplete.getPlace();
      if (place.geometry) {
        setSelectedLocation({
          lat: place.geometry.location.lat(),
          lng: place.geometry.location.lng(),
          name: place.formatted_address || place.name,
        });
      }
    }
  };

  return (
    <LoadScript
      googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}
      libraries={["places"]}
    >
      <div className="space-y-4">
        {/* Search Box */}
        <Autocomplete onLoad={setAutocomplete} onPlaceChanged={onPlaceChanged}>
          <input
            type="text"
            placeholder="Search a location"
            className="p-2 border rounded w-full"
          />
        </Autocomplete>

        {/* Google Map */}
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          zoom={12}
          center={selectedLocation || center}
          onClick={onMapClick}
        >
          {selectedLocation && (
            <Marker
              position={{
                lat: selectedLocation.lat,
                lng: selectedLocation.lng,
              }}
            />
          )}
        </GoogleMap>

        {/* Selected Location Info */}
        {selectedLocation && (
          <div className="p-4 border rounded">
            <p>
              <strong>Latitude:</strong> {selectedLocation.lat}
            </p>
            <p>
              <strong>Longitude:</strong> {selectedLocation.lng}
            </p>
            <p>
              <strong>Name:</strong> {selectedLocation.name}
            </p>
          </div>
        )}
      </div>
    </LoadScript>
  );
}

export default LocationPicker;
