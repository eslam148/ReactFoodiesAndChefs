import isJwtTokenValid from "./validateToken";

const checkSignIn = () => {
    try {
        const token = localStorage.getItem("token");

        if (!token || token === "undefined" || !isJwtTokenValid(token)) {
            window.location.href = `/signin?redirect=${window.location.pathname}`;
        }

    } catch (err) {
        console.log(`Failed to check Sign In: ${err}`);
    }
}

export default checkSignIn;