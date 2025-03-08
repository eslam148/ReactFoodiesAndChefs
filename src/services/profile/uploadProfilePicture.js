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

            // set the new profile picture
            res = await fetch(`${process.env.REACT_APP_API_URL}/User/EditProfile?${queryParams}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`,
                },
            });

            const data = await res.json();

            console.log("Chnaged Profile Picture");
            console.log(data);

            return data;
        } else {
            return res;
        }
    } catch (error) {
        console.error("Upload failed:", error);
    }
}

export default uploadProfilePicture;