import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./index.css";

import router from "./router.jsx";
import { CssBaseline } from "@mui/material";
import CartProvider from "./context/CartContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <CssBaseline />
        <CartProvider>
            {/* to jest props children */}
            <RouterProvider router={router} />
        </CartProvider>
    </React.StrictMode>
);
