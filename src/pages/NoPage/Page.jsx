import { useNavigate } from "react-router-dom";
import DishImg from "../../assets/images/dish.webp";

function NoPage() {
  const navigate = useNavigate();

  return (
    <div className="mainbg h-[100vh] text-white flex items-center justify-center">
      <img
        src={DishImg}
        alt="Background"
        className="hidden md:block absolute inset-0 m-auto h-full object-cover opacity-40 mt-32"
      ></img>
      <div className="text-center z-10">
        <h2 className="font-bold text-2xl md:text-4xl mt-5 plus-jakarta-sans z-10">
          No Page Found
        </h2>
        <button
          type="submit"
          className="w-full mt-6 text-white bg-main-color font-bold focus:outline-none focus:ring-2 hover:bg-main-dark-color rounded-lg"
          style={{ height: "40.76px" }}
          onClick={() => navigate("/")}
        >
          Home Page
        </button>
      </div>
    </div>
  );
}

export default NoPage;
