const SendMedia = async (connection, userId, content) => {
    console.log("Sending media for user:", userId,content);
    console.log("Uploading file:", content);
    console.log("File type:", content.type);
    console.log("File size:", content.size);
    try {
        if (!connection) {
            console.error("SignalR connection is not available.");
            return;
        }

        if (connection.state === "Disconnected") {
            await connection.start();
            console.log("Reconnected to SignalR hub.");
        }

        // رفع الملف قبل الإرسال
        const uploadedFileUrl = await uploadFileService(content);
        console.log(uploadedFileUrl)
        if (!uploadedFileUrl) {
            console.error("File upload failed. Cannot send media message.");
            return;
        }

        console.log("Uploaded file URL:", uploadedFileUrl);

        // إرسال الرسالة عبر SignalR
        await connection.invoke("SendMessage", {
            userId: userId,
            mediaURL: uploadedFileUrl,
            isMedia: true,
        });

        console.log("Media message sent successfully.");
    } catch (err) {
        console.error("Error in SendMedia:", err);
    }
};

// دالة رفع الملف للسيرفر
const uploadFileService = async (file) => {
    console.log(file)
    try {
        const token = localStorage.getItem("token");

        const formData = new FormData();
        formData.append("file", file);

        const res = await fetch(`${process.env.REACT_APP_API_URL}/Upload/UploadVoice`, {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${token}`,
            },
            body: formData,
        });

        if (!res.ok) {
            throw new Error(`Upload failed with status: ${res.status}`);
        }

        const data = await res.json();
        console.log(data)
        return data?.data; // تأكد من أن API يُرجع الرابط الصحيح
    } catch (err) {
        console.error("Error uploading file:", err);
        return null;
    }
};

export default SendMedia;
