import { useEffect, useState } from "react";
import LogoImg from "../../assets/images/logo.webp";
import "./styles.css";
import { useTranslation } from "react-i18next";
import verifyOtpService from "../../services/authentication/verifyOtp";
import { useLocation, useNavigate } from "react-router-dom";

function VerifyOtpPage() {
  const { t } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();

  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [email, setEmail] = useState("yasser@gmail.com");
  const [resetTimerLeft, setResetTimerLeft] = useState(60);
  const [isResetDisabled, setIsResetDisabled] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    setEmail((email) =>
      email.replace(
        /(.{3})(.*)(@.*)/,
        (_, a, b, c) => a + b.replace(/./g, "*") + c
      )
    );
  }, [email]);

  useEffect(() => {
    if (resetTimerLeft > 0) {
      const timer = setInterval(() => {
        setResetTimerLeft((prev) => prev - 1);
      }, 1000);

      return () => clearInterval(timer);
    } else {
      setIsResetDisabled(false);
    }
  }, [resetTimerLeft]);

  const handleOtpChange = (e, index) => {
    const value = e.target.value;
    if (/[^0-9]/.test(value)) return; // Only allow numbers

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Move to next input when a digit is entered
    if (value && index < otp.length - 1) {
      const nextInput = document.getElementById(`otp-input-${index + 1}`);
      nextInput && nextInput.focus();
    }
  };

  const handleOtpKeyDown = (e, index) => {
    // Go to the previous input if backspace is pressed
    if (e.key === "Backspace" && index > 0 && !otp[index]) {
      const prevInput = document.getElementById(`otp-input-${index - 1}`);
      prevInput && prevInput.focus();
    }
  };

  const handleReset = () => {
    setResetTimerLeft(60);
    setIsResetDisabled(true);
  };

  const handleConfirm = async () => {
    const queryParams = new URLSearchParams(location.search);
    const userId = queryParams.get("userId");

    const res = await verifyOtpService(otp.join(""), userId);

    if (!res) {
      setError(t("Failed to verify OTP, please try again"));
    } else if (res.success) {
      // Redirect to the next page
      navigate("/signin");
    } else {
      setError(res.message);
    }
  };

  return (
    <main className="min-h-screen overflow-auto" id="app-body">
      <div className="min-h-screen flex items-center justify-center bg-cover bg-center hero-section">
        <div className="absolute md:top-1 top-5 rtl:right-5 md:rtl:right-9 ltr:left-5 md:ltr:left-9 z-20">
          <a href="/">
            <img className="h-auto w-1/4 md:w-1/6" src={LogoImg} alt="Logo" />
          </a>
        </div>

        <div className="p-8 rounded-lg sm:w-75 md:w-full max-w-md z-10 h-96 bg-black bg-opacity-60">
          {/* OTP Input Boxes */}
          <div className="text-center mb-6">
            <h1 className="text-3xl font-bold text-white">
              {t("verifyOtp.checkYourEmail")}
            </h1>
          </div>
          <div className="text-center mb-6">
            <p className="text-[16px] font-medium text-[#9D9D9D]">
              {t("verifyOtp.description")} {email}
            </p>
          </div>

          <div
            className="flex justify-center space-x-4 mb-5 text-white"
            dir="auto"
          >
            {otp.map((digit, index) => (
              <input
                key={index}
                id={`otp-input-${index}`}
                type="text"
                value={digit}
                maxLength={1}
                className="w-12 h-12 text-2xl text-center border-2 border-gray-500 bg-gray-600 bg-opacity-10 rounded-lg focus:border-orange-500 focus:ring-1 focus:ring-orange-400 focus:outline-none"
                onChange={(e) => handleOtpChange(e, index)}
                onKeyDown={(e) => handleOtpKeyDown(e, index)}
                autoFocus={index === 0} // Focus on the first input initially
              />
            ))}
          </div>
          <div id="error" className="font-medium text-lg text-red-500 mb-6">
            {error}
          </div>

          {/* Confirm Button */}
          <button
            id="confirm-btn"
            className="flex justify-center items-center m-auto w-72 h-12 bg-[#4136A3] text-white text-xl rounded-lg shadow-md hover:bg-transparent hover:border-4 hover:border-[#4136A3] hover:text-[#4136A3] focus:outline-none"
            onClick={handleConfirm}
          >
            <span id="btn-text">{t("verifyOtp.confirm")}</span>
            <div id="loading-spinner" className="hidden spinner"></div>
          </button>

          {/* Resend Section */}
          <div className="mt-4 text-sm text-gray-300">
            <span>{t("verifyOtp.didntReceiveCode")} </span>
            <button
              onClick={handleReset}
              id="resend-link"
              className={`text-lg bg-transparent 
                ltr:mr-1 rtl:ml-1 
                ${
                  isResetDisabled
                    ? "cursor-not-allowed text-gray-400 font-medium"
                    : "text-main-color font-bold"
                }`}
            >
              {t("verifyOtp.resend")}
            </button>
            <span id="timer" className="text-main-color font-medium">
              {t("verifyOtp.in")}{" "}
              {`${Math.floor(resetTimerLeft / 60)}:${(resetTimerLeft % 60)
                .toString()
                .padStart(2, "0")}`}
            </span>
          </div>
        </div>
      </div>
    </main>
  );
}

export default VerifyOtpPage;
