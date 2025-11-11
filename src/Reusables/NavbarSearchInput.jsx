import React from "react";

const NavbarSearchInput = () => {
  return (
    <div className="hidden md:flex w-[22%]">
      <input
        type="text"
        placeholder="Search"
        className="relative bg-[#F7F7F7] border-[1px] border-[#EBEBEB] rounded-[2px] w-full px-8 py-1 text-black font-medium"
      />
      <svg
        className="absolute ml-[1%] mt-[0.7%]"
        width="18"
        height="18"
        viewBox="0 0 18 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8.66668 15.5C4.90001 15.5 1.83334 12.4333 1.83334 8.66667C1.83334 4.9 4.90001 1.83333 8.66668 1.83333C12.4333 1.83333 15.5 4.9 15.5 8.66667C15.5 12.4333 12.4333 15.5 8.66668 15.5ZM8.66668 2.83333C5.44668 2.83333 2.83334 5.45333 2.83334 8.66667C2.83334 11.88 5.44668 14.5 8.66668 14.5C11.8867 14.5 14.5 11.88 14.5 8.66667C14.5 5.45333 11.8867 2.83333 8.66668 2.83333Z"
          fill="#141414"
        />
        <path
          d="M15.6667 16.1667C15.54 16.1667 15.4133 16.12 15.3133 16.02L13.98 14.6867C13.7867 14.4933 13.7867 14.1733 13.98 13.98C14.1733 13.7867 14.4933 13.7867 14.6867 13.98L16.02 15.3133C16.2133 15.5067 16.2133 15.8267 16.02 16.02C15.92 16.12 15.7933 16.1667 15.6667 16.1667Z"
          fill="#141414"
        />
      </svg>
    </div>
  );
};

export default NavbarSearchInput;
