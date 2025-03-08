import React from "react";

const Modal = ({ isOpen, onClose,userData}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full transform scale-95 opacity-0 animate-fadeIn bg-[#080808] text-white">
        {/* {profileHeader} */}
      <div className="flex gap-2 items-center w-full">
          <div className="relative" >
            <img
              className="icon rounded-full w-16 h-16 object-cover"
              src={userData?.profileUrl || "default-image.png"}
              alt="profileImage"
            />
            {/* <span className="absolute end-0 bottom-0 bg-[#56DE00] w-3 h-3 rounded-full"></span> */}
          </div>
          <div className="flex flex-col items-start w-2/3 gap-1">
            <span className="text-[19.13px] font-bold text-[#F0F0F0]">
              {userData?.frindName || "Hello"}
            </span>
            {/* <p className="text-[10.99px] text-[#56DE00]">online</p> */}
          </div>
      </div>
 {/* {End profileHeader} */}
        <div className="mt-4 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 text-white bg-red-500 rounded-lg"
          >
            إغلاق
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
