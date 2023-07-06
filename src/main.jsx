import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import "./index.css";
import router from "./router.jsx";
import CartProvider from "./context/CartContex";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <CssBaseline />
        <CartProvider>
            {/*to jest props children */}
            <RouterProvider router={router} />
        </CartProvider>
    </React.StrictMode>
);
