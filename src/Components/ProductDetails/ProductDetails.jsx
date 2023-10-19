import { useContext } from "react";
import { BsCartPlus } from "react-icons/bs";
import { useLoaderData, useParams } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Swal from "sweetalert2";

const ProductDetails = () => {
  const { _id } = useParams();
  const products = useLoaderData();


  const product = products.find((singleProduct) => singleProduct._id === _id);
const {name, brand, price, photo, type, rating, description} = product
  const { user } = useContext(AuthContext);
  const handleAddToCart = () => {
    console.log("btn clicked");
    const uid = user.uid
    console.log(user);
    // console.log(product);
    // console.log(name, brand, price, photo, type, rating, description);

    const product = { uid,name, brand, price, photo, type, rating, description };
    fetch("http://localhost:5000/cart", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(product),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Media Added Successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };
  // console.log(products);
  // console.log(_id);
  // console.log(product);
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <h2 className="text-xl md:text-4xl font-bold py-6">
        {product?.type} details
      </h2>
      <img
        src={product?.photo}
        className="w-96"
      />
      <BsCartPlus onClick={handleAddToCart} />
    </div>
  );
};

export default ProductDetails;
