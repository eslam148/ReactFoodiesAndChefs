import React from "react";
import { useTranslation } from "react-i18next";

function LanguageButton() {
  const { i18n } = useTranslation();

  const handleLanguageChange = (lang) => {
    i18n.changeLanguage(lang);

    // Reload the page to apply the changes
    window.location.reload();
  };

  return (
    <button
      className="menu-item text-white bg-transparent font-bold text-lg hover:text-orange-500 rounded-[35px]"
      onClick={() => handleLanguageChange(i18n.language === "en" ? "ar" : "en")}
      style={{ cursor: "pointer" }}
    >
      <span>
        <i className="fa-solid fa-globe" />{" "}
        {i18n.language === "en" ? "Ar" : "En"}
      </span>
    </button>
  );
}

export default LanguageButton;
