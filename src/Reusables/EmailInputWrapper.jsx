import React from "react";

const EmailInputWrapper = () => {
  return (
    <div className="flex flex-row justify-between items-center">
      <div className="flex flex-row items-center gap-2">
        <input type="checkbox" className="" />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="black"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-star-icon lucide-star"
        >
          <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
        </svg>
        <div className="flex flex-col gap-1 justify-start">
          <span className="text-[14px] text-black">Nuno Affiliate</span>
          <span className="text-[14px] text-black">
            Your application to the Nuno Affiliate network...
          </span>
        </div>
      </div>
      <span className="text-[14px] text-black">8:27 AM</span>
    </div>
  );
};

export default EmailInputWrapper;
