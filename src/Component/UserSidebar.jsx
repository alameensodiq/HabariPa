import React, { useState } from "react";
// import Firslogo from "../../assets/firslogo.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { user } from "../Routes";
import { UserLogOut } from "../utils/UserLogout";

const UserSidebar = ({ isSmallScreen }) => {
  const router = useLocation();

  const data = [
    {
      id: 1,
      name: "Marketing",
      image: (
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
          class="lucide lucide-megaphone-icon lucide-megaphone"
        >
          <path d="M11 6a13 13 0 0 0 8.4-2.8A1 1 0 0 1 21 4v12a1 1 0 0 1-1.6.8A13 13 0 0 0 11 14H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z" />
          <path d="M6 14a12 12 0 0 0 2.4 7.2 2 2 0 0 0 3.2-2.4A8 8 0 0 1 10 14" />
          <path d="M8 6v8" />
        </svg>
      ),
      link: user
    },
    {
      id: 2,
      name: "Analytics",
      image: (
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
          class="lucide lucide-chart-no-axes-column-increasing-icon lucide-chart-no-axes-column-increasing"
        >
          <path d="M5 21v-6" />
          <path d="M12 21V9" />
          <path d="M19 21V3" />
        </svg>
      ),
      link: "#"
    },
    {
      id: 3,
      name: "Business",
      image: (
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
          class="lucide lucide-briefcase-business-icon lucide-briefcase-business"
        >
          <path d="M12 12h.01" />
          <path d="M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
          <path d="M22 13a18.15 18.15 0 0 1-20 0" />
          <rect width="20" height="14" x="2" y="6" rx="2" />
        </svg>
      ),
      link: "#"
    },
    {
      id: 4,
      name: "Project",
      image: (
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
          class="lucide lucide-square-kanban-icon lucide-square-kanban"
        >
          <rect width="18" height="18" x="3" y="3" rx="2" />
          <path d="M8 7v7" />
          <path d="M12 7v4" />
          <path d="M16 7v9" />
        </svg>
      ),
      link: "#"
    },
    {
      id: 5,
      name: "HRM",
      image: (
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
          class="lucide lucide-scale-icon lucide-scale"
        >
          <path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" />
          <path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" />
          <path d="M7 21h10" />
          <path d="M12 3v18" />
          <path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2" />
        </svg>
      ),
      link: "#"
    },
    {
      id: 6,
      name: "Mobile App",
      image: (
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
          class="lucide lucide-tablet-smartphone-icon lucide-tablet-smartphone"
        >
          <rect width="10" height="14" x="3" y="8" rx="2" />
          <path d="M5 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2h-2.4" />
          <path d="M8 18h.01" />
        </svg>
      ),
      link: "#"
    },
    {
      id: 7,
      name: "Landingpage",
      image: (
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
          class="lucide lucide-rocket-icon lucide-rocket"
        >
          <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
          <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
          <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
          <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
        </svg>
      ),
      link: "#"
    },
    {
      id: 8,
      name: "Components",
      image: (
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
          class="lucide lucide-graduation-cap-icon lucide-graduation-cap"
        >
          <path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z" />
          <path d="M22 10v6" />
          <path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5" />
        </svg>
      ),
      link: "#",
      carat: true
    },
    {
      id: 9,
      name: "Pages",
      image: (
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
          class="lucide lucide-sticky-note-icon lucide-sticky-note"
        >
          <path d="M21 9a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 15 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2z" />
          <path d="M15 3v5a1 1 0 0 0 1 1h5" />
        </svg>
      ),
      link: "#",
      carat: true
    },
    {
      id: 10,
      name: "App",
      image: (
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
          class="lucide lucide-dock-icon lucide-dock"
        >
          <path d="M2 8h20" />
          <rect width="20" height="16" x="2" y="4" rx="2" />
          <path d="M6 16h12" />
        </svg>
      ),
      link: "#",
      carat: true
    },
    {
      id: 11,
      name: "Content",
      image: (
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
          class="lucide lucide-sticky-note-icon lucide-sticky-note"
        >
          <path d="M21 9a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 15 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2z" />
          <path d="M15 3v5a1 1 0 0 0 1 1h5" />
        </svg>
      ),
      link: "#",
      carat: true
    },
    {
      id: 12,
      name: "Users",
      image: (
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
          class="lucide lucide-user-icon lucide-user"
        >
          <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
          <circle cx="12" cy="7" r="4" />
        </svg>
      ),
      link: "#",
      carat: true
    },
    {
      id: 13,
      name: "Documentation",
      image: (
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
          class="lucide lucide-file-text-icon lucide-file-text"
        >
          <path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z" />
          <path d="M14 2v5a1 1 0 0 0 1 1h5" />
          <path d="M10 9H8" />
          <path d="M16 13H8" />
          <path d="M16 17H8" />
        </svg>
      ),
      link: "#",
      carat: true
    }
  ];

  return (
    <div
      className={`${
        isSmallScreen
          ? "w-[20%] flex flex-col py-7 bg-[#F5F5F5] overflow-y-auto border-r border-black"
          : "w-[19.4%] flex flex-col py-7 bg-[#F5F5F5] overflow-y-auto border-r border-black"
      }`}
    >
      <div className="flex flex-row justify-center">
        {/* <img src={Firslogo} className="w-[100%] md:w-[49%] lg:w-[74%]" /> */}
      </div>
      <div className="pt-2 flex flex-col gap-4">
        <div className="flex flex-col gap-1 items-start pl-8 pr-1">
          <div
            className={`${
              isSmallScreen
                ? "hidden"
                : "flex flex-row justify-center items-center gap-3"
            }`}
          >
            <div className="bg-[#aef16e] w-[20px] h-[20px] flex flex-row justify-center items-center p-4 rounded-[4px]">
              <span className="font-bold text-black text-[25px]">B</span>
            </div>
            <span className="font-bold text-black text-[20px]">ritualism</span>
          </div>
        </div>
        <div className="flex flex-col gap-1 items-start pl-4 pr-1">
          {/* <div
            className={`${
              isSmallScreen ? "hidden" : "flex flex-row justify-start px-3"
            }`}
          >
            <span className="font-geist text-deepprimarycolor text-[12px]">
              MAIN
            </span>
          </div> */}
          {data?.map((item) => (
            <Link
              key={item.id}
              to={item?.link}
              className={`${
                router.pathname === item?.link ||
                router.pathname === `${user}/${item?.link}`
                  ? "bg-[#FFFFFF] flex flex-row justify-between rounded-[2px] py-[8px] px-[12px] gap-3 items-center w-[97%] border-[1px] border-[#000000]"
                  : "flex flex-row justify-between py-[8px] px-[12px] gap-3 items-center w-[97%]"
              }`}
            >
              <div className="flex flex-row items-center gap-2">
                {item?.image}
                <span
                  className={`
        text-[14px]
        ${isSmallScreen ? "hidden" : "font-geist"}
        ${
          router.pathname === `${user}/${item?.link}`
            ? "text-black font-semibold"
            : "text-deepprimarycolor text-black"
        }
      `}
                >
                  {item?.name}
                </span>
              </div>
              {item?.carat && (
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
                  class="lucide lucide-chevron-down-icon lucide-chevron-down"
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              )}
            </Link>
          ))}
        </div>

        <div className="px-10">
          <div className="px-6 py-2 mt-2  gap-2 flex flex-col bg-white border-[0.5px] border-black">
            <span className="text-[16px] font-bold text-black">
              Upgrade to Pro
            </span>
            <span className="text-[10px] font-medium text-black">
              Are you looking for more features? Check out our Pro version
            </span>
            <button className="bg-[#aef16e] px-4 py-1 text-[14px] flex flex-row items-center justify-center gap-1 border border-black text-black">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="black"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-move-right-icon lucide-move-right"
              >
                <path d="M18 8L22 12L18 16" />
                <path d="M2 12H22" />
              </svg>
              Upgrade Now
            </button>
          </div>
        </div>

        {/* {!isSmallScreen ? (
          <div className="px-5 mt-20">
            <div
              onClick={() => UserLogOut()}
              className="flex flex-row justify-start gap-1 pt-4 items-start px-1 cursor-pointer border-t-[#EEE8FB] border-t-[1px]"
            >
              <svg
                width="18"
                height="19"
                viewBox="0 0 18 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.5625 15.4616C9.5625 15.6108 9.62176 15.7539 9.72725 15.8594C9.83274 15.9648 9.97582 16.0241 10.125 16.0241H14.625C14.7742 16.0241 14.9173 15.9648 15.0227 15.8594C15.1282 15.7539 15.1875 15.6108 15.1875 15.4616V3.08661C15.1875 2.93742 15.1282 2.79435 15.0227 2.68886C14.9173 2.58337 14.7742 2.52411 14.625 2.52411H10.125C9.97582 2.52411 9.83274 2.58337 9.72725 2.68886C9.62176 2.79435 9.5625 2.93742 9.5625 3.08661C9.5625 3.23579 9.62176 3.37887 9.72725 3.48436C9.83274 3.58985 9.97582 3.64911 10.125 3.64911H14.0625V14.8991H10.125C9.97582 14.8991 9.83274 14.9584 9.72725 15.0639C9.62176 15.1693 9.5625 15.3124 9.5625 15.4616ZM1.85203 8.87614L4.66453 6.06364C4.77008 5.95809 4.91323 5.8988 5.0625 5.8988C5.21177 5.8988 5.35492 5.95809 5.46047 6.06364C5.56602 6.16919 5.62531 6.31234 5.62531 6.46161C5.62531 6.61088 5.56602 6.75403 5.46047 6.85958L3.60773 8.71161H10.125C10.2742 8.71161 10.4173 8.77087 10.5227 8.87636C10.6282 8.98185 10.6875 9.12492 10.6875 9.27411C10.6875 9.42329 10.6282 9.56637 10.5227 9.67186C10.4173 9.77735 10.2742 9.83661 10.125 9.83661H3.60773L5.46047 11.6886C5.56602 11.7942 5.62531 11.9373 5.62531 12.0866C5.62531 12.2359 5.56602 12.379 5.46047 12.4846C5.35492 12.5901 5.21177 12.6494 5.0625 12.6494C4.91323 12.6494 4.77008 12.5901 4.66453 12.4846L1.85203 9.67208C1.79973 9.61984 1.75824 9.5578 1.72993 9.48951C1.70163 9.42123 1.68706 9.34803 1.68706 9.27411C1.68706 9.20019 1.70163 9.12699 1.72993 9.0587C1.75824 8.99042 1.79973 8.92838 1.85203 8.87614Z"
                  fill="#F04438"
                />
              </svg>
              <span className="text-[#F04438] text-[14px] font-geist-medium">
                Logout
              </span>
            </div>
          </div>
        ) : (
          <div className="px-4 mt-20">
            <div
              onClick={() => UserLogOut()}
              className="flex flex-row pt-4 justify-center ml-8 cursor-pointer border-t-[#EEE8FB] border-t-[1px]"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.4375 15.1875C8.4375 15.3367 8.37824 15.4798 8.27275 15.5852C8.16726 15.6907 8.02418 15.75 7.875 15.75H3.375C3.22582 15.75 3.08274 15.6907 2.97725 15.5852C2.87176 15.4798 2.8125 15.3367 2.8125 15.1875V2.8125C2.8125 2.66332 2.87176 2.52024 2.97725 2.41475C3.08274 2.30926 3.22582 2.25 3.375 2.25H7.875C8.02418 2.25 8.16726 2.30926 8.27275 2.41475C8.37824 2.52024 8.4375 2.66332 8.4375 2.8125C8.4375 2.96168 8.37824 3.10476 8.27275 3.21025C8.16726 3.31574 8.02418 3.375 7.875 3.375H3.9375V14.625H7.875C8.02418 14.625 8.16726 14.6843 8.27275 14.7898C8.37824 14.8952 8.4375 15.0383 8.4375 15.1875ZM16.148 8.60203L13.3355 5.78953C13.2299 5.68398 13.0868 5.62469 12.9375 5.62469C12.7882 5.62469 12.6451 5.68398 12.5395 5.78953C12.434 5.89508 12.3747 6.03823 12.3747 6.1875C12.3747 6.33677 12.434 6.47992 12.5395 6.58547L14.3923 8.4375H7.875C7.72582 8.4375 7.58274 8.49676 7.47725 8.60225C7.37176 8.70774 7.3125 8.85082 7.3125 9C7.3125 9.14918 7.37176 9.29226 7.47725 9.39775C7.58274 9.50324 7.72582 9.5625 7.875 9.5625H14.3923L12.5395 11.4145C12.434 11.5201 12.3747 11.6632 12.3747 11.8125C12.3747 11.9618 12.434 12.1049 12.5395 12.2105C12.6451 12.316 12.7882 12.3753 12.9375 12.3753C13.0868 12.3753 13.2299 12.316 13.3355 12.2105L16.148 9.39797C16.2003 9.34573 16.2418 9.28369 16.2701 9.2154C16.2984 9.14712 16.3129 9.07392 16.3129 9C16.3129 8.92608 16.2984 8.85288 16.2701 8.7846C16.2418 8.71631 16.2003 8.65427 16.148 8.60203Z"
                  fill="#DD7021"
                />
              </svg>
            </div>
          </div>
        )} */}
      </div>
    </div>
  );
};

export default UserSidebar;
