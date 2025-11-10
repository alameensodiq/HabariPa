import React, { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from "react-router-dom";
import { Loader } from "./utils/Loader";

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
      {/* <Route path="/signup" element={<SignUp />} /> */}
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
