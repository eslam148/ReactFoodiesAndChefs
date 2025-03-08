import { useState } from "react";
import "./styles.css";

function PrimaryButton({ title, onClickFunction, type }) {
  const [isLoading, setIsLoading] = useState(false);
  return (
    <button
      type={type}
      className={`px-4 py-2 mt-10 text-lg font-bold bg-[#4136a3] ${
        isLoading
          ? "cursor-not-allowed bg-transparent"
          : "cursor-pointer bg-[#4136a3]"
      }`}
      onClick={() => {
        setIsLoading(true);

        onClickFunction();

        setIsLoading(false);
      }}
    >
      {isLoading ? `${title}...` : title}
    </button>
  );
}

export default PrimaryButton;
