const getMessageByChatId = async (connection, setMessages, _ChatId) => {
    try {
        if (!connection) {
            console.error("Connection is not available.");
            return;
        }

        // تحقق مما إذا كان الاتصال قد بدأ
        if (connection.state !== "Connected") {
            await connection.start();
            console.log("Connection started successfully.");
        }

        // تأكد من عدم تسجيل `connection.on` أكثر من مرة
        connection.off("ChatMessage");
        connection.on("ChatMessage", (userId, messages) => {
            if (!messages || !Array.isArray(messages.data)) {
                console.error("Invalid messages received:", messages);
                return;
            }

            // ترتيب الرسائل من الأحدث إلى الأقدم
            messages.data = messages.data.sort(
                (a, b) => new Date(a.timestamp) - new Date(b.timestamp)
            );

           console.log("Form Message",messages)
            setMessages(messages);
        });

        // استدعاء الرسائل من السيرفر
        await connection.invoke("GetChatMessage", {
            PageNumber: 0,
            PageSize: 10,
            chatId: _ChatId
        }).catch(err => console.error("Error invoking GetChatMessage:", err));

        // تنظيف الاتصال عند تفكيك الكومبوننت
        return () => {
            connection.stop()
                .then(() => console.log("Disconnected from backend SignalR hub."))
                .catch(error => console.error("Error disconnecting:", error));
        };
    } catch (err) {
        console.error("Error in getMessageByChatId:", err);
    }
};

export default getMessageByChatId;
