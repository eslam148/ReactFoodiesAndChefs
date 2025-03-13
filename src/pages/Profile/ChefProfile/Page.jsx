import "./styles.css";
import ChefProfile from "../../../components/ChefProfile/Component";
import { useState ,useEffect} from "react";
import { useParams } from "react-router-dom";
import {GetChefById} from "../../../services/Chef/Chef"
function ProfilePage() {
  const { id } = useParams(); 

  const [userData, setuserData] = useState(
    JSON.parse(localStorage.getItem("user"))
  );
  useEffect( ()=>{
    if(!id) return
        const get =async ()=>{
          await GetChefById(id).then((data)=>{
            console.log(data,"form profile")
                setuserData(data.data)
            }).catch(()=>{
              console.log("error")
            })
        }
        get()
  },userData)
  return (
    <div className="ProfilePage">
      <main className="min-h-[80dvh] md:flex md:gap-10 mt-0 p-0" id="overlay">
        <ChefProfile
          isEditable={false}
          userData={userData}
          setuserData={setuserData}
        />
      </main>
    </div>
  );
}

export default ProfilePage;
