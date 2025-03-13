const GetChats = async (connection, setChats) => {
    try {
        if (!connection) return;
       
        connection.on("ReceiveChats", (Chats) => {
            
            setChats(Chats);
        });

    } catch (err) {
        console.error("Error in GetChats:", err);
    }
};


export default GetChats;



//   {/* sender section */}
//   <div className="flex w-full gap-3 items-start" dir="rtl">
//   <img
//       className="icon rounded-full w-14 h-14 object-cover"
//       src="https://s3-alpha-sig.figma.com/img/d649/4146/b06fe484bb699544e290949b0e0abefa?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=RCtx8BfYPNPO8RgZKuqWobbjPiODSAkdt~JVFlNzo0cHmKl9vWc9T-d4wGmdDMLcwhJQ1lqeRrpAcdJ7JgYh~dyqOMMLxXHhOxU6rYbJKrE3RkgO33QDPPn0u7YzA3qml7TzfH9yzQVV2c0YQScGCrO89hKdaKmtG16zArvZhz2Rxx2MtRXPZlMCPQutauBr7D7H5276yxT2mst9vtPnxco4rklmdjl1hH3g9ggs~bN7UW3utluP19QAFgf-j5OzR~hepqYk8Qe8rVXEsMWRFPE17EAGbUzvOkE-pwjw~fePMZ2o2eldh8T5EyVy8AINqKVAUidAe96t1MSPl~4nGw__"
//       alt="profileImage"
//     />
//     <div className="flex flex-col gap-3 w-2/3 items-start">
//       {/* info part */}
//       <div className="flex gap-3">
//         <span className="text-[11.66px] text-[#DADADA]">Eslam Mohamed Amir</span>
//         <span className="text-[8.74px] text-[#A0A0A0]">10:30</span>
//       </div>
//        {/*end info part */}
//        {/* message part */}
//        <p className="bg-[#FA8836] p-3 rounded-2xl text-start text-[13.11px]">
//         Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nam eveniet amet voluptatem praesentium enim earum dicta. Cupiditate
//        </p>
//        {/*end  message part */}

//     </div>
// </div>
// {/*End sender section */}
