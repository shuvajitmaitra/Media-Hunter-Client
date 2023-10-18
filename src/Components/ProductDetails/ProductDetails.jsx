import { useLoaderData, useParams } from "react-router-dom";
import { CgDetailsMore } from "react-icons/cg";
import { FiEdit } from "react-icons/fi";

const ProductDetails = () => {
  const loadedProduct = useLoaderData();
  const { brand_name } = useParams();

  const products = loadedProduct.filter(
    (product) => product.brand === brand_name
  );
  console.log(products);
  return (
    <div className="pt-28 w-full border">
      {loadedProduct.length}
      {products.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 ">
          {products.map((product) => (
            <span
              key={product._id}
              className="p-4 font-medium"
            >
              <img
                src={product.photo}
                className="w-80 h-64"
              />
              <div className="flex justify-between items-center">
                <h2>{product.name}</h2>
                <CgDetailsMore></CgDetailsMore>
              </div>
              <div className="flex justify-between items-center">
                <h2>{product.brand}</h2>
                <FiEdit></FiEdit>
              </div>
              <h2>{product.price}</h2>
              <h2>{product.type}</h2>
              <h2>{product.rating}</h2>
              <h2>{product.description}</h2>
            </span>
          ))}
        </div>
      ) : (
        <div className="h-[70vh] flex justify-center items-center">
          <h2 className="text-xl text-center md:text-4xl font-bold">
            No Product Found
          </h2>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
