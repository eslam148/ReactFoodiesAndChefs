const resetPasswordService = async (email, token, password, confirmPassword) => {
    try {
        const res = await fetch(`${process.env.REACT_APP_API_URL}/User/ResetPassword`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email,
                token,
                newPassword: password,
                comfirm_Password: confirmPassword
            }),
        });

        const data = await res.json();

        return data;
    } catch (err) {
        console.error("resetPasswordService -> error", err);
    }

}

export default resetPasswordService;