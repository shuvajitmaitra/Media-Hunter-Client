import { createBrowserRouter } from "react-router-dom";
import Root from "../Components/Root/Root";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import AddProduct from "../Components/AddProduct/AddProduct";
import Register from "../Pages/Register/Register";
import PrivateRoute from "../Components/PrivateRoute/PrivateRoute";
import Products from "../Components/Products/Products";
import ProductDetails from "../Components/ProductDetails/ProductDetails";
import UpdateProduct from "../Components/UpdateProduct/UpdateProduct";
import Cart from "../Components/Cart/Cart";
// import ErrorPage from "../Components/ErrorPage/ErrorPage";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    // errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("/brand.json"),
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/addProduct",
        element: (
          <PrivateRoute>
            {" "}
            <AddProduct></AddProduct>
          </PrivateRoute>
        ),
      },
      {
        path: "/products/:brand_name",
        element: <Products></Products>,
        loader: () =>
          fetch(
            "https://assingment-10-media-hunter-server-98gi7m8jc.vercel.app/product"
          ),
      },
      {
        path: "/product-details/:_id",
        element: (
          <PrivateRoute>
            <ProductDetails></ProductDetails>
          </PrivateRoute>
        ),
        loader: () =>
          fetch(
            "https://assingment-10-media-hunter-server-98gi7m8jc.vercel.app/product"
          ),
      },
      {
        path: "/addToCart",
        element: (
          <PrivateRoute>
            <Cart></Cart>
          </PrivateRoute>
        ),
        loader: () =>
          fetch(
            `https://assingment-10-media-hunter-server-98gi7m8jc.vercel.app/cart`
          ),
      },
      {
        path: "/product-update/:id",
        element: (
          <PrivateRoute>
            <UpdateProduct></UpdateProduct>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://assingment-10-media-hunter-server-98gi7m8jc.vercel.app/product/${params.id}`
          ),
      },
    ],
  },
]);

export default Router;
