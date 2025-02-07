const editProfileService = async (userData) => {
    try {
        const res = await fetch('http://localhost:5000/api/users/editProfile', {});
    } catch (error) {
        console.log(error);
    }
}

export default editProfileService;