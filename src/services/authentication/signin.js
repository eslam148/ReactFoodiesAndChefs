const signinService = async (email, password) => {
    try {
        const res = await fetch(`https://${process.env.REACT_APP_API_DOMAIN}/User/SignIn`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ emailAddress: email, password, returnUrl: "/" }),
        });

        const signinData = await res.json();

        console.log(signinData);
        console.log(signinData);

        if (signinData.success) {
            localStorage.setItem("token", signinData.token);
            localStorage.setItem("user", JSON.stringify(signinData.data));
        }

        return signinData;
    } catch (err) {
        console.log("Failed to sign in", err);
    }
}

export default signinService;