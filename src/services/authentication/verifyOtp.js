const verifyOtpService = async (otp, userId) => {
    try {
        const res = await fetch(`${process.env.REACT_APP_API_URL}/User/VerifyOtp`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ userId, verificationCode: otp }),
        });

        const data = await res.json();

        return data;
    } catch (err) {
        console.error(err);
    }
}

export default verifyOtpService;