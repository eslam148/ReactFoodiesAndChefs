import "./styles.css";
import ProfileForm from "../../components/ProfileForm/Component";
import { useState } from "react";

function ProfilePage() {
  const [userData, setuserData] = useState(
    JSON.parse(localStorage.getItem("user"))
  );

  return (
    <div className="ProfilePage">
      <main className="min-h-[80dvh] md:flex md:gap-10 mt-0 p-0" id="overlay">
        <ProfileForm
          isEditable={false}
          userData={userData}
          setuserData={setuserData}
        />
      </main>
    </div>
  );
}

export default ProfilePage;
