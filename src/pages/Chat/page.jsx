import { useTranslation } from "react-i18next";
import "./styles.css";
import { useEffect, useState,useRef  } from "react";
import LoadingSpinner from "../../components/Spinner/Component";

import Modal from "./Modal"; 
import checkSignIn from "../../utils/checkSignIn";
import * as signalR from "@microsoft/signalr";
import GetChats from "../../services/Chat/GetChats";
import ReceiveMessage from "../../services/Chat/ReceiveMessage";

import SendMessage from "../../services/Chat/SendMessage";
import getMessageByChatId from "../../services/Chat/getMessageByChatId";
import isJwtTokenValid from "../../utils/validateToken";
 // import ChatMessages from "../../components/Chat/ChatMessage";
 import SendMedia from "../../services/Chat/SendMedia"
import ChatMessages from "../../components/Chat/ChatMessage";
import { useParams, useNavigate } from "react-router-dom";
import {getUserByIdsService} from "../../services/User/GetUserById"
import Picker from "@emoji-mart/react";

function Chat( ) {
  const [emoji, setEmoji] = useState("");
  const [showPicker, setShowPicker] = useState(false); // Controls visibility

  const [isLoading, setIsisLoading] = useState(true);

  const chatContainerRef = useRef(null);
  //record
 
  const [timer, setTimer] = useState(0);
  const [isRecording, setIsRecording] = useState(false);
  const [mediaRecorder, setMediaRecorder] = useState(null);
  const [audioChunks, setAudioChunks] = useState([]);
  const [stream, setStream] = useState(null);
  const [audioURL, setAudioURL] = useState(null);

  // Start Recording
  const startRecording = async () => {
    try {
        const audioStream = await navigator.mediaDevices.getUserMedia({ audio: true });
        const recorder = new MediaRecorder(audioStream, { mimeType: "audio/webm" }); // استخدم تنسيق مدعوم
        let chunks = [];

        recorder.ondataavailable = (event) => {
          console.log("Received audio data:", event.data);
            chunks.push(event.data);
        };

        recorder.onstop = () => {
            if (chunks.length > 0) {
                const audioBlob = new Blob(chunks, { type: "audio/webm" });
                
                console.log("Audio blob size:", audioBlob.size);
                if (audioBlob.size === 0) {
                    console.error("Empty audio file. Recording might have failed.");
                    return;
                }
                const url = URL.createObjectURL(audioBlob);
                setAudioURL(url);
                // تحويل إلى ملف وإرسال إلى السيرفر
                const audioFile = new File([audioBlob], "recording.webm", { type: "audio/webm" });
                SendMedia(connection, Messages.user.frindId, audioFile);
            }

            // تنظيف البيانات
            chunks = [];
            setIsRecording(false);
            setTimer(0);
            audioStream.getTracks().forEach((track) => track.stop());
            setStream(null);
            setMediaRecorder(null);
        };

        setStream(audioStream);
        setMediaRecorder(recorder);
        setIsRecording(true);
        setTimer(0);
        recorder.start();
    } catch (error) {
        console.error("Microphone access denied:", error);
    }
};


// Stop Recording & Send
const stopRecording = () => {
    if (mediaRecorder) {
        mediaRecorder.stop();
    }
};

// Timer Effect
useEffect(() => {
    let interval;
    if (isRecording) {
        interval = setInterval(() => {
            setTimer((prev) => prev + 1);
        }, 1000);
    } else {
        clearInterval(interval);
    }
    return () => clearInterval(interval);
}, [isRecording]);

// Format Timer (MM:SS)
const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
};

