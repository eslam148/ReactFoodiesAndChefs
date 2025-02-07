import { useTranslation } from "react-i18next";
import LogoImg from "../../assets/images/logo.webp";
import "./styles.css";
import { useState } from "react";
import forgotPasswordService from "../../services/authentication/forgotPassword";
import { useNavigate } from "react-router-dom";

function ForgotPasswordPage() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const [email, setEmail] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const redirectUrl = `${window.location.origin}/resetPassword`;

    // Call the service here
    const res = await forgotPasswordService(email, redirectUrl);

    if (res?.success) {
      navigate(
        `/forgotPassword/confirmEmail?email=${encodeURIComponent(
          email
        )}&url=${encodeURIComponent(redirectUrl)}`
      );
    } else {
      document.getElementById("error").style.display = "block";
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-cover bg-center hero-section">
      <div className="absolute md:top-1 top-5 ltr:left-5 rtl:right-5 md:ltr:left-9 md:rtl:right-9 z-20">
        <a href="/">
          <img className="h-auto w-1/4 md:w-1/6" src={LogoImg} alt="Logo" />
        </a>
      </div>

      <form
        className="flex flex-col p-8 rounded-lg sm:w-75 md:w-full max-w-md z-10 bg-[#000000A3] h-[50vh] md:h-[80vh] justify-center"
        onSubmit={handleSubmit}
        method="post"
      >
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold text-white">
            {t("forgotPassword.forgotPassword")}
          </h1>
          <h3 className="text-[16px] font-medium text-[#9D9D9D]">
            {t("forgotPassword.description")}
          </h3>
        </div>
        <div className="mb-4 flex flex-col">
          <label htmlFor="email" className="text-white text-start mb-2">
            {t("forgotPassword.email")}
          </label>
          <input
            name="email"
            type="email"
            autoComplete="on"
            placeholder={t("forgotPassword.emailPlaceholder")}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="input-bg w-full px-4 py-2 text-gray-900 bg-gray-100  focus:outline-none focus:ring-2 focus:ring-blue-500"
            data-val="true"
            data-val-email="The Email field is not a valid e-mail address."
            data-val-required="The Email field is required."
          />
          <span
            className="text-red-500 text-start w-full field-validation-valid"
            data-valmsg-for="Email"
            data-valmsg-replace="true"
          ></span>
        </div>
        <button
          type="submit"
          style={{ height: "40.76px" }}
          className="w-full mt-6 text-white font-bold  focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          {t("forgotPassword.sendResetLink")}
        </button>
        <div className="hidden text-red-500 font-bold" id="error">
          {t("forgotPassword.invalidEmail")}
        </div>
        <div className="text-center my-6">
          <a className="text-white" href="/signin">
            <i className="fa-solid fa-arrow-left mx-2"></i>
            {t("forgotPassword.backToSignin")}
          </a>
        </div>
      </form>
    </div>
  );
}

export default ForgotPasswordPage;
