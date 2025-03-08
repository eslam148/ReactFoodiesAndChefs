import React from "react";
import Message from "./Message";
const ChatMessages = ({ Messages, userData, chatContainerRef, setIsModalOpen }) => {
  return (
    <>
    <div className="flex flex-col">
      {/* Chat Header */}
      <header className="w-full flex justify-between p-3">
        <div className="flex gap-2 items-center w-1/2">
        {/* onClick={() => setIsModalOpen(true)} */}
          <div className="relative" >
            <img
              className="icon rounded-full w-12 h-12 object-cover"
              src={Messages?.user?.profileUrl || "default-image.png"}
              alt="profileImage"
            />
            {/* <span className="absolute end-0 bottom-0 bg-[#56DE00] w-3 h-3 rounded-full"></span> */}
          </div>
          <div className="flex flex-col items-start w-2/3 gap-1">
            <span className="text-[14.13px] font-bold text-[#F0F0F0]">
              {Messages?.user?.frindName || "Hello"}
            </span>
            {/* <p className="text-[10.99px] text-[#56DE00]">online</p> */}
          </div>
        </div>
        {/* <div>
          <i className="fas fa-ellipsis-v"></i>
        </div> */}
      </header>

      {/* Chat Body */}
      <div
        ref={chatContainerRef}
        className="max-h-[80vh] overflow-y-auto bg-black px-3 py-4 flex flex-col gap-5"
        id="message"
      >
      


        <Message Messages={Messages} userData={userData} />

      </div>
    </div>
    </>
  );
};

export default ChatMessages;
