const SendMessage = async (connection,userId,content) => {
    console.log(userId)

    try {

        if (connection) {
           // await connection.start();
            await connection.invoke("SendMessage", {
              userId: userId,
              message: content,
            });
         
            // Clean up the connection on component unmount
            return () => {
                connection
                    .stop()
                    .then(() => console.log("Disconnected from backend SignalR hub."))
                    .catch((error) => console.error("Error disconnecting:", error));
            };
        }
    } catch (err) {
        console.log("Error in Chat", err);
    }
}

export default SendMessage;