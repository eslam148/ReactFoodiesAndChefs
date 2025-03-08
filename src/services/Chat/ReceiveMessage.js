const ReceiveMessage = async (connection, setMessages,setChats) => {
    console.log("Starting ReceiveMessage...");

    if (!connection) {
        console.error("SignalR connection is not available.");
        return;
    }

    try {
        if (connection.state === "Disconnected") {
            await connection.start();
            console.log("SignalR connection started successfully.");
        }

       
        connection.off("ReceiveMessage");

        connection.on("ReceiveMessage", (ChatsId,message) => {
            console.log("Received messageeeeee:", ChatsId,message);
            setMessages(prevChats => ({
                ...prevChats,
                data: [...prevChats.data, message]
            }));
            setChats(prevChats => {
               
                // التحقق مما إذا كانت المحادثة موجودة بالفعل
                const chatExists = prevChats.data.some(chat => chat.chatId === ChatsId);
            
                if (!chatExists) {
                    return {
                        ...prevChats,
                        data: [...prevChats.data, { chatId: ChatsId, lastMessage: message }]
                    };
                }
            
                // تحديث `lastMessage` في المحادثة الصحيحة
                const updatedChats = prevChats.data.map(chat => {
                    if (chat.chatId === ChatsId) {
                        return { ...chat, lastMessage: message };
                    }
                    return chat;
                });
            
                return {
                    ...prevChats,
                    data: updatedChats
                };
            });
            
            
        });

        
        connection.onclose(async () => {
            console.warn("SignalR connection lost. Reconnecting...");
            setTimeout(async () => {
                try {
                    await connection.start();
                    console.log("Reconnected to SignalR hub.");
                } catch (err) {
                    console.error("Reconnection failed:", err);
                }
            }, 5000); // محاولة إعادة الاتصال بعد 5 ثوانٍ
        });

        // تنظيف الحدث عند إلغاء التثبيت
        return () => {
            connection.off("ReceiveMessage");
            connection.stop()
                .then(() => console.log("Disconnected from SignalR hub."))
                .catch((error) => console.error("Error disconnecting:", error));
        };
    } catch (err) {
        console.error("Error in ReceiveMessage function:", err);
    }
};

export default ReceiveMessage;
