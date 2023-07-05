import { createBrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import Product from "./components/Product.jsx";
import AddProduct from "./components/AddProduct.jsx";
import EditProduct from "./components/EditProduct.jsx";
import Layout from "./components/Layout.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <App />,
            },
            {
                path: "product/:productId",
                element: <Product />,
            },
            {
                path: "add-product",
                element: <AddProduct />,
            },
            {
                path: "edit-product/:productId", //po kropce żeby wiedział, jaki produkt ma edytować po id
                element: <EditProduct />,
            },
        ],
    },
]);

export default router;
