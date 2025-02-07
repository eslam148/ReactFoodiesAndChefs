const resetLocalStorage = () => {
    // Clear the localStorage
    localStorage.removeItem('user');
    localStorage.removeItem('token');
}

export default resetLocalStorage;