import { Link, useLoaderData, useParams } from "react-router-dom";
import { CgDetailsMore } from "react-icons/cg";
import { FiEdit } from "react-icons/fi";
import Carousel from "../Carousel/Carousel";

const Products = () => {
  let slides = [



  "https://i.postimg.cc/KzZS5c4J/Netflix-ad-1.jpg",
  "https://i.postimg.cc/cJGNrBWq/sony-ad-3.jpg",
  "https://i.postimg.cc/LsDj1xMk/captain-marvel.jpg",
  "https://i.postimg.cc/cLpdfNQb/Warner-ad-1.jpg",
  "https://i.postimg.cc/Sx7MBgj0/loki.webp",
]

const loadedProduct = useLoaderData();
const { brand_name } = useParams();

  const products = loadedProduct?.filter(
    (product) => product.brand === brand_name
  );
  console.log(products);
  return (
   <div className="pt-28">
    <div className="w-[60%] mx-auto">
<Carousel slides={slides} brand_name={brand_name}></Carousel>
    </div>
    <div className=" w-full max-w-screen-xl mx-auto py-10">
     

     {products?.length > 0 ? (
       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 ">
         {products?.map((product) => (
           <span
             key={product._id}
             className="p-4 bg-slate-200 rounded"
           >
             <img
               src={product.photo}
               className="w-80 h-64 block mx-auto left-0 right-0 rounded"
             />
             <h2 className="w-fit py-1">
               <span className="font-semibold uppercase ">Name: </span>
               {product.name}
             </h2>
             <div className="w-full py-1 flex justify-between">
               <div >
               <span className="font-semibold uppercase ">Brand: </span>
               {product.brand} 
               </div>
               <div>
               <span className="font-semibold uppercase ">Type: </span>{" "}
               {product.type}
               </div>
             </div>
             <div className="w-full py-1 flex justify-between ">
               <div >
               <span className="font-semibold uppercase ">Price: </span>
               {product.price} $
               </div>
               <div>
               <span className="font-semibold uppercase ">Rating: </span>{" "}
               {product.rating}
               </div>
             </div>
             <p className="w-fit py-1">
               {product?.description.slice(0, 100)}...
             </p>

             <Link
               to={`/product-details/${product._id}`}
               className="w-full gap-2 flex justify-center cursor-pointer items-center py-2 rounded my-3 mx-auto bg-[#468B97] text-3xl font-extrabold text-white  "
             >
               <p className="text-xl font-medium">Details</p>
               <CgDetailsMore></CgDetailsMore>
             </Link>

             <Link
               to={`/product-update/${product._id}`}
               className="w-full gap-2 flex justify-center cursor-pointer items-center py-2 rounded my-3 mx-auto bg-[#EF6262] text-3xl font-extrabold text-white "
             >
               <p className="text-xl font-medium">Edit</p>
               <FiEdit></FiEdit>
             </Link>
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
   </div>
  );
};

export default Products;
