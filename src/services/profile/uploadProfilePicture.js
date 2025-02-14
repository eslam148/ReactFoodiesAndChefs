import uploadFileService from "../uploadFileService";

const uploadProfilePicture = async (file, token) => {
    try {
        let res = await uploadFileService(file, token);

        console.log("Upload Profile Picture");

        console.log(res);

        if (res.success) {
            const imageUrl = res.data;

            // set the new profile picture
            res = await fetch(`https://${process.env.REACT_APP_API_DOMAIN}/User/UploadProfileImage`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`,
                },
                mode: "no-cors",
                body: JSON.stringify({ imageUrl }),
            });

            const data = await res.json();

            console.log("Profile Picture Upload");
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