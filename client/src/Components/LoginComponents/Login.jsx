import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Heading from "../Heading";
import Input from "../Input";
import { RiLockPasswordLine } from "react-icons/ri";
import { HiOutlineMail } from "react-icons/hi";
import { PiSwordFill } from "react-icons/pi";

import axios from "axios";
const schema = z.object({
  email: z.string().email("Invalid email"),
  password: z
    .string()
    .min(6, "Must be at least 6")
    .max(12, "Must be at most 12"),
});

export default function CreateAccount({ setform }) {
  const [submitError, setSubmitError] = useState("");
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data) => {
    try {
      setSubmitError("");
      const response=await axios.post("/api/users/login", data);
      // setLogin(true)
      // setUsername(response.data.user.username)
      navigate("/");
    } catch (error) {
      setSubmitError(error.response.data.message);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full h-[691px] flex flex-col justify-center gap-4 py-13   "
    >
      <div className="w-[460px]">
        <Heading
          heading={"Login"}
          para={"Welcome! enter your details and Login"}
        />
      </div>
      {submitError && (
        <span className="text-md font-semibold text-red-700 pl-2 flex items-center gap-2">
          <PiSwordFill />
          {submitError}
        </span>
      )}
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-4">
          <Input
            {...register("email")}
            errors={errors.email}
            placeholder={"Email"}
            icon={HiOutlineMail}
          />
          <Input
            {...register("password")}
            placeholder={"Password"}
            errors={errors.password}
            icon={RiLockPasswordLine}
            type={"password"}
          />
        </div>
        <button
          type="submit"
          className="bg-primary
           hover:bg-hover-btn 
             cursor-pointer h-[46px] rounded-2xl 
            text-white shadow-xl/15 shadow-white
            w-[330px]"
        >
          Login
        </button>
      </div>
      <div className="text-white hover:text-primary ">
        <button className="cursor-pointer" onClick={() => setform(false)}>Create an account?</button>
      </div>
    </form>
  );
}
