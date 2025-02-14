import LogoImg from "../../assets/images/logo.webp";
import GoogleImg from "../../assets/images/Google.webp";
import "./styles.css";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import signinService from "../../services/authentication/signin";
import { useNavigate, useSearchParams } from "react-router-dom";

function SignInPage() {
  const { t } = useTranslation();

  const [searchParams] = useSearchParams();
  const redirect = searchParams.get("redirect");

  const [passwordVisible, setPasswordVisible] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Your logic here
    const res = await signinService(email, password);

    if (!res) {
      setError("An error occurred. Please try again later.");
    } else if (res.success) {
      // Redirect to home page
      if (redirect) {
        navigate(redirect);
      } else {
        navigate("/");
      }

      // refresh page to update UI
      window.location.reload();
    } else {
      // show error to user
      setError(t("signin.invalidCredentials"));
    }
  };

  return (
    <div className="SignInPage">
      <div className="min-h-screen flex items-center justify-center bg-cover bg-center hero-section">
        <div className="absolute md:top-1 top-5 rtl:right-5 md:rtl:right-9 ltr:left-5 md:ltr:left-9 z-20">
          <a href="/">
            <img className="h-auto w-1/4 md:w-1/6" src={LogoImg} alt="Logo" />
          </a>
        </div>

        <div
          className="p-8 rounded-lg sm:w-75 md:w-full max-w-md"
          style={{ background: "#000000A3", zIndex: 1 }}
        >
          <div className="text-center mb-6">
            <h1 className="text-3xl font-bold text-white">
              {t("signin.signin")}
            </h1>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="mb-4 flex flex-col">
              <label htmlFor="email" className="sr-only">
                {t("signin.email")}
              </label>
              <input
                type="email"
                name="emailAddress"
                autoComplete="on"
                id="email"
                placeholder={t("signin.email")}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="input-bg w-full px-4 py-2 text-gray-900 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                data-val="true"
                data-val-email="The EmailAddress field is not a valid e-mail address."
                data-val-required="This field is required."
              />
              <span
                className="text-red-500 text-start w-full field-validation-valid"
                data-valmsg-for="EmailAddress"
                data-valmsg-replace="true"
              ></span>
            </div>
            <div className="mb-4 relative flex flex-col">
              <label htmlFor="password" className="sr-only">
                {t("signin.password")}
              </label>
              <input
                type={passwordVisible ? "text" : "password"}
                name="password"
                autoComplete="on"
                id="password"
                placeholder={t("signin.password")}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="input-bg w-full px-4 py-2 text-gray-900 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 pe-10"
                data-val="true"
                data-val-required="This field is required."
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute top-2.5 ltr:right-0 rtl:left-0 px-3 flex items-center bg-transparent"
              >
                <i
                  id="eyeIcon"
                  className={`fas fa-eye${
                    passwordVisible ? "-slash" : ""
                  } text-sm text-white`}
                ></i>
              </button>
              <span
                className="text-red-500 text-start w-full field-validation-valid"
                data-valmsg-for="Password"
                data-valmsg-replace="true"
              ></span>
            </div>
            <div className="flex flex-col items-start justify-between text-sm text-white leading-relaxed">
              <a
                className="hover:underline text-blue-500"
                href="/forgotPassword"
              >
                {t("signin.forgotPassword")}
              </a>
              <span>
                {t("signin.dontHaveAccount")}{" "}
                <a className="hover:underline text-blue-500" href="/signup">
                  {t("signin.createAccount")}
                </a>
              </span>
            </div>
            <button
              type="submit"
              style={{ height: "40.76px" }}
              className="w-full mt-6 text-white font-bold focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {t("signin.signin")}
            </button>
            <div className="hidden text-red-500 font-bold" id="error">
              {error}
            </div>
          </form>
          <div className="flex items-center justify-center my-4 w-3/4 mx-auto">
            <div className="border-t border-white flex-grow mr-3"></div>
            <span className="text-white font-medium">OR</span>
            <div className="border-t border-white flex-grow ml-3"></div>
          </div>
          <a
            name="provider"
            style={{ fontSize: "18px", height: "39.42px", color: "#464343" }}
            className="w-full mt-4 bg-white font-semibold py-2 rounded-lg flex items-center justify-center shadow-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
            href={`https://khaledyk-001-site4.atempurl.com/UserEvent/ExternalLogin?provider=Google&amp;fromSignin=true`}
          >
            <img src={GoogleImg} alt="Google Icon" className="w-5 h-5 mr-2" />
            {t("signin.signinWithGoogle")}
          </a>
        </div>
      </div>
    </div>
  );
}

export default SignInPage;
