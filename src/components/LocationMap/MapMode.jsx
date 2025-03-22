import LocationMap from "./Component";
import { useState } from "react";
function MapModel({ setSelectedLocation, isModalOpen, setIsModalOpen }) {
  const [latitude, setLatitude] = useState(40.7128);
  const [longitude, setLongitude] = useState(-74.006);
//   const [selectedLocation, setSelectedLocation] = useState(null);

  const confirmPosition = () => {
    setSelectedLocation({ latitude, longitude });
    setIsModalOpen(false);
  };

  const handleLocationSelect = (location) => {
    console.log("Selected Location:", location);
    setSelectedLocation(location);
  };
  return (
    <div>
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-black p-6 rounded-lg shadow-lg w-[500px] relative">
            <h2 className="text-xl font-bold mb-4">Select a Position</h2>

            <div className="h-64 w-full">
                
              <LocationMap onLocationSelect={handleLocationSelect} />
            </div>

            {/* Close Button */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-2 right-2 text-gray-600  w-10 hover:bg-red-500 bg-transparent"
            >
              ✖
            </button>

            {/* Confirm Button */}
            <button
              onClick={confirmPosition}
              className="block m-auto bg-[#6555FF] rounded-[35px]  w-[273px] h-[42px] mt-4 drop-shadow-md shadow-[#7163FF59] hover:bg-transparent hover:border-4 hover:border-[#4136A3] hover:text-[#4136A3]  "
              >
              Confirm Position
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default MapModel;
