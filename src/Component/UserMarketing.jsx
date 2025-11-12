import React, { useState } from "react";
import UserNavbar from "./UserNavbar";
import DoubleLineChart from "../Reusables/DoubleLineChart";
import BarChart from "../Reusables/BarChart";

const UserMarketing = () => {
  const [Index, setIndex] = useState(0);
  const Time = [
    {
      id: 1,
      name: "7 Days"
    },
    {
      id: 2,
      name: "14 Days"
    },
    {
      id: 3,
      name: "1 Month"
    }
  ];
  return (
    <div className="flex flex-col">
      {" "}
      <UserNavbar />
      <div className="flex flex-col px-[25px] py-5 gap-5">
        <div className="flex flex-row justify-between items-center">
          <span className="text-black">Marketing</span>
          <div
            style={{ boxShadow: "0px 1px 2px 0px #1018280D" }}
            className="flex flex-col xs:flex-row md:flex-row gap-1 border-[#EBEBEB4D] border-[1px] p-1 rounded-[5px] w-fit bg-white"
          >
            {Time?.map((item, index) => (
              <div
                onClick={() => {
                  setIndex(index);
                }}
                className={`${
                  Index === index
                    ? "flex flex-row gap-1 bg-white items-center rounded-[4px] py-2 cursor-pointer px-2"
                    : "flex flex-row gap-1 items-center bg-white py-2 border-none cursor-pointer px-2"
                }`}
              >
                <span
                  className={`${
                    Index === index
                      ? "text-[#32ae3f] text-[14px] font-geist-bold flex flex-row items-center gap-1"
                      : "text-[#667085]  text-[14px] font-geist-medium flex flex-row items-center gap-1"
                  }`}
                >
                  {item?.name} {item?.count > 0 ? `(${item?.count})` : ""}
                </span>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="flex flex-wrap gap-4 w-full lg:w-[50%]">
            <div className="bg-white flex flex-col border-[0.5px] border-black py-4 px-2 rounded-[4px] w-full lg:w-[calc(50%-8px)]">
              <div className="flex flex-row justify-between">
                <span className="text-black">Total Spend</span>
              </div>
              <div className="flex flex-row justify-between">
                <span className="text-black text-[14px] font-bold">$8,765</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="green"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-banknote-icon lucide-banknote"
                >
                  <rect width="20" height="12" x="2" y="6" rx="2" />
                  <circle cx="12" cy="12" r="2" />
                  <path d="M6 12h.01M18 12h.01" />
                </svg>
              </div>
              <div className="flex flex-row justify-between">
                <div className="flex flex-col gap-1">
                  <span className="text-black text-[10px]">Previous</span>
                  <span className="text-black text-[10px]">$10,234</span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-black text-[10px]">Progress</span>
                  <span className="text-[#da0b0b] text-[10px]">-14.32%</span>
                </div>
              </div>
            </div>
            <div className="bg-white flex flex-col border-[0.5px] border-black py-4 px-2 rounded-[4px] w-full lg:w-[calc(50%-8px)]">
              <div className="flex flex-row justify-between">
                <span className="text-black">Visitor</span>
              </div>
              <div className="flex flex-row justify-between">
                <span className="text-black text-[14px] font-bold">14,321</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="green"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-users-icon lucide-users"
                >
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                  <path d="M16 3.128a4 4 0 0 1 0 7.744" />
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                  <circle cx="9" cy="7" r="4" />
                </svg>
              </div>
              <div className="flex flex-row justify-between">
                <div className="flex flex-col gap-1">
                  <span className="text-black text-[10px]">Previous</span>
                  <span className="text-black text-[10px]">12,543</span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-black text-[10px]">Progress</span>
                  <span className="text-[#3eb74a] text-[10px]">+14.32%</span>
                </div>
              </div>
            </div>
            <div className="bg-white flex flex-col border-[0.5px] border-black py-4 px-2 rounded-[4px] w-full lg:w-[calc(50%-8px)]">
              <div className="flex flex-row justify-between">
                <span className="text-black">Acquisition</span>
              </div>
              <div className="flex flex-row justify-between">
                <span className="text-black text-[14px] font-bold">1,023</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="green"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-circle-check-big-icon lucide-circle-check-big"
                >
                  <path d="M21.801 10A10 10 0 1 1 17 3.335" />
                  <path d="m9 11 3 3L22 4" />
                </svg>
              </div>
              <div className="flex flex-row justify-between">
                <div className="flex flex-col gap-1">
                  <span className="text-black text-[10px]">Previous</span>
                  <span className="text-black text-[10px]">876</span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-black text-[10px]">Progress</span>
                  <span className="text-[#3eb74a] text-[10px]">+16.73%</span>
                </div>
              </div>
            </div>
            <div className="bg-white flex flex-col border-[0.5px] border-black py-4 px-2 rounded-[4px] w-full lg:w-[calc(50%-8px)]">
              <div className="flex flex-row justify-between">
                <span className="text-black">Revenue</span>
              </div>
              <div className="flex flex-row justify-between">
                <span className="text-black text-[14px] font-bold">
                  $18,765
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="green"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-circle-dollar-sign-icon lucide-circle-dollar-sign"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8" />
                  <path d="M12 18V6" />
                </svg>
              </div>
              <div className="flex flex-row justify-between">
                <div className="flex flex-col gap-1">
                  <span className="text-black text-[10px]">Previous</span>
                  <span className="text-black text-[10px]">$15,432</span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-black text-[10px]">Progress</span>
                  <span className="text-[#3eb74a] text-[10px]">+21.67%</span>
                </div>
              </div>
            </div>
          </div>
          <div className="border-[0.5px] border-black flex flex-col gap-10 rounded-[4px] px-3 pt-4 pb-2 bg-[#FFFFFF] w-full lg:w-[50%]">
            <div className="flex flex-col md:flex-row justify-between items-center px-2">
              <div className="flex flex-col gap-2">
                <span className="text-[18px] text-[#141414] font-bold">
                  Acquisition vs Cost
                </span>
              </div>
            </div>
            <DoubleLineChart />
          </div>
        </div>
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="border-[0.5px] border-black flex flex-col gap-10 rounded-[4px] px-3 pt-4 pb-2 bg-[#FFFFFF] w-full lg:w-[50%]">
            <div className="flex flex-col md:flex-row justify-between items-center px-2">
              <div className="flex flex-col gap-2">
                <span className="text-[18px] text-[#141414] font-bold">
                  Traffic Source
                </span>
              </div>
            </div>
            <BarChart />
          </div>
          <div className="border-[0.5px] border-black flex flex-col gap-4 rounded-[4px] px-3 pt-4 pb-2 bg-[#FFFFFF] w-full lg:w-[50%]">
            <div className="flex flex-col md:flex-row justify-between items-center px-2">
              <div className="flex flex-col gap-2">
                <span className="text-[18px] text-[#141414] font-bold">
                  Budget by Platform
                </span>
              </div>
            </div>
            <div className="flex flex-row items-center w-[100%] gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="black"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-facebook-icon lucide-facebook"
              >
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
              <div className="w-[90%]  flex flex-col gap-1">
                <div className="flex flex-row justify-between items-center">
                  <span className="text-[12px] text-black">
                    Remaining:$12,678
                  </span>
                  <span className="text-[12px] text-black">60%</span>
                </div>
                <div className="w-[100%] rounded-[8px] bg-[#c4e5cb] h-[10px]">
                  <div className="w-[60%] rounded-[8px] bg-[#4baa60] h-[10px]"></div>
                </div>
              </div>
            </div>
            <div className="flex flex-row items-center w-[100%] gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="black"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-x-icon lucide-x"
              >
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
              <div className="w-[90%]  flex flex-col gap-1">
                <div className="flex flex-row justify-between items-center">
                  <span className="text-[12px] text-black">
                    Remaining:$12,678
                  </span>
                  <span className="text-[12px] text-black">60%</span>
                </div>
                <div className="w-[100%] rounded-[8px] bg-[#c4e5cb] h-[10px]">
                  <div className="w-[60%] rounded-[8px] bg-[#4baa60] h-[10px]"></div>
                </div>
              </div>
            </div>
            <div className="flex flex-row items-center w-[100%] gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="24"
                height="24"
                viewBox="0 0 50 50"
              >
                <path d="M 25.996094 48 C 13.3125 48 2.992188 37.683594 2.992188 25 C 2.992188 12.316406 13.3125 2 25.996094 2 C 31.742188 2 37.242188 4.128906 41.488281 7.996094 L 42.261719 8.703125 L 34.675781 16.289063 L 33.972656 15.6875 C 31.746094 13.78125 28.914063 12.730469 25.996094 12.730469 C 19.230469 12.730469 13.722656 18.234375 13.722656 25 C 13.722656 31.765625 19.230469 37.269531 25.996094 37.269531 C 30.875 37.269531 34.730469 34.777344 36.546875 30.53125 L 24.996094 30.53125 L 24.996094 20.175781 L 47.546875 20.207031 L 47.714844 21 C 48.890625 26.582031 47.949219 34.792969 43.183594 40.667969 C 39.238281 45.53125 33.457031 48 25.996094 48 Z"></path>
              </svg>
              <div className="w-[90%]  flex flex-col gap-1">
                <div className="flex flex-row justify-between items-center">
                  <span className="text-[12px] text-black">
                    Remaining:$12,678
                  </span>
                  <span className="text-[12px] text-black">60%</span>
                </div>
                <div className="w-[100%] rounded-[8px] bg-[#c4e5cb] h-[10px]">
                  <div className="w-[60%] rounded-[8px] bg-[#4baa60] h-[10px]"></div>
                </div>
              </div>
            </div>
            <div className="flex flex-row items-center w-[100%] gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="24"
                height="24"
                viewBox="0 0 172 172"
                style={{ fill: "#000000" }} // ← Fixed!
              >
                <g
                  fill="none"
                  fillRule="nonzero"
                  stroke="none"
                  strokeWidth="1"
                  strokeLinecap="butt"
                  strokeLinejoin="miter"
                  strokeMiterlimit="10"
                  strokeDasharray=""
                  strokeDashoffset="0"
                  fontFamily="none"
                  fontWeight="none"
                  fontSize="none"
                  textAnchor="none"
                  style={{ mixBlendMode: "normal" }}
                >
                  <path d="M0,172v-172h172v172z" fill="none"></path>
                  <g fill="#1fb141">
                    <path d="M21.5,21.5v129h64.5v-32.25v-64.5v-32.25zM86,53.75c0,17.7805 14.4695,32.25 32.25,32.25c17.7805,0 32.25,-14.4695 32.25,-32.25c0,-17.7805 -14.4695,-32.25 -32.25,-32.25c-17.7805,0 -32.25,14.4695 -32.25,32.25zM118.25,86c-17.7805,0 -32.25,14.4695 -32.25,32.25c0,17.7805 14.4695,32.25 32.25,32.25c17.7805,0 32.25,-14.4695 32.25,-32.25c0,-17.7805 -14.4695,-32.25 -32.25,-32.25z"></path>
                  </g>
                </g>
              </svg>
              <div className="w-[90%]  flex flex-col gap-1">
                <div className="flex flex-row justify-between items-center">
                  <span className="text-[12px] text-black">
                    Remaining:$12,678
                  </span>
                  <span className="text-[12px] text-black">60%</span>
                </div>
                <div className="w-[100%] rounded-[8px] bg-[#e3735d] h-[10px]">
                  <div className="w-[60%] rounded-[8px] bg-[#d51010] h-[10px]"></div>
                </div>
              </div>
            </div>
            <div className="flex flex-row items-center w-[100%] gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="black"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-facebook-icon lucide-facebook"
              >
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
              <div className="w-[90%]  flex flex-col gap-1">
                <div className="flex flex-row justify-between items-center">
                  <span className="text-[12px] text-black">
                    Remaining:$12,678
                  </span>
                  <span className="text-[12px] text-black">60%</span>
                </div>
                <div className="w-[100%] rounded-[8px] bg-[#eae4c3] h-[10px]">
                  <div className="w-[60%] rounded-[8px]  bg-[#dbc230] h-[10px]"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserMarketing;
