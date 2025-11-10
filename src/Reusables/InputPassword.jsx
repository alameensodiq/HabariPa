import React, { useState } from "react";

const InputPassword = ({
  label,
  placeholder,
  type,
  date,
  name,
  register,
  error,
  validationRules
}) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex flex-col bg-white rounded-[12px] px-[12px] py-[7px] relative items-start">
      <span className="font-geist-bold text-[14px] text-[#60646C]">
        {label}
      </span>
      <input
        className={` md:w-[70%] w-full ${
          date
            ? "border-none outline-none text-[#131518] font-geist-bold  text-[14px] bg-white"
            : "border-[#ECEFF3] border-[1px] outline-none text-[15px] text-[#141414] bg-[#F6F8FA] rounded-[4px] p-[10px]"
        }`}
        placeholder={placeholder}
        {...(register && register(name, { ...validationRules }))}
        type={open ? "text" : "password"}
      />
      {error && <p className="mt-1 text-sm text-red-500">{error.message}</p>}
      <svg
        onClick={() => setOpen(!open)}
        className="absolute top-10 right-4 cursor-pointer"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10.73 5.073C11.1516 5.02419 11.5756 4.99982 12 5C16.664 5 20.4 7.903 22 12C21.6126 12.9966 21.0893 13.9348 20.445 14.788M6.52 6.519C4.48 7.764 2.9 9.693 2 12C3.6 16.097 7.336 19 12 19C13.9321 19.0102 15.8292 18.484 17.48 17.48M9.88 9.88C9.6014 10.1586 9.3804 10.4893 9.22963 10.8534C9.07885 11.2174 9.00125 11.6075 9.00125 12.0015C9.00125 12.3955 9.07885 12.7856 9.22963 13.1496C9.3804 13.5137 9.6014 13.8444 9.88 14.123C10.1586 14.4016 10.4893 14.6226 10.8534 14.7734C11.2174 14.9242 11.6075 15.0018 12.0015 15.0018C12.3955 15.0018 12.7856 14.9242 13.1496 14.7734C13.5137 14.6226 13.8444 14.4016 14.123 14.123"
          stroke="#141414"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M4 4L20 20"
          stroke="#141414"
          stroke-width="1.5"
          stroke-linecap="round"
        />
      </svg>
    </div>
  );
};

export default InputPassword;
