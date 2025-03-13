import React from "react";
import AudioWaveform from "./AudioWaveform";
const Message = ({ Messages, userData }) => {
  return (
 
    <>
    
      {(Messages.data||[]).map((data, index) => {
        const isSender = userData.id === data.senderId;
        console.log(isSender);
        return (
          <div
            key={index}
            className={`flex w-full gap-3 items-start ${isSender ? "flex-row-reverse" : ""}`}
            // dir={isSender ? "rtl" : "ltr"}
          >
            <img
              className="icon rounded-full w-14 h-14 object-cover"
              src={isSender ? userData.profileImageLink : data.user?.profileUrl}
              alt="profileImage"
            />
            <div className={`flex flex-col gap-3 w-2/3 items-start ${isSender ? "items-end" : "items-start"}`}>
              {/* Message Info */}
              <div className="flex gap-3">
                <span className="text-[11.66px] text-[#DADADA]">
                  {isSender ? userData.name : data.user?.name}
                </span>
                <span className="text-[8.74px] text-[#A0A0A0]">
                  {data?.timestamp
                    ? new Date(data.timestamp).toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit",
                      })
                    : ""}
                </span>
              </div>
              {/* Message Content */}
              {data.isMedia ? (
                data.mediaURL ? (
                //   <audio controls className="w-full">
                //     <source
                //       src={`${process.env.REACT_APP_API_URL}/${data.mediaURL}`}
                //       type="audio/mpeg"
                //     />
                //     Your browser does not support the audio element.
                //   </audio>
                <AudioWaveform isSender={isSender} audioUrl={`${process.env.REACT_APP_API_URL}/${data.mediaURL}`} />

                ) : (
                  <p className="p-3 rounded-2xl bg-[#FA8836] text-white">
                    Voice message unavailable.
                  </p>
                )
              ) : (
                <p
                  className={`p-3 rounded-2xl text-[13.11px] ${
                    isSender ? "bg-[#FA8836] text-white" : "bg-[#292929] text-start"
                  }`}
                >
                  {data.content || "No message available."}
                </p>
              )}
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Message;
 