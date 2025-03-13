import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/Home/Page";
import NoPage from "./pages/NoPage/Page";
import SignInPage from "./pages/SignIn/Page";
import SignUpPage from "./pages/SignUp/Page";
import ForgotPasswordPage from "./pages/ForgotPassword/Page";
import i18n from "./i18n";
import { useEffect } from "react";
import EventsPage from "./pages/Events/Pages";
import CreateEventsPage from "./pages/Events/Create/Page";
import Footer from "./components/Footer/Component";
import ProfilePage from "./pages/Profile/Page";
import ChefProfilePage from "./pages/Profile/ChefProfile/Page";

import EditProfilePage from "./pages/Profile/Edit/Page";
import InvitesPage from "./pages/Invites/Page";
import VerifyOtpPage from "./pages/VerifyOtp/Page";
import ForgotPasswordConfirmationPage from "./pages/ForgotPassword/Confirmation/Page";
import ResetPasswordPage from "./pages/resetPassword/Page";
import MenusPage from "./pages/Menus/Page";
import EditEventsPage from "./pages/Events/Edit/Page";
import GoogleMapsPage from "./pages/GoogleMaps/Page";
import ShowEventPage from "./pages/Events/Show/Page";
import CreateMenuPage from "./pages/Menus/Create/Page";
import NavbarHider from "./components/Navbar/Hider/Component";
import OrderPage from "./pages/Orders/Page";
import MeetOurChefs from "./pages/meetOurChefs/Page";
import EditMenuPage from "./pages/Menus/Edit/Page";
import RequestsPage from "./pages/Requests/Page";
import ShowRequestPage from "./pages/Requests/ShowRequest/Page";
import InvitationCardPage from "./pages/Invites/Card/Page";
import Chat from "./pages/Chat/page";

function App() {
  useEffect(() => {
    document.body.dir = i18n.language === "ar" ? "rtl" : "ltr";
  });

  return (
    <div className="App">
      <Router>
        {/* Navbar */}
        <NavbarHider />

        {/* Routes */}
        <Routes>
          {/* Home Page */}
          <Route path="/" element={<HomePage />} />

          {/* Authentication */}
          <Route path="/signin" element={<SignInPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/verifyOtp" element={<VerifyOtpPage />} />
          <Route path="/forgotPassword" element={<ForgotPasswordPage />} />
          <Route
            path="/forgotPassword/confirmEmail"
            element={<ForgotPasswordConfirmationPage />}
          />
          <Route path="/resetPassword" element={<ResetPasswordPage />} />

          {/* Events */}
          <Route path="/events" element={<EventsPage />} />
          <Route path="/events/create" element={<CreateEventsPage />} />
          <Route path="/events/:eventId" element={<ShowEventPage />} />
          <Route path="/events/edit/:eventId" element={<EditEventsPage />} />

          {/* Menu Pages */}
          {/* Commented because low performance */}
          <Route path="/menus" element={<MenusPage />} />
          <Route path="/menus/create" element={<CreateMenuPage />} />
          <Route path="/menus/edit/:menuId" element={<EditMenuPage />} />

          {/* Profile Pages */}
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/profile/edit" element={<EditProfilePage />} />
          <Route path="/ChefProfile" element={<ChefProfilePage />} />
          <Route path="/ChefProfile/:id" element={<ChefProfilePage />} />

          {/* Invites Pages */}
          <Route path="/invites" element={<InvitesPage />} />
          <Route path="/invites/:inviteId" element={<InvitationCardPage />} />

          {/* Requests Pages */}
          <Route path="/requests" element={<RequestsPage />} />
          <Route path="/showRequest/:eventId" element={<ShowRequestPage />} />

          {/* Meet Our Chefs */}
          <Route path="/meetOurChefs" element={<MeetOurChefs />} />

          {/* Order Pages */}
          <Route path="/orders" element={<OrderPage />} />

          {/* Google Maps Page */}
          <Route path="/googleMap" element={<GoogleMapsPage />} />

             {/* Chat Page */}
          <Route path="/Chat" element={<Chat />} />
          <Route path="/chat/:id" element={<Chat />} />
          {/* Handling any other route */}
          <Route path="*" element={<NoPage />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
