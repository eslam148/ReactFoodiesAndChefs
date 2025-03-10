export const getEventByEventIdService = async (eventId) => {
    try {
        const token = localStorage.getItem("token");

        const res = await fetch(`${process.env.REACT_APP_API_URL}/Home/GetEventById?eventId=${eventId}`, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`,
            }
        });

        const eventData = await res.json();

        return eventData;
    } catch (err) {
        console.log(`Failed to get event by event id: ${eventId}`);
        console.log(err);
    }
}

export const getAllEventsService = async (pageNum = 1, pageSize = 10) => {
    try {
        const token = localStorage.getItem("token");

        const res = await fetch(`${process.env.REACT_APP_API_URL}/Home/GetMyEvents?page=${pageNum}&pageSize=${pageSize}`, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`,
            }
        });

        const eventsData = await res.json();

        return eventsData;
    } catch (err) {
        console.log("Failed to get all events");
        console.log(err);
    }
}

export const createEventService = async (event) => {
    try {
        const token = localStorage.getItem("token")

        const res = await fetch(`${process.env.REACT_APP_API_URL}/Home/CreateEvent`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`,
            },
            body: JSON.stringify(event),
        })

        const data = await res.json();

        console.log(data);

        return data
    } catch (err) {
        console.log("Failed to create event");
        console.log(err);
    }
}

export const updateEventService = async (event) => {
    try {
        const token = localStorage.getItem("token")

        console.log(event);


        const res = await fetch(`${process.env.REACT_APP_API_URL}/Home/EditEvent`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`,
            },
            body: JSON.stringify(event),
        })

        const data = await res.json();

        console.log(data);

        return data;

    } catch (err) {
        console.log("Failed to update event");
        console.log(err);
    }
}


export const SetMySelf = async (menuId, eventId) => {
    try {
        const token = localStorage.getItem("token");

        const res = await fetch(`${process.env.REACT_APP_API_URL}/Home/SetMySelfChef?menuId=${menuId}&eventId=${eventId}`, {
            method: "GET",  // Change to GET
            headers: {
                "Authorization": `Bearer ${token}`,
            },
        });

        const data = await res.json();
        console.log(data);

        return data;
    } catch (err) {
        console.log("Failed to send request:", err);
    }
};

export const AddHostprice = async (event) => {
    try {
        const token = localStorage.getItem("token")

        console.log(event);


        const res = await fetch(`${process.env.REACT_APP_API_URL}/Home/AddHostPrice`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`,
            },
            body: JSON.stringify(event),
        })

        const data = await res.json();

        console.log(data);

        return data;

    } catch (err) {
        console.log("Failed to update event");
        console.log(err);
    }
}
