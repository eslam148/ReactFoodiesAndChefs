import { useState } from "react";
import LogoImg from "../../assets/images/logo.webp";
import { useLocation, useNavigate } from "react-router-dom";
import resetPasswordService from "../../services/authentication/resetPassword";
import { useTranslation } from "react-i18next";

function ResetPasswordPage() {
  const { t } = useTranslation();

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const location = useLocation();
  const navigate = useNavigate();

  const params = new URLSearchParams(location.search);
  const email = params.get("email");
  const token = params.get("token");

  const togglePasswordVisibility = (id, iconId) => {
    const input = document.getElementById(id);
    const icon = document.getElementById(iconId);

    if (input.type === "password") {
      input.type = "text";
      icon.classList.remove("fa-eye");
      icon.classList.add("fa-eye-slash");
    } else {
      input.type = "password";
      icon.classList.remove("fa-eye-slash");
      icon.classList.add("fa-eye");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      document.getElementById("error").style.display = "block";
      setErrorMessage("Password does not match");
      return;
    }

    const res = await resetPasswordService(
      email,
      token,
      password,
      confirmPassword
    );

    if (!res) {
      setErrorMessage("An error occurred. Please try again later.");
    } else if (res && res.success) {
      navigate("/signin");
    } else {
      // show error to user
      document.getElementById("error").style.display = "block";
      setErrorMessage(res.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-cover bg-center hero-section ">
      <div className="absolute md:top-1 top-5 rtl:right-5 md:rtl:right-9 ltr:left-5 md:ltr:left-9 z-20">
        <a href="/">
          <img className="h-auto w-1/4 md:w-1/6" src={LogoImg} alt="Logo" />
        </a>
      </div>

      <div className="flex flex-col p-8 rounded-lg sm:w-75 md:w-full max-w-md z-10 bg-[#000000A3] h-[60vh] md:h-[80vh] justify-center ">
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold text-white">
            {t("resetPassword.resetPassword")}
          </h1>
          <h3 className="text-[16px] font-medium text-[#9D9D9D]">
            {t("resetPassword.description")}
          </h3>
        </div>
        <div className="mb-4 flex flex-col relative">
          <label htmlFor="NewPassword" className="text-white text-start">
            {t("resetPassword.password")}
          </label>
          <input
            name="NewPassword"
            type="password"
            autoComplete="on"
            id="NewPassword"
            placeholder={t("resetPassword.newPassword")}
            value={password}
            required
            onChange={(e) => setPassword(e.target.value)}
            className="input-bg w-full px-4 py-2 text-gray-900 bg-gray-100  focus:outline-none focus:ring-2 focus:ring-blue-500"
            data-val="true"
            data-val-required=" this field is required."
          />
          <i
            id="NewPasswordIcon"
            className="fas fa-eye absolute top-9 md:top-7 end-3 md:text-lg text-white cursor-pointer"
            onClick={() =>
              togglePasswordVisibility("NewPassword", "NewPasswordIcon")
            }
          ></i>

          <span
            className="text-red-500 text-start w-full field-validation-valid"
            data-valmsg-for="NewPassword"
            data-valmsg-replace="true"
          ></span>
        </div>
        <div className="mb-4 flex flex-col relative">
          <label className="text-white text-start">
            {t("resetPassword.confirmPassword")}
          </label>
          <input
            type="password"
            autoComplete="on"
            id="ConfirmPassword"
            placeholder={t("resetPassword.confirmPassword")}
            value={confirmPassword}
            required
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="input-bg w-full px-4 py-2 text-gray-900 bg-gray-100  focus:outline-none focus:ring-2 focus:ring-blue-500"
            data-val="true"
            data-val-equalto="The password and confirmation password do not match."
            data-val-equalto-other="*.NewPassword"
            data-val-required=" this field is required."
          />
          <i
            id="ConfirmPasswordIcon"
            className="fas fa-eye absolute top-9 md:top-7 end-3 md:text-lg text-white cursor-pointer"
            onClick={() =>
              togglePasswordVisibility("ConfirmPassword", "ConfirmPasswordIcon")
            }
          ></i>
          <div className="hidden text-red-500 font-bold" id="error">
            {errorMessage}
          </div>
        </div>

        <button
          type="submit"
          style={{ height: "40.76px" }}
          className="w-full mt-6 text-white font-bold  focus:outline-none focus:ring-2 focus:ring-blue-500"
          onClick={handleSubmit}
        >
          {t("resetPassword.resetPassword")}
        </button>
        <div className="text-center my-6">
          <a className="text-white" href="/signin">
            <i className="fa-solid fa-arrow-left mx-2"></i>
            {t("resetPassword.backToSignin")}
          </a>
        </div>
      </div>
    </div>
  );
}

export default ResetPasswordPage;
