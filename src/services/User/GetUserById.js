export const getUserByIdsService = async (id) => {
    try {
        const token = localStorage.getItem("token");

        const res = await fetch(`${process.env.REACT_APP_API_URL}/User/GetUserById?id=${id}`, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`,
            }
        });

        const USerData = await res.json();
        
        return USerData;
    } catch (err) {
        console.log("Failed to get all events");
        console.log(err);
    }
}
