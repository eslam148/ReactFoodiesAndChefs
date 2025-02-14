import FacebookIcon from "../../assets/images/facebook.svg";
import XIcon from "../../assets/images/X.svg";
import InstagramIcon from "../../assets/images/instagram.svg";
import ProfileTempImg from "../../assets/images/profileTemp.webp";
import { useNavigate } from "react-router-dom";
import "./styles.css";
import { useRef, useState } from "react";
import isJwtTokenValid from "../../utils/validateToken";
import uploadProfilePicture from "../../services/profile/uploadProfilePicture";

function ProfileForm({ isEditable, userData, setUserData }) {
  const navigate = useNavigate();

  // const [file, setFile] = useState(null);
  const [error, setError] = useState("");
  const [preview, setPreview] = useState(
    userData?.profileImage
      ? `http://${process.env.REACT_APP_API_DOMAIN}/${userData.profileImage}`
      : ProfileTempImg // Replace with a placeholder
  );
  const fileInputRef = useRef(null);

  const uploadImage = async (file) => {
    const token = localStorage.getItem("token");

    console.log("validating token");

    if (!token || !isJwtTokenValid(token)) {
      return;
    }

    console.log("Token is valid");

    console.log("File:", file);
    console.log("Token", token);

    if (file && token) {
      console.log("Uploading image...");
      const res = await uploadProfilePicture(file, token);

      if (!res || !res.success) {
        setError("Failed to upload image. Please try again.");
      } else {
        setUserData((prevData) => ({ ...prevData, profileImage: res.data }));
      }
    }
  };

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      // setFile(selectedFile);

      uploadImage(selectedFile); // upload the image

      setPreview(URL.createObjectURL(selectedFile)); // Preview image before upload
    }
  };

  // Trigger file input when button is clicked
  const handleButtonClick = () => {
    console.log("Button clicked");

    fileInputRef.current.click();
  };

  return (
    <section className="CreateEventpgMobile min-h-screen mainbg relative md:min-h-full flex flex-col w-full items-center p-3 md:p-5 z-10 text-start lato-bold md:pl-10">
      <div className="flex flex-col justify-center h-1/2 w-full space-y-5">
        {/* Title */}
        <h1>{isEditable ? "Edit Profile" : "Profile"}</h1>

        {/* Profile Picture */}
        <div className="relative flex flex-col justify-center items-center">
          <label htmlFor="fileInput">
            <img
              className="w-32 h-32 rounded-full object-cover"
              src={preview}
              alt="Profile"
            />
          </label>
          <input
            type="file"
            accept="image/*"
            ref={fileInputRef}
            className="hidden"
            onChange={handleFileChange}
          />

          {/* Upload Button */}
          <button
            className="bg-gray-300 text-lg font-bold text-black w-40 h-[55px] p-2 rounded flex items-center justify-center mt-4"
            onClick={() =>
              isEditable ? handleButtonClick() : navigate("/profile/edit")
            }
          >
            {isEditable ? "Change Photo" : "Edit Profile"}
          </button>

          {/* Error Message */}
          {error && <div className="text-red-500 font-bold mt-2">{error}</div>}
        </div>
      </div>

      {/* Form */}
      <div className="self-start my-16 w-full md:text-[22px]">
        <div className="flex md:space-x-44 space-x-5 my-5  ">
          <label className="md:w-2/12 w-3/12">First Name</label>
          <input
            className="md:w-5/12 w-7/12 border-b border-[#B8B3B3] bg-transparent rounded-none"
            disabled={!isEditable}
            type="text"
            name="FirstName"
            id="FirstName"
            value={userData?.firstName}
            onChange={(e) =>
              setUserData({ ...userData, firstName: e.target.value })
            }
          />
        </div>
        <div className="flex md:space-x-44 space-x-5 my-5  ">
          <label className=" md:w-2/12 w-3/12">Last Name</label>
          <input
            className="md:w-5/12 w-7/12 border-b border-[#B8B3B3] bg-transparent rounded-none"
            disabled={!isEditable}
            type="text"
            name="LastName"
            id="LastName"
            value={userData?.lastName}
            onChange={(e) =>
              setUserData({ ...userData, lastName: e.target.value })
            }
          />
        </div>
        <div className="flex md:space-x-44 space-x-5 my-5">
          <label className="  md:w-2/12 w-3/12">Email</label>
          <input
            className="md:w-5/12 w-7/12 border-b border-[#B8B3B3] bg-transparent rounded-none"
            disabled={!isEditable}
            type="email"
            name="Email"
            id="Email"
            value={userData?.email}
            onChange={(e) =>
              setUserData({ ...userData, email: e.target.value })
            }
          />
        </div>
        <div className="flex md:space-x-44 space-x-5 my-5 ">
          <label className="md:w-2/12 w-3/12  ">Phone Number</label>
          <input
            className="md:w-5/12 w-7/12 border-b border-[#B8B3B3] bg-transparent rounded-none  "
            disabled={!isEditable}
            type="text"
            name="PhoneNumber"
            id="PhoneNumber"
            value={userData?.phoneNumber}
            onChange={(e) =>
              setUserData({ ...userData, phoneNumber: e.target.value })
            }
          />
        </div>
        <div className="flex md:space-x-44 space-x-5 my-5  ">
          <label className="md:w-2/12 w-3/12 ">Country</label>
          <input
            className="md:w-5/12 w-7/12 border-b border-[#B8B3B3] bg-transparent rounded-none  "
            disabled={!isEditable}
            type="text"
            name="Counry"
            id="Counry"
            value={userData?.country}
            onChange={(e) =>
              setUserData({ ...userData, country: e.target.value })
            }
          />
        </div>
        <div className="flex md:space-x-44 space-x-5 my-5  ">
          <label className="md:w-2/12 w-3/12  ">City</label>
          <input
            className="md:w-5/12 w-7/12 border-b border-[#B8B3B3] bg-transparent rounded-none  "
            disabled={!isEditable}
            type="text"
            name="City"
            id="City"
            value={userData?.city}
            onChange={(e) => setUserData({ ...userData, city: e.target.value })}
          />
        </div>
        <div className="flex md:space-x-44 space-x-5 my-5  ">
          <label className="md:w-2/12 w-3/12  ">Bio</label>
          <textarea
            className="md:w-5/12 w-7/12 bg-[#D9D9D933] rounded-md h-72  "
            disabled={!isEditable}
            name="Discription"
            id="Discription"
            value={userData?.bio}
            onChange={(e) => setUserData({ ...userData, bio: e.target.value })}
          ></textarea>
        </div>
      </div>

      {/* Social Links */}
      {isEditable ? (
        <div className="self-start  w-full border-t-2 border-main-color md:text-[22px]  text-[15px]">
          <h1 className="text-start my-14 ">Social links</h1>
          <div className="flex md:space-x-44 space-x-5 my-5 relative">
            <label className="w-2/12"> </label>
            <input
              className="md:w-5/12 w-8/12 border-b border-[#B8B3B3] bg-transparent rounded-none px-10"
              type="url"
              name="InsragramAccount"
              id="InsragramAccount"
              value="https://www.facebook.com/profile.php?id=100005674454946"
            />

            <svg
              className=" absolute md:left-[13rem] md:top-2.5  md:h-5 md:w-8 top-0 h-5 left-[3.5rem]"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_6763_4714)">
                <path
                  d="M17.5 6.5H17.51M7 2H17C19.7614 2 22 4.23858 22 7V17C22 19.7614 19.7614 22 17 22H7C4.23858 22 2 19.7614 2 17V7C2 4.23858 4.23858 2 7 2ZM16 11.37C16.1234 12.2022 15.9813 13.0522 15.5938 13.799C15.2063 14.5458 14.5931 15.1514 13.8416 15.5297C13.0901 15.9079 12.2384 16.0396 11.4078 15.9059C10.5771 15.7723 9.80976 15.3801 9.21484 14.7852C8.61992 14.1902 8.22773 13.4229 8.09407 12.5922C7.9604 11.7616 8.09207 10.9099 8.47033 10.1584C8.84859 9.40685 9.45419 8.79374 10.201 8.40624C10.9478 8.01874 11.7978 7.87659 12.63 8C13.4789 8.12588 14.2649 8.52146 14.8717 9.12831C15.4785 9.73515 15.8741 10.5211 16 11.37Z"
                  stroke="white"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_6763_4714">
                  <rect width="24" height="24" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
          <div className="flex md:space-x-44 space-x-5 my-5   relative">
            <label className="w-2/12"> </label>
            <input
              className="md:w-5/12 w-8/12 border-b border-[#B8B3B3] bg-transparent rounded-none  px-10"
              type="url"
              name="FacebookAccount"
              id="FacebookAccount"
              value="https://www.facebook.com/profile.php?id=100005674454946"
            />
            <svg
              className=" absolute md:left-[13rem] md:top-2.5  md:h-5 md:w-8 top-0 h-5 left-[3rem] "
              width="32"
              height="27"
              viewBox="0 0 32 27"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M23.9987 2.25H19.9987C18.2306 2.25 16.5349 2.84263 15.2847 3.89752C14.0344 4.95242 13.332 6.38316 13.332 7.875V11.25H9.33203V15.75H13.332V24.75H18.6654V15.75H22.6654L23.9987 11.25H18.6654V7.875C18.6654 7.57663 18.8058 7.29048 19.0559 7.07951C19.3059 6.86853 19.6451 6.75 19.9987 6.75H23.9987V2.25Z"
                stroke="white"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className="flex md:space-x-44 space-x-5 my-5   relative">
            <label className="w-2/12  "> </label>

            <input
              className="md:w-5/12 w-8/12 border-b border-[#B8B3B3] bg-transparent rounded-none px-10"
              type="url"
              name="XAccount"
              id="XAccount"
              value="https://www.facebook.com/profile.php?id=100005674454946"
            />
            <svg
              className="absolute md:left-[13rem] md:top-2.5  md:h-5 md:w-8 top-0 h-5 left-[3rem] "
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 462.799"
              width="24"
              height="24"
              fill="none"
            >
              <path
                stroke="white"
                fill="white"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M403.229 0h78.506L310.219 196.04 512 462.799H354.002L230.261 301.007 88.669 462.799h-78.56l183.455-209.683L0 0h161.999l111.856 147.88L403.229 0zm-27.556 415.805h43.505L138.363 44.527h-46.68l283.99 371.278z"
              />
            </svg>
          </div>
          <div className="flex justify-center mt-10 mb-10">
            <button
              type="submit"
              className="bg-main-color md:p-5 hover:p-4 rounded-[20px]  md:w-5/12 w-1/2 md:h-[70px] h-[35px] mt-4 drop-shadow-md shadow-main-color hover:bg-transparent hover:border-4 hover:border-main-color hover:text-main-color text-center  "
            >
              Done
            </button>
          </div>
        </div>
      ) : (
        <div className="self-start    w-full border-t-2 border-main-color md:text-[22px]  text-[15px]">
          <h1 className="text-start my-5 ">Social links</h1>
          <div className="flex rounded-[10px]   p-3 px-2 justify-center items-center md:w-1/4 w-1/2 m-auto border border-[#949494] bg-[#222222] ">
            {userData?.facebook && (
              <a href={userData.facebook}>
                <img className="w-1/2 m-auto" src={FacebookIcon} alt="X" />
              </a>
            )}

            {userData?.twitter && (
              <a href={userData.twitter}>
                <img className="w-1/2 m-auto" src={XIcon} alt="X" />
              </a>
            )}

            {userData?.instagram && (
              <a href={userData.instagram}>
                <img className="w-1/2 m-auto" src={InstagramIcon} alt="X" />
              </a>
            )}
          </div>
        </div>
      )}
    </section>
  );
}

export default ProfileForm;
