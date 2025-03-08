export const getAllInvitesService = async (status, page = 1, pageSize = 10) => {
    try {
        const token = localStorage.getItem("token")

        const res = await fetch(`${process.env.REACT_APP_API_URL}/Home/GetMyInvetations?page=${page}&pageSize=${pageSize}&filters=${status}`, {
            method: 'GET',
            headers: {
                "Authorization": `Bearer ${token}`
            }
        })

        const data = await res.json()

        return data;
    } catch (err) {
        console.log("Failed to get invites.");
        console.log(err);
    }
}