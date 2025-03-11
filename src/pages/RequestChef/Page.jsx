const RequestChefPage = () => {
    return (
      <div>
        {/* Greeting Chef */}
        <div className="container mx-auto mt-10 p-4 text-center">
          <h1 className="text-3xl font-bold text-center text-[#FA8836] mb-6">Hello, Chef Youssef</h1>
          <p className="text-center text-white">
            We would be delighted to have you showcase your culinary artistry at our exclusive event. Your<br /> 
            talent and signature dishes will bring an unforgettable touch of magic to our guests' experience!
          </p>
        </div>
  
        {/* Section 1: Event Details */}
        <section className="py-8 px-4">
          <div className="container mx-auto max-w-6xl bg-black rounded-xl p-6 sm:p-12">
            <div className="sm:mb-8">
              <h3 className="text-sm sm:text-lg md:text-xl font-bold text-center text-white">
                Event Name: <span className="ml-1 text-[#FA8836]">My Birthday</span>
              </h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-white">
              <div className="mt-8">
                <p className="text-sm sm:text-sm font-bold text-[#FA8836] mb-4">
                  Event details
                </p>
                <div className="flex items-center mb-3">
                  <i className="fas fa-user mr-2 text-[10px] sm:text-xs"></i>
                  <span className="text-[10px] sm:text-sm mr-2">Mohamed Saad</span>
                  <button className="ml-12 bg-green-600 hover:bg-green-700 text-white px-2 py-1 rounded text-[10px]">
                    Chat Now
                  </button>
                </div>
                {/* Additional event details ... */}
              </div>
              <div className="flex justify-center items-center mr-8">
                <img
                  src="./ReqPic.jpeg"
                  alt="Event Image"
                  className="rounded-xl shadow-lg object-cover w-80 sm:w-60 h-60 sm:h-80"
                />
              </div>
            </div>
          </div>
        </section>
  
        {/* Map Section */}
        <section className="py-8 px-4">
          <div className="container mx-auto rounded p-4">
            <img
              src="./map.jpeg"
              alt="Map"
              className="w-full h-56 object-cover rounded"
            />
          </div>
        </section>
  
        {/* Price Section */}
        <section className="py-8 px-4">
          <div className="container mx-auto mb-10 p-4 text-center">
            <div className="h-[2px] bg-[#FA8836] mb-20"></div>
            <div className="flex flex-col items-center gap-2">
              <div className="flex items-center gap-2 mt-10 justify-center">
                <h2 className="text-xl text-white font-bold">Experience Starts at</h2>
                <input
                  type="number"
                  placeholder="800"
                  className="w-30 p-1 text-black focus:outline-none"
                />
                <select className="p-1 text-black focus:outline-none">
                  <option>USD</option>
                  <option>EUR</option>
                  <option>EGP</option>
                  <option>AUD</option>
                </select>
                <span className="text-xs sm:text-base text-white">Per Person</span>
              </div>
            </div>
          </div>
        </section>
  
        {/* Section 4: Menu & Notes & Buttons */}
        <section className="py-8 px-4">
          <div className="container mx-auto">
            {/* Menu Field */}
            <div className="flex justify-center mb-6">
              <div className="w-full sm:w-1/2 md:w-1/3">
                <p className="block mb-1 text-white text-sm sm:text-lg text-left">Menu:</p>
                <details className="inline-block text-left w-full">
                  <summary id="menuSummary" className="bg-[#383838CC] text-white border border-[#FA8836] rounded p-2 cursor-pointer focus:outline-none w-full text-sm sm:text-base">
                    Menu 1
                  </summary>
                  <ul className="bg-[#383838CC] text-center text-white border border-[#FA8836] rounded p-2 mt-1 w-full text-sm">
                    <li className="p-1 hover:bg-[#FA8836] cursor-pointer">Menu 1</li>
                    <li className="p-1 hover:bg-[#FA8836] cursor-pointer">Menu 2</li>
                    <li className="p-1 hover:bg-[#FA8836] cursor-pointer">Menu 3</li>
                    <li className="p-1 hover:bg-[#FA8836] cursor-pointer">Menu 4</li>
                    <li className="p-1 hover:bg-[#FA8836] cursor-pointer">Menu 5</li>
                    <li className="p-1 hover:bg-[#FA8836] cursor-pointer">Menu 6</li>
                  </ul>
                </details>
              </div>
            </div>
  
            {/* Add Notes Field */}
            <div className="flex justify-center mb-6">
              <div className="w-full sm:w-1/2 md:w-1/3">
                <label className="block mb-1 text-white text-sm sm:text-lg text-left">Add Notes:</label>
                <textarea className="bg-[#383838CC] text-white border border-[#FA8836] rounded p-2 focus:outline-none resize-none w-full text-sm" rows="4" placeholder="Add any notes here..."></textarea>
              </div>
            </div>
  
            {/* Buttons */}
            <div className="flex flex-wrap gap-2 justify-center mt-4">
              <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-1 rounded text-xs sm:text-sm">
                Accept
              </button>
              <button className="bg-[#6555FF] hover:bg-[#5244cc] text-white px-4 py-1 rounded text-xs sm:text-sm">
                Save
              </button>
              <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-1 rounded text-xs sm:text-sm">
                Decline
              </button>
            </div>
          </div>
        </section>
      </div>
    );
  };
  
  export default RequestChefPage;
  