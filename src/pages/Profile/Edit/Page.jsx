import { useState } from "react";
import ProfileForm from "../../../components/ProfileForm/Component";

function EditProfilePage() {
  const [userData, setuserData] = useState(
    JSON.parse(localStorage.getItem("user"))
  );

  return (
    <div>
      <main className="min-h-[80dvh] md:flex md:gap-10 mt-0 p-0" id="overlay">
        <ProfileForm
          isEditable={true}
          userData={userData}
          setUserData={setuserData}
        />
      </main>
    </div>
  );
}

export default EditProfilePage;
