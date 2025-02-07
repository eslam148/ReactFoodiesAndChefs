const signupService = async (data) => {
    try {
        const response = await fetch(`http://${process.env.REACT_APP_API_DOMAIN}/User/SignUp`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                firstName: data.firstName,
                lastName: data.lastName,
                email: data.email,
                countryCode: data.countryCode,
                phone: data.phone,
                password: data.password,
                comfirm_Password: data.confirmPassword,
                role: data.role,
            }),
        });

        const res = await response.json();

        return res;
    } catch (error) {
        throw error;
    }
}

export default signupService;
