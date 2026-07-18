import { useState } from "react";
import CreateAccount   from "../Components/LoginComponents/CreateAccount";
import liu from "../Images/liu.jpg";
import Login from "../Components/LoginComponents/Login";
export default function SingUp() {
  const [form, setform] = useState(false);
  return (
    <div className="flex  gap-15  w-6xl mx-auto pb-0.5 ">
      <img src={liu} alt="" className="w-[610px] object-cover rounded-xl" />
      {form ? <Login setform={setform}/> : <CreateAccount setform={setform}/>}
    </div>
  );
}
