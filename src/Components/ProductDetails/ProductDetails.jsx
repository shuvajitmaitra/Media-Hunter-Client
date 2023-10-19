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
    console.log("btn clicked");
    const uid = user.uid;
    console.log(user);
    // console.log(product);
    // console.log(name, brand, price, photo, type, rating, description);

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
            text: "Media Add To Cart Successfully",
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
      <div>
        <img
          src={product?.photo}
          className="w-96 h-56"
        />
        <div onClick={handleAddToCart} className="w-full gap-2 flex justify-center cursor-pointer items-center py-2 rounded my-3 mx-auto bg-[#EF6262] text-3xl font-extrabold text-white ">
          <p className="text-xl font-medium">Add to Cart</p>
          <BsCartPlus
            
            className=""
          />
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
