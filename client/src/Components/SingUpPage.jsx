import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Heading from "./Heading";
import { CiUser } from "react-icons/ci";
import Input from "./Input";
import { RiLockPasswordLine } from "react-icons/ri";
import { HiOutlineMail } from "react-icons/hi";

const schema = z
  .object({
    name: z.string().min(3, "Name must be at least 3 characters"),
    email: z.string().email("Invalid email"),
    password: z
      .string()
      .min(6, "Must be at least 6")
      .max(12, "Must be at most 12"),
    confirm_password: z.string(),
  })
  .refine((data) => data.password === data.confirm_password, {
  message: "The passwords are different",
  path: ["confirm_password"],
});

export default function SingUpPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
    reset()
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full h-[691px] flex flex-col justify-around py-13   "
    >
      <div className="w-[460px]">
        <Heading
          heading={"Create account"}
          para={
            "Welcome! enter your details and start creating, collecting and selling NFTs."
          }
        />
      </div>
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-4">
          <Input
            {...register("name")}
            errors={errors.name}
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
          type="submit"
          className="bg-primary
           hover:bg-hover-btn 
             cursor-pointer h-[46px] rounded-2xl 
            text-white
            w-[330px]"
        >
          Create account
        </button>
      </div>
    </form>
  );
}
