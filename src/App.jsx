import React, { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
// import "./App.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from "react-router-dom";
import { Loader } from "./utils/Loader";
import UserMarketing from "./Component/UserMarketing";
import UserDashboardIndex from "./Component/UserDashboardIndex";
import { user } from "./Routes";

const LazyIndexPage = React.lazy(() => import("./Component/Home"));

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      {/* Public Routes */}
      <Route
        path="/"
        element={
          <React.Suspense fallback={<Loader />}>
            <LazyIndexPage />
          </React.Suspense>
        }
      />
      <Route path={user} element={<UserDashboardIndex />}>
        <Route index element={<UserMarketing />} />
        {/* <Route path={quotes} element={<UserQuotes />} />
        <Route path={report} element={<UserReport />} />
        <Route path={compliance} element={<UserCompliance />} />
        <Route path={settings} element={<UserSettings />} />
        <Route path={help} element={<UserHelp />} />
        <Route path={profile} element={<UserProfile />} /> */}
      </Route>
    </>
  )
);

function App() {
  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
}

export default App;
