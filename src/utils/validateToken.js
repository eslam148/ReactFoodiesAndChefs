import { jwtDecode } from "jwt-decode";

const isJwtTokenValid = (token) => {
    if (!token) return false;

    try {
        const decoded = jwtDecode(token);

        const currentTime = Date.now() / 1000;

        if (decoded.exp < currentTime) {
            return false;
        }

        return true;
    } catch (error) {
        console.error("Invalid token", error);
        return false;
    }
};

export default isJwtTokenValid;