import bannerBg from "../../assets/banner-bg.svg"

const Home = () => {
    return (
        <div className="relative z-10">
          <img src={bannerBg} alt="" className="h-screen absolute" />
            
        </div>
    );
};

export default Home;