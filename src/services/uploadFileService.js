const uploadFileService = async (file) => {
    try {
        const token = localStorage.getItem("token");

        const formData = new FormData();
        formData.append("file", file);

        const res = await fetch(`${process.env.REACT_APP_API_URL}/Upload/UploadFile`, {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${token}`,
            },
            body: formData,
        });

        if (!res.ok) {
            const errorDetails = await res.text();
            throw new Error(`Upload failed: ${res.status} - ${errorDetails}`);
        }

        const data = await res.json();

        return data;
    } catch (err) {
        console.error("Error in uploadFileService:", err);
        return { success: false, message: err.message };
    }
}

export default uploadFileService;