import React from "react";
import ButtonLoader from "./ButtonLoader";

const AuthenticationButton = ({
  title,
  isSubmit,
  onClick,
  isLoading,
  isValid
}) => {
  return (
    <div
      className={`${
        isSubmit ? "bg-[#141414]" : "bg-[#14141466]"
      } md:w-[70%] w-full h-[52px] rounded-[10px]`}
    >
      <button
        onClick={onClick}
        // style={{ background: "red" }}
        type={onClick ? "button" : "submit"}
        className={`${
          isValid ? "bg-[#141414] text-black" : "bg-[#14141466] text-white"
        }  w-full font-bold text-[14px] flex flex-row justify-center items-center h-[52px] rounded-[10px]`}
      >
        {isLoading ? <ButtonLoader /> : title}
      </button>
    </div>
  );
};

export default AuthenticationButton;
