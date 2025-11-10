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
    <div className="flex flex-col bg-red">
      {" "}
      <UserNavbar title="Business" />
      <div className="flex flex-col px-[25px] py-5 gap-5">
        <div className="flex flex-row justify-between items-center">
          <span className="text-black">Marketing</span>
          <div
            style={{ boxShadow: "0px 1px 2px 0px #1018280D" }}
            className="flex flex-col lg:flex-row md:flex-row gap-1 border-[#EBEBEB4D] border-[1px] p-1 rounded-[5px] w-fit bg-white"
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
        <div className="flex lg:flex-row gap-4">
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
        <div className="flex lg:flex-row gap-4">
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
                <div className="w-[100%] rounded-[8px] bg-[#e8de32] h-[10px]">
                  <div className="w-[60%] rounded-[8px] bg-[#9e8c15] h-[10px]"></div>
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
