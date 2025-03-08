const handleCredentialResponse = (response) => {
    console.log('Response from googleSignIn');
    console.log(response);
}

const googleSignInService = () => {
    try {
        window.google.accounts.id.initialize({
            client_id: process.env.REACT_APP_GOOGLE_CLIENT_ID,
            callback: handleCredentialResponse,
        });

        window.google.accounts.id.prompt();

    } catch (err) {
        console.log('Error in googleSignIn');
        console.log(err);
    }
}

export default googleSignInService;