import React, { useEffect } from "react";
import { useState } from "react";
import { Navigate, Outlet, useOutletContext } from "react-router-dom";
import UserSidebar from "./UserSidebar";

const UserDashboardIndex = () => {
  const [show, setShow] = useState(false);
  const [showNav, setShowNav] = useState(true);
  const [open, setOpen] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 1190);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const token = sessionStorage.getItem("token");
  const refresh = sessionStorage.getItem("refresh");
  const user = sessionStorage.getItem("user");
  const role = sessionStorage.getItem("role");

  const allowedRoles = ["checker", "verifier", "approver"];
  //   const isAuthenticated =
  //     token && refresh && user && allowedRoles.includes(role);
  const isAuthenticated = token;

  const Authenticated = () => {
    return (
      // <AdminDashboardIndex.Wrapper show={show} open={open} setOpen={setOpen}>
      <div className="flex h-screen w-full bg-[#F8F8F8]">
        <UserSidebar
          open={open}
          setOpen={setOpen}
          isSmallScreen={isSmallScreen}
        />
        <div className="flex-1 overflow-y-auto">
          <Outlet
            data-aos="fade-right"
            context={{ show, setShow, showNav, setShowNav }}
          />
        </div>
      </div>
      // </AdminDashboardIndex.Wrapper>
    );
  };

  // if (isAuthenticated) return <Navigate to="/" replace />;

  // return <Authenticated />;

  return sessionStorage.getItem("token") ? (
    //  &&
    //   sessionStorage.getItem("refresh") &&
    //   sessionStorage.getItem("user") &&
    //   (sessionStorage.getItem("role") === "checker" ||
    //     sessionStorage.getItem("role") === "verifier" ||
    //     sessionStorage.getItem("role") === "approver")
    //  window.location.href = '/super'
    //  (supers)

    <Authenticated />
  ) : (
    // <Navigate to="/admin-login" replace={true} />
    // <Authenticated />
    <Navigate to="/user" replace={true} />
  );
};

export default UserDashboardIndex;
