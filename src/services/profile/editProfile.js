const editProfileService = async (userData) => {
    try {
        const token = localStorage.getItem('token');

        console.log(userData);

        userData = {
            FirstName: userData.firstName,
            LastName: userData.lastName,
            Email: userData.email,
            PhoneNumber: userData.phoneNumber,
            Role: userData.role,
            Description: userData.description,
            ProfileImageLink: userData.profileImageLink,
            Country: userData.country,
            City: userData.city,
            FacebookAccount: userData.facebookAccount,
            InsragramAccount: userData.instagramAccount,
            XAccount: userData.xAccount,
        }

        console.log(userData);


        // Convert JSON object to query string
        const queryParams = new URLSearchParams(userData).toString();

        const url = `${process.env.REACT_APP_API_URL}/User/EditProfile?${queryParams}`;

        const res = await fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
        });

        const data = await res.json();

        return data
    } catch (error) {
        console.log(error);
    }
}

export default editProfileService;