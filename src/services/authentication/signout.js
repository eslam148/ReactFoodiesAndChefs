function signoutService(navigate) {
    // remove token and user from local storage
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    // redirect to signin page
    navigate("/signin");

    // refresh page to update UI
    window.location.reload();
}

export default signoutService;