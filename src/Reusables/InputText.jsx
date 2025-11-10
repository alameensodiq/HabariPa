import React from "react";

const InputText = ({
  label,
  placeholder,
  type,
  date,
  name,
  register,
  error,
  validationRules,
  textarea
}) => {
  return (
    <div
      className={`${
        textarea
          ? "flex flex-col h-[130px] bg-white rounded-[12px] px-[12px] py-[7px] relative items-start w-full"
          : "flex flex-col bg-white rounded-[12px] px-[12px] py-[7px] relative items-start w-full"
      }`}
    >
      <span className="font-geist-bold text-[14px] text-[#60646C]">
        {label}
      </span>
      <input
        // style={{ background: "white" }}
        className={` md:w-[70%] w-full ${
          date
            ? "border-none outline-none text-[#131518] font-geist-bold  text-[14px] bg-white"
            : textarea
            ? "border-none outline-none font-geist text-[14px] text-[#9CA3AF] h-[60px] bg-white"
            : "border-[#ECEFF3] border-[1px] outline-none  text-[15px] text-[#141414] bg-[#F6F8FA] rounded-[4px] p-[10px]"
        }${
          type === "number"
            ? "appearance-none [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
            : ""
        }`}
        placeholder={placeholder}
        {...(register && register(name, { ...validationRules }))}
        type={type}
      />
      {error && <p className="mt-1 text-sm text-red-500">{error.message}</p>}
      {date && (
        <svg
          className="absolute top-4 right-2"
          width="24"
          height="31"
          viewBox="0 0 24 31"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.61385 7.16634V8.83301H13.6139V7.16634H15.2805V8.83301H18.6139C18.8472 8.83301 19.0444 8.91356 19.2055 9.07467C19.3666 9.23578 19.4472 9.43301 19.4472 9.66634V22.9997C19.4472 23.233 19.3666 23.4302 19.2055 23.5913C19.0444 23.7525 18.8472 23.833 18.6139 23.833H3.61385C3.38052 23.833 3.1833 23.7525 3.02218 23.5913C2.86107 23.4302 2.78052 23.233 2.78052 22.9997V9.66634C2.78052 9.43301 2.86107 9.23578 3.02218 9.07467C3.1833 8.91356 3.38052 8.83301 3.61385 8.83301H6.94718V7.16634H8.61385ZM17.7805 15.4997H4.44718V22.1663H17.7805V15.4997ZM6.94718 10.4997H4.44718V13.833H17.7805V10.4997H15.2805V12.1663H13.6139V10.4997H8.61385V12.1663H6.94718V10.4997Z"
            fill="#131518"
          />
        </svg>
      )}
    </div>
  );
};

export default InputText;
