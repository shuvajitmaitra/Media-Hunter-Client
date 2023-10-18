import { createBrowserRouter } from "react-router-dom";
import Root from "../Components/Root/Root";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import AddProduct from "../Components/AddProduct/AddProduct";
import Register from "../Pages/Register/Register";
import PrivateRoute from "../Components/PrivateRoute/PrivateRoute";
import ProductDetails from "../Components/ProductDetails/ProductDetails";


const Router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children:[
            {
                path: "/",
                element: <Home></Home>,
                loader: ()=>fetch('/brand.json')
            },
            {
                path: "/register",
                element: <Register></Register>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/addProduct",
                element:<PrivateRoute> <AddProduct></AddProduct></PrivateRoute>
            },
            {
                path: "/product-details/:brand_name",
                element:<ProductDetails></ProductDetails>,
                loader: () => fetch("http://localhost:5000/product")
            },
          
        ]
        
    }
])

export default Router;