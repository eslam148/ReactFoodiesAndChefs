 import React from "react";
 import CustomePagination from "../CustomePagination/Component";
 function ChefList() {
  return (
    <section className="hidden lg:block py-8">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="h-[3px] bg-main-color mb-8"></div>
        <h2 className="text-center sm:text-4xl md:text-6xl font-bold text-[#FA8836] mb-16 mt-14">
          Chef's Event Menus
        </h2>

        {/* Search Bar */}
        <div className="flex my-8 xl:justify-start sm:justify-center font-sans">
          <div className="relative flex">
            <input
              type="text"
              className="rounded-lg bg-[#383838CC] py-2 ps-12 w-96 focus:outline-none text-white"
              placeholder="Search"
            />
            <button type="button" className="absolute start-1 top-1 text-black w-10 bg-main-color rounded-full">
              <i className="fas fa-search"></i>
            </button>
          </div>
          <button type="button" className="bg-main-color flex h-11 items-center justify-center ml-4 w-10">
          <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.5 12.5L5.5 4.5" stroke="white" strokeWidth="1.25" strokeLinecap="round"/>
            <path d="M19.5 20.5L19.5 18.5" stroke="white" strokeWidth="1.25" strokeLinecap="round"/>
            <path d="M5.5 20.5L5.5 16.5" stroke="white" strokeWidth="1.25" strokeLinecap="round"/>
            <path d="M19.5 12.5L19.5 4.5" stroke="white" strokeWidth="1.25" strokeLinecap="round"/>
            <path d="M12.5 7.5L12.5 4.5" stroke="white" strokeWidth="1.25" strokeLinecap="round"/>
            <path d="M12.5 20.5L12.5 12.5" stroke="white" strokeWidth="1.25" strokeLinecap="round"/>
            <circle cx="5.5" cy="14.5" r="2" stroke="white" strokeWidth="1.25" strokeLinecap="round"/>
            <circle cx="12.5" cy="9.5" r="2" stroke="white" strokeWidth="1.25" strokeLinecap="round"/>
            <circle cx="19.5" cy="15.5" r="2" stroke="white" strokeWidth="1.25" strokeLinecap="round"/>
            </svg>

          </button>
        </div>

        {/* Grid Items */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 font-sans">
          {[1, 2, 3, 4,5,6,7,8].map((_, index) => (
            <div key={index} className="bg-[#383838CC] rounded shadow-lg overflow-hidden">
              <img src="https://s3-alpha-sig.figma.com/img/a1f5/747c/63db649977de7580d4130f2d9ca19cd9?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=eA3HMKWlc~jt8lu7t6~hjpVyoNDGrEVHyXKSDlMHSxWIbAaUJW0t1pzTi8039aGxcQCXWvaRupqKT0v0I7xo8AV3ICFC7qNvRhXiy74a36RGvHOQCEN1Q3degE468QKNT9-bTW1zkLPVG9B0Lavgo1W9kpTglDejaQcf0ruuGvkwdv7kHKM3Ay4cWsF9fq62lYH2viDYLzvyGiBBUS2HpMVvxsTbyIwupJAEeonoxNMlKy3ApVVHmiR66EQZl2mBKHj8OmgHPgk49O7iz9DKkndZDuZlUu9mR9jcutO~QYWrH0yo5VjWai97wFeAPdUSzADPVKP8tdYNlTwxC3nLvg__" alt="Italian Delight" className="w-full h-48 object-cover rounded-2xl" />
              <div className="p-4">
                <div className="flex items-center mb-2 justify-center gap-2">
                    <i className="far fa-heart text-main-color text-xl"></i>
                    Chef Marco Rossi
                </div>
                <p className="text-sm   text-white text-center">Italian Delight</p>
                 <div className="flex justify-center mt-4 gap-4 font-bold ">
                        <button type="button" className="mt-4 bg-main-color text-white text-sm p-2  rounded-xl hover:bg-orange-600">
                        Send Request
                        </button>
                        <button type="button" className="mt-4 bg-main-green-color text-white p-2  text-sm rounded-xl hover:bg-orange-600">
                        Chat Now
                        </button>
                 </div>
               
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
      
        <CustomePagination></CustomePagination>
      </div>
    </section>
  );
}

export default ChefList;