//end record
  const { t } = useTranslation();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [connection, setConnection] = useState(null);
  const [chats, setChats] = useState([]);
  const [Messages, setMessages] = useState([])
  const [userData, setUserData] = useState("");
  const [content, setContent] = useState("");
  const [originalChats, setOriginalChats] = useState(chats);
  const [filteredChats, setFilteredChats] = useState(chats);
  const[flag,setFlage] = useState(false)
  const { id } = useParams(); 
  const handleChange = (event) => {
    setContent(event.target.value);
    setEmoji("");
  };
 
  useEffect(() => {
    checkSignIn();
  });
  useEffect(() => {
    const validateJwtToken = () => {
      const token = localStorage.getItem("token");

      if (token) {
        const isValid = isJwtTokenValid(token);

        if (isValid) {
         
           setUserData(JSON.parse(localStorage.getItem("user")));
        } else {
 
          
        }
      }
    };

    validateJwtToken();
  }, []);
  useEffect(() => {
    if (chatContainerRef.current) {
        chatContainerRef.current.scrollTo({
            top: chatContainerRef.current.scrollHeight,
            behavior: "smooth", // Smooth scrolling effect
        });
    }
}, [Messages]);
    // Initialize SignalR connection
    useEffect(() => {
      const token = localStorage.getItem("token");
      const newConnection = new signalR.HubConnectionBuilder()
          .withUrl(`${process.env.REACT_APP_API_URL}/Chat`, {
              accessTokenFactory: () => token, // تضمين التوكن
              transport: signalR.HttpTransportType.WebSockets,
              skipNegotiation: true,
          })
          .withAutomaticReconnect()
          .configureLogging(signalR.LogLevel.Information)
          .build();

      setConnection(newConnection);

      newConnection
          .start()
          .then(() => {
              console.log("✅ Connected to SignalR");
              GetChats(newConnection, setChats).then( () =>{
                  setTimeout(() => {
                    setIsisLoading(false)
                    
                  }, 500);
                  if (!id) {
                    return;
                 }
             
                 const fetchData = async () => {
                   await  getUserByIdsService(id).then(async (data) => {
                  
                   
                     await getMessageByChatId(newConnection, setMessages, data.data.chatId).then(()=>{
                      setMessages((prev) => ({
                        ...prev,      
                        user: data.data|| null,  
                    }));
                     });
                 
                     
                      
                  
                   
                    // setUserData(data.data);
                    // SendMessage(connection, data.data.id, "");
             
                    // setFlage(true)
                   })
                 };
             
                 fetchData();

              } );
          })
          .catch((err) => console.error("❌ SignalR Connection Error:", err));

      return () => {
          newConnection.stop()
              .then(() => console.log("🚀 Disconnected from SignalR hub."))
              .catch((error) => console.error("❌ Error disconnecting:", error));
      };
  }, []);
  useEffect(() => {
     
    console.log(Messages,"adsda")
  }, [id]);
  const ShowMessage = async (chatId) => {
    if (!connection || !chats?.data) return; // Added null check for chats.data
    console.log("ssss");

    await getMessageByChatId(connection, setMessages, chatId);

    setMessages((prev) => ({
        ...prev,
        user: chats.data.find((x) => x.chatId === chatId) || null,
    }));
};
useEffect(() => {
 }, [Messages]);


 


  useEffect(() => {
      if (connection) {
          ReceiveMessage(connection, setMessages,setChats);
      }
  }, [connection]);

  const Send = () => {
    if (connection && content.trim()) {
        SendMessage(connection, Messages.user.frindId, content);
        setContent("");    
    } else {
        console.warn("⚠️ Connection is not established yet or content is empty.");
    }
};
useEffect(() => {
  if (chats.data) {
    setOriginalChats(chats.data);
    setFilteredChats(chats.data);  
  }
}, [chats]);
const Search = (e) => {
  const searchValue = e.target.value.toLowerCase();
  
  if (!searchValue) {
    setFilteredChats(chats.data || []); // عند إفراغ البحث، إظهار جميع المحادثات
  } else {
    const newFilteredChats = (chats.data || []).filter((chat) =>
      chat.frindName.toLowerCase().includes(searchValue)
    );
    setFilteredChats(newFilteredChats);
  }
};
  return (
    <div className="bg-[#121212] overflow-auto min-h-screen pt-4 box-border inter">
      <main className="min-h-[80dvh] md:flex mt-0 mx-9" id="overlay">
        {/* Left Side Chat */}
        <section className="w-1/4 hidden md:flex flex-col gap-3 p-3">
          <div className="flex gap-2 justify-ceneter items-center text-main-color">
            <span>
              <svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_9466_621)">
                <path fillRule="evenodd" clipRule="evenodd" d="M23.075 4.6239C24.8098 4.6239 26.4736 5.31307 27.7003 6.53979C28.9271 7.76652 29.6162 9.43031 29.6162 11.1652V21.6312C29.6162 23.366 28.9271 25.0298 27.7003 26.2566C26.4736 27.4833 24.8098 28.1724 23.075 28.1724H4.75942C4.41245 28.1724 4.0797 28.0346 3.83435 27.7893C3.58901 27.5439 3.45117 27.2112 3.45117 26.8642V11.1652C3.45117 9.43031 4.14034 7.76652 5.36706 6.53979C6.59379 5.31307 8.25758 4.6239 9.99243 4.6239H23.075ZM12.6089 13.7817C12.2885 13.7817 11.9792 13.8994 11.7398 14.1123C11.5003 14.3252 11.3473 14.6186 11.3098 14.9369L11.3007 15.0899V17.7064C11.3011 18.0399 11.4287 18.3606 11.6576 18.6031C11.8865 18.8455 12.1994 18.9914 12.5323 19.011C12.8651 19.0305 13.1929 18.9222 13.4486 18.7082C13.7043 18.4942 13.8687 18.1906 13.908 17.8595L13.9172 17.7064V15.0899C13.9172 14.743 13.7794 14.4102 13.534 14.1648C13.2887 13.9195 12.9559 13.7817 12.6089 13.7817ZM20.4585 13.7817C20.1115 13.7817 19.7787 13.9195 19.5334 14.1648C19.288 14.4102 19.1502 14.743 19.1502 15.0899V17.7064C19.1502 18.0534 19.288 18.3862 19.5334 18.6315C19.7787 18.8768 20.1115 19.0147 20.4585 19.0147C20.8054 19.0147 21.1382 18.8768 21.3835 18.6315C21.6289 18.3862 21.7667 18.0534 21.7667 17.7064V15.0899C21.7667 14.743 21.6289 14.4102 21.3835 14.1648C21.1382 13.9195 20.8054 13.7817 20.4585 13.7817Z" fill="#FA8836"/>
                </g>
                <defs>
                <clipPath id="clip0_9466_621">
                <rect width="31.3981" height="31.3981" fill="white" transform="translate(0.839844 0.698975)"/>
                </clipPath>
                </defs>
                </svg>
            </span>
              <span className="font-bold">inbox</span>
          </div>
          <div className="flex   flex-wrap space-y-5  ">
              <div className="flex w-full  justify-end md:justify-start">
                <div className="flex ltr:flex-row rtl:flex-row-reverse">
                  <div className="border-y-2 border-l-2 border-[#CCCFD04D] rounded-l-lg text-l px-2 py-1 h-9 bg-transparent flex items-center">
                    <i className="fa-solid fa-magnifying-glass text-[#ABAFB199] text-lg"></i>
                  </div>
                  <input
                    placeholder={t("meetOurChefs.searchPlaceholder")}
                    className="w-full placeholder-[#ABAFB199] bg-transparent text-main-color border-2 border-[#CCCFD04D] border-l-0 rounded-e-lg rounded-s-none h-9 flex-grow px-3 focus:outline-none"
                    onChange={Search}
                 />
                </div>
              </div>
            </div>
            <p className="text-start text-sm flex gap-2 items-center text-[#BCBCBC]">
              <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clipPath="url(#clip0_9466_699)">
                  <mask id="mask0_9466_699"   maskUnits="userSpaceOnUse" x="1" y="0" width="14" height="14">
                  <path d="M13.7879 7.43987C13.7879 10.6913 11.1523 13.327 7.90081 13.327H2.01367V7.43987C2.01367 4.18841 4.64934 1.55273 7.90081 1.55273C11.1523 1.55273 13.7879 4.18841 13.7879 7.43987Z" fill="white" stroke="white" strokeWidth="1.30823" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M4.95898 5.67383H10.2574M4.95898 8.02868H10.2574M4.95898 10.3835H7.90255" stroke="black" strokeWidth="1.30823" strokeLinecap="round" strokeLinejoin="round"/>
                  </mask>
                  <g mask="url(#mask0_9466_699)">
                  <path d="M0.837891 0.375244H14.967V14.5044H0.837891V0.375244Z" fill="#BCBCBC"/>
                  </g>
                  </g>
                  <defs>
                  <clipPath id="clip0_9466_699">
                  <rect width="14.1291" height="14.1291" fill="white" transform="translate(0.839844 0.375366)"/>
                  </clipPath>
                  </defs>
                  </svg>

                  All Message
              </p>
               <div className="flex flex-col   max-h-[80vh] overflow-y-auto   " id="chats">
              {(filteredChats  || []).map((data,index) => (
                     
                      
                      <div key={index} onClick={()=>ShowMessage(data.chatId)} className="flex gap-1 hover:bg-[#FFB37E42] p-3">
                        {/* صورة البروفايل */}
                        <img
                          className="icon rounded-full w-12 h-12 object-cover"
                          src={data.profileUrl || "/default-profile.png"} // استخدم صورة افتراضية عند غياب الصورة
                           alt="profileImage"
                        />

                        {/* معلومات الصديق */}
                        <div className="flex flex-col items-start w-2/3 gap-1">
                          <span className="text-[14.13px] font-bold text-[#F0F0F0]">
                            {data.frindName}
                          </span>
                          <p className="text-[10.99px] text-[#E0E0E0] truncate w-full text-start">
                            {data.lastMessage?.content || "No messages yet"} {/* عرض آخر رسالة أو رسالة افتراضية */}
                          </p>
                        </div>

                        {/* وقت آخر رسالة وعدد الرسائل غير المقروءة */}
                        <div className="flex flex-col gap-1 justify-center items-end">
                          <span className="text-[9.99px] text-[#E0E0E0] font-normal">
                            {data.lastMessage?.timestamp
                              ? new Date(data.lastMessage.timestamp).toLocaleTimeString([], {
                                  hour: "2-digit",
                                  minute: "2-digit",
                                })
                              : ""}
                          </span>
                          {data.unreadCount > 0 && ( // إظهار عدد الرسائل غير المقروءة فقط عند وجودها
                            <span className="text-[9.42px] rounded-full w-4 h-4 bg-main-color text-center flex justify-center items-center">
                              {data.unreadCount}
                            </span>
                          )}
                        </div>
                      </div>
                    ))}

               
                {/* End chat section */}
                
   
              </div>
         </section>
           {/*End Left Side Chat */}
     {/* Right Side Chat */}
      <section className="w-3/4 p-3 flex flex-col h-full">
        
        {/* When No Chat is Selected */}
        {!Messages?.user ? ( // Added null check for Messages.user
          <div className="flex w-full  justify-center items-center h-[80vh]">
            <p className="text-white text-[14.54px] font-bold rounded-md p-2 bg-[#4F3C2E]">
              Select a chat to start messaging
            </p>
          </div>
        ) : (
          <>
            {/* Chat Messages */}
            <ChatMessages
              Messages={Messages}
              userData={userData}
              chatContainerRef={chatContainerRef}
              setIsModalOpen={setIsModalOpen}
            />
            
            {/* Chat Input Section */}
            <div className="w-full flex p-3 items-center rounded-b-lg bg-[#1E1E1E]">
              
              {/* Emoji & Input */}
              <div className="flex items-center gap-2 flex-1 relative">
                <button className="p-2 bg-transparent"
                onClick={() => setShowPicker(!showPicker)}
                >
                  <i className="fa-regular fa-face-smile text-gray-500 text-lg"></i>
                </button>
                {showPicker && (
                    <div className="absolute bottom-14 left-0 z-50">
                      <Picker  onEmojiSelect={(e) => setEmoji(e.native)} />
                    </div>
                  )}
                <input
                  className="p-2 bg-transparent w-full focus:outline-none text-white"
                  type="text"
                  placeholder="Type a message..."
                  onChange={handleChange}
                  value={content+emoji}
                />
              </div>

              {/* Actions: Attachment, Recording, Send */}
              <div className="flex gap-2 flex-shrink-0">
                {/* <button className="p-2 bg-transparent">
                  <i className="fa-solid fa-paperclip text-gray-500 text-lg"></i>
                </button> */}
                <button
                  className={`p-2 transition duration-300 flex items-center gap-2 ${
                    isRecording ? "bg-red-500 text-white animate-pulse" : "bg-transparent"
                  } rounded-full`}
                  onClick={isRecording ? stopRecording : startRecording}
                >
                  <i className="fa-solid fa-microphone text-lg"></i>
                  {isRecording && <span className="text-sm">{formatTime(timer)}</span>}
                </button>
                <button 
                  className={`p-2 ${content.trim() ? "bg-[#FA8836]" : "bg-gray-500 cursor-not-allowed"} text-white rounded-lg`} 
                  onClick={Send}
                  disabled={!content.trim()}
                >
                  Send <i className="fa-solid fa-paper-plane"></i>
                </button>
              </div>

            </div>
          </>
        )}
      </section>
      {/* End Right Side Chat */}

          
          
           <Modal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          userData={Messages?.user}
        >
          
         </Modal>
        
        {/*  */}
        {isLoading && 
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <LoadingSpinner />
          </div>
        }
        



        </main>
      </div>
  );
}

export default Chat;
