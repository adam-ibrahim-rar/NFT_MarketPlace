import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Heading from "../Heading";
import { CiUser } from "react-icons/ci";
import Input from "../Input";
import { RiLockPasswordLine } from "react-icons/ri";
import { HiOutlineMail } from "react-icons/hi";
import axios from "axios";
import { Link} from "react-router-dom";
import { useLocation } from "react-router-dom";

const schema = z
  .object({
    username: z
      .string()
      .min(3, "Name must be at least 3 characters")
      .max(12, "Name must be at most 12 characters"),
    email: z.string().email("Invalid email"),
    password: z
      .string()
      .min(6, "Must be at least 6")
      .max(12, "Must be at most 12"),
    confirm_password: z.string().nonempty("must not be empty"),
  })
  .refine((data) => data.password === data.confirm_password, {
    message: "The passwords are different",
    path: ["confirm_password"],
  });

export default function Login({ setform }) {
  const [submitError, setSubmitError] = useState("");
  const { state } = useLocation();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      email: state?.email || "",
    },
  });

  const onSubmit = async (data) => {
    try {
      setSubmitError("");
      await axios.post("/api/users/new", data);
      navigate("/login")
      reset();
    } catch (error) {
      setSubmitError(error.response.data.message);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full h-[691px] flex flex-col justify-around    "
    >
      <div className="w-[460px]">
        <Heading
          heading={"Create account"}
          para={
            "Welcome! enter your details and start creating, collecting and selling NFTs."
          }
        />
      </div>
      {submitError && (
        <span className="text-md font-semibold text-red-700 pl-2">
          {submitError}
        </span>
      )}
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-4">
          <Input
            {...register("username")}
            errors={errors.username}
            placeholder={"Name"}
            icon={CiUser}
          />
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
          <Input
            {...register("confirm_password")}
            placeholder={"confirm Password"}
            errors={errors.confirm_password}
            icon={RiLockPasswordLine}
            type={"password"}
          />
        </div>
        <button
          disabled={isSubmitting}
          type="submit"
          className="bg-primary
           hover:bg-hover-btn 
             cursor-pointer h-[46px] rounded-2xl 
            text-white
            w-[330px]
            disabled:bg-hover-btn
            shadow-xl/15 shadow-white
            "
        >
          {!isSubmitting ? "Create account" : "Creating..."}
        </button>
      </div>
      <div className="text-white hover:text-primary ">
        <Link to={"/login"}>
        <button className="cursor-pointer" >have an account?</button>
      </Link>
      </div>

    </form>
  );
}
