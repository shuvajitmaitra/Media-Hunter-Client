import Footer from "../../Components/Footer/Footer";
import bannerBg from "../../assets/banner-bg.svg"

const Home = () => {
    return (
        <div className=" z-10">
          <img src={bannerBg} alt="" className="h-screen" />
            <Footer></Footer>
        </div>
    );
};

export default Home;