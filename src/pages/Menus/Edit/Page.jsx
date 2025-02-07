import { useState } from "react";
import MenusForm from "../../../components/MenusForm/Component";

function EditMenuPage() {
  const [menu, setMenu] = useState({
    name: "",
    description: "",
    courses: [],
  });

  return (
    <div>
      <MenusForm isNewMenu={false} menu={menu} setMenu={setMenu} />
    </div>
  );
}

export default EditMenuPage;
