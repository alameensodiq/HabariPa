import React from "react";
import UserNavbar from "./UserNavbar";
import NavbarSearchInput from "../Reusables/NavbarSearchInput";
import EmailInputWrapper from "../Reusables/EmailInputWrapper";

const UserEmail = () => {
  const data = [
    {
      id: 1,
      name: "Starred",
      image: (
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
      )
    },
    {
      id: 2,
      name: "Sent",
      image: (
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
          class="lucide lucide-send-icon lucide-send"
        >
          <path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z" />
          <path d="m21.854 2.147-10.94 10.939" />
        </svg>
      )
    },
    {
      id: 3,
      name: "Important",
      image: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-octagon-alert-icon lucide-octagon-alert"
        >
          <path d="M12 16h.01" />
          <path d="M12 8v4" />
          <path d="M15.312 2a2 2 0 0 1 1.414.586l4.688 4.688A2 2 0 0 1 22 8.688v6.624a2 2 0 0 1-.586 1.414l-4.688 4.688a2 2 0 0 1-1.414.586H8.688a2 2 0 0 1-1.414-.586l-4.688-4.688A2 2 0 0 1 2 15.312V8.688a2 2 0 0 1 .586-1.414l4.688-4.688A2 2 0 0 1 8.688 2z" />
        </svg>
      )
    },
    {
      id: 4,
      name: "Drafts",
      image: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-book-dashed-icon lucide-book-dashed"
        >
          <path d="M12 17h1.5" />
          <path d="M12 22h1.5" />
          <path d="M12 2h1.5" />
          <path d="M17.5 22H19a1 1 0 0 0 1-1" />
          <path d="M17.5 2H19a1 1 0 0 1 1 1v1.5" />
          <path d="M20 14v3h-2.5" />
          <path d="M20 8.5V10" />
          <path d="M4 10V8.5" />
          <path d="M4 19.5V14" />
          <path d="M4 4.5A2.5 2.5 0 0 1 6.5 2H8" />
          <path d="M8 22H6.5a1 1 0 0 1 0-5H8" />
        </svg>
      ),
      number: 30
    },
    {
      id: 5,
      name: "Trash",
      image: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-trash2-icon lucide-trash-2"
        >
          <path d="M10 11v6" />
          <path d="M14 11v6" />
          <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6" />
          <path d="M3 6h18" />
          <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
        </svg>
      )
    }
  ];

  const LabelData = [
    {
      id: 1,
      name: "Work",
      image: (
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
          class="lucide lucide-tag-icon lucide-tag"
        >
          <path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z" />
          <circle cx="7.5" cy="7.5" r=".5" fill="currentColor" />
        </svg>
      )
    },
    {
      id: 2,
      name: "Family",
      image: (
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
          class="lucide lucide-tag-icon lucide-tag"
        >
          <path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z" />
          <circle cx="7.5" cy="7.5" r=".5" fill="currentColor" />
        </svg>
      )
    },
    {
      id: 3,
      name: "Friends",
      image: (
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
          class="lucide lucide-tag-icon lucide-tag"
        >
          <path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z" />
          <circle cx="7.5" cy="7.5" r=".5" fill="currentColor" />
        </svg>
      )
    },
    {
      id: 4,
      name: "Office",
      image: (
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
          class="lucide lucide-tag-icon lucide-tag"
        >
          <path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z" />
          <circle cx="7.5" cy="7.5" r=".5" fill="currentColor" />
        </svg>
      ),
      number: 30
    }
  ];

  const emails = [1, 2, 3, 4];
  return (
    <div className="flex flex-col">
      <UserNavbar />
      <div className="flex flex-col px-[25px] py-5 gap-5">
        <div className="bg-white p-3 rounded-[4px] border border-black flex flex-col md:flex-row">
          <div className="md:w-[20%] flex flex-col p-3 gap-3">
            <div className="flex flex-row gap-3">
              <img
                src={""}
                alt="image"
                className="rounded-full w-[40px] h-[40px] bg-black"
              />
              <div className="flex flex-col">
                <span className="font-bold text-[14px] text-black">
                  Ari budin
                </span>
                <span className="text-[12px] text-[#2b2222ac]">
                  Web Developer
                </span>
              </div>
            </div>
            <button className="bg-[#aef16e] px-4 py-1 text-[14px] flex flex-row items-center justify-center gap-1 border border-black text-black font-bold">
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
                class="lucide lucide-notebook-pen-icon lucide-notebook-pen"
              >
                <path d="M13.4 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-7.4" />
                <path d="M2 6h4" />
                <path d="M2 10h4" />
                <path d="M2 14h4" />
                <path d="M2 18h4" />
                <path d="M21.378 5.626a1 1 0 1 0-3.004-3.004l-5.01 5.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z" />
              </svg>
              Compose
            </button>
            <button className="bg-[#F5F5F5] px-2 py-1 text-[14px] flex flex-row items-center justify-between gap-1 border border-black text-black font-bold">
              <div className="flex flex-row gap-1 justify-center items-center">
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
                  class="lucide lucide-inbox-icon lucide-inbox"
                >
                  <polyline points="22 12 16 12 14 15 10 15 8 12 2 12" />
                  <path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z" />
                </svg>
                Inbox
              </div>
              24
            </button>
            {data?.map((item) => {
              return (
                <div className="flex flex-row gap-2 items-center text-black">
                  {item?.image}
                  {item?.name}
                  <span>{item?.number}</span>
                </div>
              );
            })}
            <span className="text-black text-[16px] font-bold">Labels</span>
            {LabelData?.map((item) => {
              return (
                <div className="flex flex-row gap-2 items-center text-black">
                  {item?.image}
                  {item?.name}
                </div>
              );
            })}
          </div>
          <div className="md:w-[80%] flex flex-col p-3 gap-3">
            <div className="flex flex-row justify-between items-center">
              <span className="text-black text-[16px] font-bold">Inbox</span>
              <NavbarSearchInput />
            </div>
            {emails?.map((item) => (
              <EmailInputWrapper />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserEmail;
