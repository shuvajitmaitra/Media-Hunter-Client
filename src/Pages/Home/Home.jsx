import { useLoaderData } from "react-router-dom";
import Footer from "../../Components/Footer/Footer";
import bannerBg from "../../assets/banner-bg.svg";
import { Link } from "react-router-dom";
import Feedback from "../../Components/Feedback/Feedback";
import Teams from "../../Components/Teams/Teams";

const Home = () => {
  const brands = useLoaderData();
  return (
    <div className="">
      <div className="relative  h-screen max-h-[600px] flex justify-center items-center">
       <img src={bannerBg} className="h-full opacity-80" />
        <h3 className="text-2xl font-bold md:text-6xl absolute">
          Find Your Favorite Media
        </h3>
      </div>
      <h2 className="text-2xl md:text-5xl text-center font-bold py-6">
        Best Media Brands
      </h2>
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-8 ">

        {brands?.map((brand) => (
          <Link
            to={`/products/${brand.brand_name}`}
            key={brand.id}
            className="bg-[#f3aa6088] p-8 rounded-lg "
          >
            <div className="space-y-4">
              <img
                src={brand.brand_image}
                className="w-full h-48 block mx-auto left-0 right-0 rounded-lg"
              />
              <h2 className="text-xl font-bold text-center text-white">
                {brand.brand_name}
              </h2>
            </div>
          </Link>
        ))}
      </div>
      <Teams></Teams>
      <Feedback></Feedback>
      <Footer></Footer>
    </div>
  );
};

export default Home;
