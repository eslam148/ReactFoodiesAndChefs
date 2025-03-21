import LogoImg from "../../assets/images/logo.webp";
import GoogleImg from "../../assets/images/Google.webp";
import "./styles.css";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import signupService from "../../services/authentication/signup";
import { useNavigate } from "react-router-dom";
import GoogleSignInButton from '../../components/GoogleComponent/GooglebBtn'
const EnumRole = {
  Foodies:"Foodies",
  Chef:"Chef"

}
function SignUpPage() {
  const { t } = useTranslation();
  const naviagte = useNavigate();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [countryCode, setcountryCode] = useState("+20");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [Role, setRole] = useState(EnumRole.Foodies);

  const [passowrdError, setPasswordError] = useState("");
  const [error, setError] = useState(null);
  const toggleRole = () => {
    setRole((prevRole) =>
      prevRole === EnumRole.Foodies ? EnumRole.Chef : EnumRole.Foodies
    );
  };
  const togglePasswordVisibility = (id, iconId) => {
    const input = document.getElementById(id);
    const icon = document.getElementById(iconId);

    if (!input || !icon) {
      return;
    }

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

  const filterCountryCodes = () => {
    const originalCountryCodes = [
      "+44",
      "+49",
      "+33",
      "+39",
      "+34",
      "+31",
      "+41",
      "+46",
      "+351",
      "+36",
      "+43",
      "+32",
      "+420",
      "+45",
      "+353",
      "+372",
      "+370",
      "+371",
      "+381",
      "+386",
      "+358",
      "+359",
      "+380",
      "+373",
      "+354",
      "+372",
      "+387",
      "+1",
      "+1",
      "+55",
      "+52",
      "+57",
      "+54",
      "+56",
      "+51",
      "+598",
      "+505",
      "+503",
      "+504",
      "+595",
      "+1-787",
      "+1-809",
      "+20",
      "+966",
      "+971",
      "+98",
      "+964",
      "+963",
      "+970",
      "+965",
      "+966",
      "+968",
      "+974",
    ]; // Get original country code list
    const input = document
      .getElementById("countryCodeInput")
      .value.toLowerCase();
    const dataList = document.getElementById("countryCodeList");
    const errorElement = document.getElementById("countryCodeError");

    // Clear current datalist options
    dataList.innerHTML = "";
    let matchFound = false;

    // Filter country codes based on input and add them back to datalist
    originalCountryCodes.forEach(function (code) {
      if (code.toLowerCase().includes(input)) {
        const option = document.createElement("option");
        option.value = code;
        dataList.appendChild(option);
        matchFound = true;
      }
    });

    // If no matches, show error message, otherwise hide it
    if (!matchFound) {
      errorElement.classList.remove("hidden");
    } else {
      errorElement.classList.add("hidden");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setPasswordError("Password does not match");
      return;
    } else {
      setPasswordError("");
    }

    // Call API to sign up user
    const res = await signupService({
      firstName,
      lastName,
      email,
      countryCode,
      phone,
      password,
      confirmPassword,
      Role,
    });

    console.log(res);

    if (!res) {
      setError("An error occurred. Please try again later.");
    } else if (res.success && res.data.userId) {
      naviagte(`/verifyOtp?userId=${res.data.userId}&email=${email}`);
    } else {
      let temp = "";
      res.data.forEach((err) => {
        temp += err + "\n";
      });

      console.log(temp);

      setError(temp);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center hero-section backdrop-filter">
      <div className="lg:grid lg:grid-cols-2 w-full max-w-md lg:max-w-full space-y-6 md:space-y-0 rounded-lg z-10 mt-0">
        {/* Logo and Title */}

        <div className="text-center lg:flex lg:flex-col lg:justify-center items-center">
          <a href="/">
            <img
              className="object-cover w-1/3 lg:w-1/2"
              src={LogoImg}
              alt="Logo"
            />
          </a>
        </div>

        {/* Sign Up Form */}
        <div
          data-ajax="true"
          className="md:min-h-screen space-y-4 p-8 px-1 md:px-14 bg-[#0000008F] backdrop-filter backdrop-blur md:backdrop-blur-none"
          style={{ zIndex: "1", borderRadius: "15px" }}
        >
          {/* Sign Up Heading */}
          <h2 className="text-white text-5xl mb-10    text-center font-extrabold">
            {t("signup.signup")}
          </h2>

          {/* Name Fields */}
          <div className="flex  gap-2">
            <div className="flex flex-col w-1/2 ">
              <input
                type="text"
                placeholder={t("signup.firstName")}
                className="text-[0.7rem] lg:text-sm h-[3rem] md:h-[4.125rem] w-full px-4 py-2 text-white  bg-[#00000036]   focus:outline-none focus:ring-2 focus:ring-slate-500 border border-white"
                data-val="true"
                data-val-regex="Invalid format"
                data-val-regex-pattern="^[\u0621-\u064A\u0660-\u0669a-zA-Z\s]&#x2B;$"
                data-val-required="This field is required."
                id="FirstName"
                name="FirstName"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
              <span
                className="text-red-500 text-start w-full text-[0.7rem] lg:text-sm field-validation-valid"
                data-valmsg-for="FirstName"
                data-valmsg-replace="true"
              ></span>
            </div>
            <div className="flex flex-col w-1/2 ">
              <input
                type="text"
                placeholder={t("signup.lastName")}
                className="text-[0.7rem] lg:text-sm h-[3rem] md:h-[4.125rem] w-full px-4 py-2 text-white bg-[#00000036] focus:outline-none focus:ring-2 focus:ring-slate-500 border border-white"
                data-val="true"
                data-val-regex="Invalid format"
                data-val-regex-pattern="^[\u0621-\u064A\u0660-\u0669a-zA-Z\s]&#x2B;$"
                data-val-required="This field is required."
                id="LastName"
                name="LastName"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
              <span
                className="text-red-500 text-start w-full text-[0.7rem] lg:text-sm field-validation-valid"
                data-valmsg-for="LastName"
                data-valmsg-replace="true"
              ></span>
            </div>
          </div>

          <div className="flex  gap-2">
            <div className="flex flex-col w-1/2 ">
              <input
                name="Email"
                type="email"
                placeholder={t("signup.email")}
                className="h-[3rem] md:h-[4.125rem] w-full px-3 py-2 pe-0 text-white bg-black bg-opacity-25 text-[0.7rem] lg:text-sm focus:outline-none focus:ring-2 focus:ring-slate-500 border border-white"
                data-val="true"
                data-val-email="The Email field is not a valid e-mail address."
                data-val-required="This field is required."
                id="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <span
                className="text-red-500 text-start w-full text-[0.7rem] lg:text-sm field-validation-valid"
                data-valmsg-for="Email"
                data-valmsg-replace="true"
              ></span>
            </div>
            <div className="flex flex-col w-1/2 ">
              <div className="flex w-full">
                <div className="relative inline-flex w-1/2">
                  {/* Input with Datalist */}
                  <input
                    name="CountryCode"
                    autoComplete="+20"
                    list="countryCodeList"
                    id="countryCodeInput"
                    // value="&#x2B;20"
                    value={countryCode}
                    onChange={(e) => setcountryCode(e.target.value)}
                    pattern="^\+\d{1,3}$"
                    className="h-[3rem] md:h-[4.125rem] text-[0.7rem] lg:text-sm w-full appearance-none inline-flex items-center pl-2 md:px-2 bg-[#00000036] text-white text-sm border border-white border-e-0 rounded-s-[15px] rounded-e-none"
                    onInput={filterCountryCodes}
                    type="text"
                    data-val="true"
                    data-val-regex="Invalid Country Code format"
                    data-val-regex-pattern="^\&#x2B;\d{1,3}$"
                    data-val-required="This field is required."
                  />

                  {/* Datalist for country codes */}
                  <datalist
                    id="countryCodeList"
                    className="rounded-s-none"
                    autoComplete="off"
                  >
                    <option value="&#x2B;44">&#x2B;44</option>
                    <option value="&#x2B;49">&#x2B;49</option>
                    <option value="&#x2B;33">&#x2B;33</option>
                    <option value="&#x2B;39">&#x2B;39</option>
                    <option value="&#x2B;34">&#x2B;34</option>
                    <option value="&#x2B;31">&#x2B;31</option>
                    <option value="&#x2B;41">&#x2B;41</option>
                    <option value="&#x2B;46">&#x2B;46</option>
                    <option value="&#x2B;351">&#x2B;351</option>
                    <option value="&#x2B;36">&#x2B;36</option>
                    <option value="&#x2B;43">&#x2B;43</option>
                    <option value="&#x2B;32">&#x2B;32</option>
                    <option value="&#x2B;420">&#x2B;420</option>
                    <option value="&#x2B;45">&#x2B;45</option>
                    <option value="&#x2B;353">&#x2B;353</option>
                    <option value="&#x2B;372">&#x2B;372</option>
                    <option value="&#x2B;370">&#x2B;370</option>
                    <option value="&#x2B;371">&#x2B;371</option>
                    <option value="&#x2B;381">&#x2B;381</option>
                    <option value="&#x2B;386">&#x2B;386</option>
                    <option value="&#x2B;358">&#x2B;358</option>
                    <option value="&#x2B;359">&#x2B;359</option>
                    <option value="&#x2B;380">&#x2B;380</option>
                    <option value="&#x2B;373">&#x2B;373</option>
                    <option value="&#x2B;354">&#x2B;354</option>
                    <option value="&#x2B;372">&#x2B;372</option>
                    <option value="&#x2B;387">&#x2B;387</option>
                    <option value="&#x2B;1">&#x2B;1</option>
                    <option value="&#x2B;1">&#x2B;1</option>
                    <option value="&#x2B;55">&#x2B;55</option>
                    <option value="&#x2B;52">&#x2B;52</option>
                    <option value="&#x2B;57">&#x2B;57</option>
                    <option value="&#x2B;54">&#x2B;54</option>
                    <option value="&#x2B;56">&#x2B;56</option>
                    <option value="&#x2B;51">&#x2B;51</option>
                    <option value="&#x2B;598">&#x2B;598</option>
                    <option value="&#x2B;505">&#x2B;505</option>
                    <option value="&#x2B;503">&#x2B;503</option>
                    <option value="&#x2B;504">&#x2B;504</option>
                    <option value="&#x2B;595">&#x2B;595</option>
                    <option value="&#x2B;1-787">&#x2B;1-787</option>
                    <option value="&#x2B;1-809">&#x2B;1-809</option>
                    <option value="&#x2B;20">&#x2B;20</option>
                    <option value="&#x2B;966">&#x2B;966</option>
                    <option value="&#x2B;971">&#x2B;971</option>
                    <option value="&#x2B;98">&#x2B;98</option>
                    <option value="&#x2B;964">&#x2B;964</option>
                    <option value="&#x2B;963">&#x2B;963</option>
                    <option value="&#x2B;970">&#x2B;970</option>
                    <option value="&#x2B;965">&#x2B;965</option>
                    <option value="&#x2B;966">&#x2B;966</option>
                    <option value="&#x2B;968">&#x2B;968</option>
                    <option value="&#x2B;974">&#x2B;974</option>
                    {/* Add more country codes as needed */}
                  </datalist>
                  <div className="absolute right-0 top-1/2 transform -translate-y-1/2 h-3/4 border-r border-white"></div>
                </div>

                <input
                  name="Phone"
                  maxLength="11"
                  type="text"
                  placeholder={t("signup.phoneNumber")}
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="h-[3rem] md:h-[4.125rem] w-full px-4 py-2 text-white bg-[#00000036] text-[0.7rem] lg:text-sm  border-t border-r border-b border-white rounded-e-[15px] rounded-s-none"
                  data-val="true"
                  data-val-phone="The Phone field is not a valid phone number."
                  data-val-required="This field is required."
                  id="Phone"
                />
              </div>
              <p
                id="countryCodeError"
                className="hidden text-red-500 text-start w-full text-[0.7rem] lg:text-sm "
              >
                {t("signup.invalidCountryCode")}.
              </p>
            </div>
          </div>

          {/* Password Fields */}
          <div className="flex  gap-2">
            <div className="flex flex-col w-1/2 ">
              <div className="relative w-full">
                <input
                  name="Password"
                  type="password"
                  id="password"
                  placeholder={t("signup.password")}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="text-[0.7rem] lg:text-sm h-[3rem] md:h-[4.125rem] w-full px-4 py-2 text-white bg-[#00000036] focus:outline-none focus:ring-2 focus:ring-slate-500 border border-white"
                  data-val="true"
                  data-val-required="This field is required."
                />
                <i
                  id="password-icon"
                  className="fas fa-eye absolute top-4 md:top-5 rtl:left-3 ltr:right-3 md:text-lg text-white cursor-pointer"
                  onClick={() =>
                    togglePasswordVisibility("password", "password-icon")
                  }
                ></i>
              </div>
            </div>
            <div className="flex flex-col w-1/2 ">
              <div className="relative w-full">
                <input
                  name="confirmPassword"
                  type="password"
                  id="confirm-password"
                  placeholder={t("signup.confirmPassword")}
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="text-[0.7rem] lg:text-sm h-[3rem] md:h-[4.125rem] w-full px-4 py-2 text-white bg-[#00000036] focus:outline-none focus:ring-2 focus:ring-slate-500 border border-white"
                  data-val="true"
                  data-val-equalto="The password and confirmation password do not match."
                  data-val-equalto-other="*.Password"
                  data-val-required="This field is required."
                />
                <i
                  id="confirm-password-icon"
                  className="fas fa-eye absolute top-4 md:top-5 rtl:left-3 ltr:right-3 md:text-lg text-white cursor-pointer"
                  onClick={() =>
                    togglePasswordVisibility(
                      "confirm-password",
                      "confirm-password-icon"
                    )
                  }
                ></i>
              </div>
              <span
                className="text-red-500 text-start w-full text-[0.7rem] lg:text-sm field-validation-valid"
                data-valmsg-for="Comfirm_Password"
                data-valmsg-replace="true"
              >
                {passowrdError}
              </span>
            </div>
          </div>

          {/* Foodie and Chef Checkbox part */}
          <div
            className="flex justify-around space-x-4 items-center m-auto p-4 border border-white w-full"
            style={{ borderRadius: "15px" }}
          >
            {/* Foodies Option */}
            <div className="flex items-center justify-center">
              <input
                name="Role"
                type="checkbox"
                className="accent-[#6555FF] hover:accent-[#6555FF] w-5 h-5 "
                id="Foodies"
                value="Foodies"
                onChange={(e) => toggleRole()}
                defaultChecked
                disabled
              />
           
              <span className="mx-2 text-white font-bold text-xl md:text-2xl">
                Foodie
              </span>
            </div>

            {/* Chefs Option */}
            <div className="flex items-center justify-center">
  <input
    name="Role"
    type="checkbox"
    className="accent-[#6555FF] hover:accent-[#6555FF] w-5 h-5 "
    id="Chefs"
    value="Chefs"
    onChange={(e) => setRole(e.target.value)}
  />
  
  <span className="mx-2 text-white font-bold text-xl md:text-2xl">
    Chef
  </span>
</div>
          </div>

          <div className="text-red-500 font-bold mt-12 text-center" id="error">
            {error}
          </div>

          {/* Sign Up Button */}
          <button
            style={{ height: "40.76px" }}
            className="w-full  bg-[#4136A3] mt-6 text-white font-bold text-2xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            onClick={handleSubmit}
          >
            {t("signup.signup")}
          </button>

          {/* Sign In Link */}
          <p className="text-base	font-medium	text-white text-start">
            {t("signup.alreadyHaveAccount")}{" "}
            <a className="text-blue-500 hover:underline" href="/signin">
              {t("signup.signin")}
            </a>
          </p>

          {/* OR Divider */}
          <div className="flex items-center justify-center my-4">
            <div className="w-1/4 border-t border-gray-300"></div>
            <span className="text-white mx-3 font-medium text-xl">OR</span>
            <div className="w-1/4 border-t border-gray-300"></div>
          </div>

          {/* Sign Up with Google Button */}
          <div id="googleFoodie" className="mt-8">
                      <GoogleSignInButton UserRole={Role}/> 
 
            {/* <button
              id="element1"
              name="provider"
              style={{ height: "39.42px", color: "#464343" }}
              className="w-full mt-4 bg-white text-xl	font-bold py-2 rounded-lg flex items-center justify-center shadow-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
              onClick={googleSignInService}
            >
              <img src={GoogleImg} alt="Google Icon" className="w-5 h-5 mr-2" />
              {t("signup.signupWithGoogle")}
            </button> */}
          </div>
          <input name="Role" type="hidden" value="false" />
        </div>
      </div>
    </div>
  );
}

export default SignUpPage;
