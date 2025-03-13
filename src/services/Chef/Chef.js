export const GetChefsService = async () => {
    try {
        const token = localStorage.getItem("token")

 


        const res = await fetch(`${process.env.REACT_APP_API_URL}/Home/Chefs?page=1&pageSize=10`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`,
            },

        })

        const data = await res.json();

        // console.log(data);

        return data;

    } catch (err) {
        console.log("Failed to update event");
        console.log(err);
    }
}


export const GetChefById = async (id) => {
    try {
        const token = localStorage.getItem("token")

 


        const res = await fetch(`${process.env.REACT_APP_API_URL}/Home/ShowChefProfile?chefId=${id}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`,
            },

        })

        const data = await res.json();

        // console.log(data);

        return data;

    } catch (err) {
        console.log("Failed to update event");
        console.log(err);
    }
}
