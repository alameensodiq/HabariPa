import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import store from "./Store/store.js";
import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <Toaster
      position="top-center"
      toastOptions={{
        success: {
          style: {
            fontSize: "16px",
            marginTop: "14px",
            color: "white",
            background: "#3fb172",
            padding: "10px"
          }
        },
        error: {
          style: {
            fontSize: "16px",
            marginTop: "14px",
            color: "white",
            background: "#ff0000",
            padding: "10px"
          }
        }
      }}
    />
    <App />
  </Provider>
);
