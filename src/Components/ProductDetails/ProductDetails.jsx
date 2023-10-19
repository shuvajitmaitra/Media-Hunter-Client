import { BsCartPlus } from "react-icons/bs";
import { useLoaderData, useParams } from "react-router-dom";

const ProductDetails = () => {
  const { _id } = useParams();
  const products = useLoaderData();
  const product = products.find((singleProduct) => singleProduct._id === _id);
  console.log(products);
  console.log(_id);
  console.log(product);
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <h2 className="text-xl md:text-4xl font-bold py-6">
        {product?.type} details
      </h2>
      <img
        src={product?.photo}
        className="w-96"
      />
      <BsCartPlus />
    </div>
  );
};

export default ProductDetails;
