import { useState } from "react";
import MenusForm from "../../../components/MenusForm/Component";

function CreateMenuPage() {
  const [menu, setMenu] = useState({
    name: "",
    description: "",
    courses: [],
  });

  return (
    <div>
      <MenusForm isNewMenu={true} menu={menu} setMenu={setMenu} />
    </div>
  );
}

export default CreateMenuPage;
