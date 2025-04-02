import uploadFileService from "../uploadFileService";

const uploadProfilePicture = async (file, token) => {
    try {
        let res = await uploadFileService(file);

        if (res.success) {
            const imageUrl = res.data;

            const jsonData = {
                ProfileImageLink: imageUrl,
            }

            const queryParams = new URLSearchParams(jsonData).toString();

            res = await fetch(`${process.env.REACT_APP_API_URL}/User/EditProfile?${queryParams}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`,
                },
            });

            if (!res.ok) {
                const errorDetails = await res.text();
                throw new Error(`Failed to update profile picture: ${res.status} - ${errorDetails}`);
            }

            const data = await res.json();

            console.log("Changed Profile Picture");
            console.log(data);

            return data;
        } else {
            return res;
        }
    } catch (error) {
        console.error("Upload failed:", error);
        return { success: false, message: error.message };
    }
}

export default uploadProfilePicture;