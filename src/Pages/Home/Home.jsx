import { useLoaderData } from "react-router-dom";
import Footer from "../../Components/Footer/Footer";
import bannerBg from "../../assets/banner-bg.svg"
import { Link } from "react-router-dom";

const Home = () => {
  const brands = useLoaderData()
    return (
        <div className=" z-10">
          <img src={bannerBg} alt="" className="h-screen" />
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-8 ">
        {
            brands.map(brand => <div key={brand.id} className="bg-gray-300 p-8 rounded-lg space-y-4">
            <Link to={`/product-details/${brand.brand_name}`}>
            <img src={brand.brand_image} className="w-full h-48 block mx-auto left-0 right-0 rounded-lg" />
              <h2 className="text-xl font-bold">{brand.brand_name}</h2>
            </Link>
            </div>)
          }
        </div>
            <Footer></Footer>
        </div>
    );
};

export default Home;