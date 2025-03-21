// const handleCredentialResponse = async (response) => {
//     console.log("Google Response:", response);

//     if (response.credential) {
//         try {
//             const res = await fetch(`${process.env.REACT_APP_API_URL}/User/google-sign-in`, {
//                 method: "POST",
//                 headers: { "Content-Type": "application/json" },
//                 body: JSON.stringify({
//                     tokenId: response.credential,
//                  // Set role dynamically if needed
//                 }),
//             });

//             const data = await res.json();
//             if (res.ok) {
//                 localStorage.setItem("jwt", data.Token);
//                 console.log("Login Successful:", data);
//                 localStorage.setItem("token", res.token);
//                 localStorage.setItem("user", JSON.stringify(res.data));
//             } else {
//                 console.error("Login Failed:", data);
//             }
//         } catch (err) {
//             console.error("Google Sign-In Error:", err);
//         }
//     } else {
//         console.warn("No credential received from Google.");
//     }
// };

// const googleSignInService = () => {

//     try {
//         if (!window.google) {
//             console.error("Google Identity script not loaded.");
//             return;
//         }

//         window.google.accounts.id.initialize({
//             client_id: process.env.REACT_APP_GOOGLE_CLIENT_ID,
//             callback: handleCredentialResponse,
//         });

//         window.google.accounts.id.prompt();
//         console.log( process.env.REACT_APP_GOOGLE_CLIENT_ID)

//     } catch (err) {
//         console.error("Google Sign-In Error:", err);
//     }
// };

// export default googleSignInService;

const googleSignInService = async (tokenId,role = "Foodies") => {
    console.log({
        tokenId,
        role
   
    })
    try {
        const res = await fetch(`${process.env.REACT_APP_API_URL}/User/google-sign-in`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                tokenId,
                role
           
            }),
        });

        const data = await res.json();
        if (res.ok) {
            
            console.log("Login Successful:", data);
            localStorage.setItem("token", data.token);
            localStorage.setItem("user", JSON.stringify(data.data));
          //  navigate("/");
          return true;
        } else {
            console.error("Login Failed:", data);
            return false;
        }
    } catch (err) {
        console.error("Google Sign-In Error:", err);
    }
  
}; 
export default googleSignInService;