import { useContext } from "react";
import { BsCartPlus } from "react-icons/bs";
import { useLoaderData, useParams } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Swal from "sweetalert2";

const ProductDetails = () => {
  const { _id } = useParams();
  const products = useLoaderData();

  const product = products.find((singleProduct) => singleProduct._id === _id);
  const { name, brand, price, photo, type, rating, description } = product;
  const { user } = useContext(AuthContext);
  const handleAddToCart = () => {
    const uid = user.uid;

    const product = {
      uid,
      name,
      brand,
      price,
      photo,
      type,
      rating,
      description,
    };
    fetch("https://assingment-10-media-hunter-server.vercel.app/cart", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(product),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Media Add To Cart Successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };

  return (
    <div className="bg-gray-300 bg-cover h-screen flex justify-center items-center">
      <div className="max-w-screen-lg mx-auto grid grid-cols-1 md:grid-cols-3 p-6 rounded-md gap-6">
        <div className="md:col-span-2 bg-white p-8 rounded-lg space-y-6">
          <img
            src={product.photo}
            className=" h-56  rounded-md block right-0 left-0 mx-auto"
          />
          <p>{product.description}</p>
        </div>
        <div className="md:col-span-1">
          <h3 className="text-xl font-bold  uppercase w-fit pb-2 border-b">
            product Details
          </h3>
          <h2 className="w-fit py-2 border-b">
            <span className="font-semibold uppercase ">Name: </span>
            {product.name}
          </h2>
          <h2 className="w-fit py-2 border-b">
            <span className="font-semibold uppercase ">Brand: </span>
            {product.brand}
          </h2>
          <h2 className="w-fit py-2 border-b">
            <span className="font-semibold uppercase ">Type: </span>
            {product.type}
          </h2>
          <h2 className="w-fit py-2 border-b">
            <span className="font-semibold uppercase ">Rating: </span>
            {product.rating}
          </h2>
          <p className="w-fit py-2 border-b">
            <span className="font-semibold uppercase ">price: </span>{" "}
            {product.price} $
          </p>
          <div
            onClick={handleAddToCart}
            className="w-full gap-2 flex justify-center cursor-pointer items-center py-2 rounded my-3 mx-auto bg-[#EF6262] text-3xl font-extrabold text-white "
          >
            <p className="text-xl font-medium">Add to Cart</p>
            <BsCartPlus />
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProductDetails;
