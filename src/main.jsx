import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom"; // Import RouterProvider correctly
import router from "./routers/router"; // Ensure the router is imported correctly
import { Provider } from "react-redux";
import { store } from "./redux/store";
import "sweetalert2/dist/sweetalert2.js";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={router} /> {/* Correctly providing the router */}
  </Provider>
);
