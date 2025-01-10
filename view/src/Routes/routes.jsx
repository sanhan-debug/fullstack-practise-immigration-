import AddProduct from "../Pages/AddProduct";
import Home from "../Pages/Home";
import Root from "../Pages/root";


const ROUTES = [
    {
        path: "/",
        element: <Root />,
        children: [
            {
                path: "",
                element: <Home />
            },
            {
                path: "addProduct",
                element: <AddProduct />
            }
        ]
    }
]

export default ROUTES