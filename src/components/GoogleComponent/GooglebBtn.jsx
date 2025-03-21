import { GoogleOAuthProvider, useGoogleLogin } from "@react-oauth/google";
  import { useTranslation } from "react-i18next";
  import GoogleImg from "../../assets/images/Google.webp";
  import { useNavigate, useSearchParams } from "react-router-dom";
import googleSignInService from "../../services/authentication/google"
const GoogleSignInButton = ({ UserRole = "Foodies" }) => {
    const { t } = useTranslation();
    const navigate = useNavigate();

    const login = useGoogleLogin({
        onSuccess: async (tokenResponse) => {
            // console.log("Token Response:", tokenResponse); 
            // Check if id_token is present
           
    
            const isLoggedIn = await googleSignInService(tokenResponse.access_token,UserRole);
            if (isLoggedIn) {
                navigate("/");
            }
        },
        onError: () => console.error("Login Failed"),
        ux_mode: "popup",  // Forces popup instead of redirect
        scope: "openid email profile", // Explicitly request OpenID scopes
    });
    

    return (
        <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}>
            <button
                onClick={login}
                name="provider"
                style={{ fontSize: "18px", height: "39.42px", color: "#464343" }}
                className="w-full mt-4 bg-white font-semibold py-2 rounded-lg flex items-center justify-center shadow-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"            >
                <img src={GoogleImg} alt="Google Icon" className="w-5 h-5 mr-2" />
                {t("signin.signinWithGoogle")}
            </button>
        </GoogleOAuthProvider>
    );
};

export default GoogleSignInButton;
