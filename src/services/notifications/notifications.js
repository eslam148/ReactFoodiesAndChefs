const updateNotifications = async (connection, setNotifications) => {
    try {
        if (connection) {
            await connection.start();

            connection.on("ReceiveNotification", (notifications) => {
                // console.log(notifications);

                /**
                 * notifications variable sometimes return an array and sometime returns a js object
                 * returns an array when you opens the website, refresh the page, or go to another page
                 * returns a js object when a new notification comes
                 */

                if (Array.isArray(notifications)) {
                    setNotifications(notifications);
                } else if (notifications && typeof notifications === "object") {
                    setNotifications((prevNotifications) => {
                        if (prevNotifications) {
                            return [notifications, ...prevNotifications]
                        } else {
                            return notifications
                        }

                    })
                } else {
                    console.log("It's neither an array nor an object!");
                }

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
        console.log("Error in notifications", err);
    }
}

export default updateNotifications;