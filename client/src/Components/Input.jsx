import React from "react";

export default function Input({
  errors,
  placeholder,
  icon: Icon,
  type="text",
  ...props
}) {
  return (
    <div className="w-[330px] flex flex-col gap-1">
      <div className="flex items-center h-[46px] bg-white rounded-2xl px-4 gap-3">
        {Icon && <Icon className="size-4 text-gray-500" />}

        <input
          {...props}
          placeholder={placeholder}
          className="placeholder:text-background w-full outline-none"
          type={type}
        />
      </div>

      {errors && (
        <span className="text-md font-semibold text-red-900">
          {errors.message}
        </span>
      )}
    </div>
  );
}