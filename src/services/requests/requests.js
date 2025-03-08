export const getAllRequestsService = async (status, page = 1, pageSize = 10) => {
    try {
        const token = localStorage.getItem("token");

        const res = await fetch(`${process.env.REACT_APP_API_URL}/Chef/GetMyOffers?page=${page}&pageSize=${pageSize}&status=${status}`, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });

        const data = await res.json();

        return data;
    } catch (err) {
        console.log("Failed to get all Offers");
        console.log(err);
    }
};

export const getRequestByIdService = async (requestId) => {
    try {

    } catch (err) {
        console.log("Failed to get request");
        console.log(err);
    }
}

export const acceptRequestService = async (requestId, requestDetails) => {
    try {

    } catch (err) {
        console.log("Failed to accept request");
        console.log(err);
    }
}

export const saveRequestService = async (eventId) => {
    try {
        const token = localStorage.getItem("token");

        const res = await fetch(`${process.env.REACT_APP_API_URL}/Chef/SaveOrder?eventId=${eventId}`, {
            method: "POST",
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });

        const data = await res.json();

        return data;
    } catch (err) {
        console.log("Failed to save request");
        console.log(err);
    }
}

export const declineRequestService = async (requestId, requestDetails) => {
    try {

    } catch (err) {
        console.log("Failed to decline request");
        console.log(err);
    }
}