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
        throw new Error("getRequestByIdService is not implemented yet.");
    } catch (err) {
        console.error("Failed to get request by ID:", err);
        return { success: false, message: err.message };
    }
}

export const acceptRequestService = async (requestId, requestDetails) => {
    try {
        throw new Error("acceptRequestService is not implemented yet.");
    } catch (err) {
        console.error("Failed to accept request:", err);
        return { success: false, message: err.message };
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
        throw new Error("declineRequestService is not implemented yet.");
    } catch (err) {
        console.error("Failed to decline request:", err);
        return { success: false, message: err.message };
    }
}

export const ChefAcceptRequest = async (eventId,order) => {
      order.id=crypto.randomUUID()
      order.eventId = eventId
        

    try {
        const token = localStorage.getItem("token");
        if (!token) {
            throw new Error("No authentication token found");
        }

        console.log("Token:", token);  // للتحقق من التوكن
        console.log("Order Data:", order);  // لمراجعة البيانات المرسلة

        const res = await fetch(`${process.env.REACT_APP_API_URL}/Chef/AcceptOrder`, {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${token}`,
                "Content-Type": "application/json-patch+json" // جرّب التغيير إلى هذا
            },
            body: JSON.stringify(order)
        });

        if (!res.ok) {
            const errorMessage = await res.text();
            throw new Error(`Error: ${res.status} - ${errorMessage}`);
        }

        return await res.json();
    } catch (err) {
        console.error("Failed to submit request:", err);
        return { success: false, message: err.message || "Request failed" };
    }
};

export const CheckRequest = async(eventId)=>{
    try {
        const token = localStorage.getItem("token");

        const res = await fetch(`${process.env.REACT_APP_API_URL}/Chef/CheckRequest?eventid=${eventId}`, {
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
}


export const ChefSaveRequest = async (eventId) => {
    
      

  try {
      const token = localStorage.getItem("token");
      if (!token) {
          throw new Error("No authentication token found");
      }

  
      const res = await fetch(`${process.env.REACT_APP_API_URL}/Chef/SaveOrder?eventId=${eventId}`, {
          method: "POST",
          headers: {
              "Authorization": `Bearer ${token}`,
              "Content-Type": "application/json-patch+json" // جرّب التغيير إلى هذا
          }
        
      });

      if (!res.ok) {
          const errorMessage = await res.text();
          throw new Error(`Error: ${res.status} - ${errorMessage}`);
      }

      return await res.json();
  } catch (err) {
      console.error("Failed to submit request:", err);
      return { success: false, message: err.message || "Request failed" };
  }
};
