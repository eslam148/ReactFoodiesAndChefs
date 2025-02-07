function GoogleMapsPage() {
  return (
    <div className="flex flex-col space-y-10 w-full">
      <input
        id="pac-input"
        className="w-3/4 mt-14 pl-10 border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 h-[40px] text-black text-xl p-5"
        type="text"
        placeholder="Search "
        style={{ left: 0 }}
      />
      <div id="address"></div>
      <div id="map" className="w-full md:h-3/4 h-[50lvh]"></div>

      <div className="flex justify-around">
        <button
          id="sendbtn"
          className="bg-main-color rounded-[35px] w-[273px] h-[42px] mt-4 hover:bg-main-dark-color border-[3px] border-main-color drop-shadow-md shadow-main-color hover:bg-transparent hover:border-[3px] hover:border-main-color hover:text-main-color"
        >
          Set Location
        </button>

        <button
          id="GetCurrent"
          className="bg-[#6555FF] rounded-[35px] w-[273px] h-[42px] mt-4 drop-shadow-md shadow-[#7163FF59] hover:bg-transparent hover:border-4 hover:border-[#4136A3] hover:text-[#4136A3]"
        >
          Get Current Location
        </button>
      </div>
    </div>
  );
}

export default GoogleMapsPage;
