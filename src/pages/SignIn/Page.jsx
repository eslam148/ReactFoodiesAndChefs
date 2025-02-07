import LogoImg from "../../assets/images/Logo.png";
import GoogleImg from "../../assets/images/Google.png";
import "./styles.css";

function SignInPage() {
  return (
    <div class="min-h-screen text-green-400 flex items-center justify-center bg-cover bg-center hero-section">
      <div class="absolute md:top-1 top-5 rtl:right-5 md:rtl:right-9 ltr:left-5 md:ltr:left-9 z-20">
        <img
          class="w-1/3 h-auto object-cover md:w-1/6"
          src={LogoImg}
          alt="logo"
        />
      </div>

      <div
        class="p-8 rounded-lg sm:w-75 md:w-full max-w-md"
        style={{ background: "#000000A3", zIndex: 1 }}
      >
        <div class="text-center mb-6">
          <h1 class="text-3xl font-bold text-white">Sign In</h1>
        </div>
        <form data-ajax="true" method="post" action="/UserEvent/SignIn">
          <div class="mb-4 flex flex-col">
            <label for="email" class="sr-only">
              Email
            </label>
            <input
              type="email"
              name="EmailAddress"
              autocomplete="on"
              id="email"
              placeholder="Email"
              value=""
              class="input-bg w-full px-4 py-2 text-gray-900 bg-gray-100  focus:outline-none focus:ring-2 focus:ring-blue-500"
              data-val="true"
              data-val-email="The EmailAddress field is not a valid e-mail address."
              data-val-required=" this field is required."
            />
            <span
              class="text-red-500 text-start w-full field-validation-valid"
              data-valmsg-for="EmailAddress"
              data-valmsg-replace="true"
            ></span>
          </div>
          <div class="mb-4 relative flex flex-col">
            <label for="password" class="sr-only">
              Password
            </label>
            <input
              type="password"
              name="Password"
              autocomplete="on"
              id="password"
              placeholder="Password"
              class="input-bg w-full px-4 py-2 text-gray-900 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 pe-10"
              data-val="true"
              data-val-required=" this field is required."
            />
            <button
              type="button"
              onclick="togglePasswordVisibility()"
              class="absolute top-2.5 ltr:right-0 rtl:left-0 px-3 flex items-center   bg-transparent"
            >
              <i id="eyeIcon" class="fas fa-eye text-sm text-white "></i>
            </button>
            <span
              class="text-red-500 text-start w-full field-validation-valid"
              data-valmsg-for="Password"
              data-valmsg-replace="true"
            ></span>
          </div>
          <div class="flex flex-col items-start justify-between text-sm text-white leading-relaxed">
            <a
              class="hover:underline text-blue-500"
              href="/UserEvent/ForgotPassword"
            >
              Forgot Password?
            </a>
            <span>
              Don&#x27;t Have an account?{" "}
              <a class="hover:underline text-blue-500" href="/UserEvent/SignUp">
                Create Account
              </a>{" "}
            </span>
          </div>
          <button
            type="submit"
            style={{ height: "40.76px" }}
            class="w-full mt-6 text-white font-bold  focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Sign In
          </button>

          <input
            name="__RequestVerificationToken"
            type="hidden"
            value="CfDJ8ICOFCB3jYVCrhBqO-ZqA5ZMtcpGktV0v9kB0wTQq4Gd4MjKuai7tRQ78fJQzhffhQqW_G67u3CKMC-ntdbFPYZ80llRRETsTwUSDKiU3yxymj5q2S1QU-2GUyA28mCNpQxXgIwPSfRF8D0Vd1-vRyo"
          />
        </form>

        <div class="flex items-center justify-center my-4 w-3/4 mx-auto">
          <div class="border-t border-white flex-grow mr-3 "></div>
          <span class="text-white font-medium">OR</span>
          <div class="border-t border-white flex-grow ml-3 "></div>
        </div>

        <a
          name="provider"
          style={{ fontSize: "18px", height: "39.42px", color: "#464343" }}
          class="w-full mt-4 bg-white   font-semibold	 py-2 rounded-lg flex items-center justify-center shadow-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
          href="/UserEvent/ExternalLogin?provider=Google&amp;fromSignin=true"
        >
          <img src={GoogleImg} alt="Google Icon" class="w-5 h-5 mr-2" />
          Sign In with Google
        </a>
      </div>
    </div>
  );
}

export default SignInPage;
