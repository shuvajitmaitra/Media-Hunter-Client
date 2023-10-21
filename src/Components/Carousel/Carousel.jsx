import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

const Carousel = ({brand_name }) => {
const [totalSlides, setTotalSlides] = useState([])

  useEffect(() => {
    fetch("/slides.json")
      .then((response) => response.json())
      .then((data) => setTotalSlides(data));
  }, []);

  const slides = totalSlides.filter(slide => slide.brand === brand_name)
  console.log(slides);
  

  const [current, setCurrent] = useState(0);

  const previousSlides = () => {
    if (current === 0) {
      setCurrent(slides.length - 1);
    } else {
      setCurrent(current - 1);
    }
  };
  const nextSlides = () => {
    if (current === slides.length - 1) {
      setCurrent(0);
    } else {
      setCurrent(current + 1);
    }
  };
  return (
    <div className="overflow-hidden relative mt-10 md:mt-3">
      <div
        className={`flex transition ease-out duration-300 `}
        style={{
          transform: `translateX(-${current * 100}%)`,
        }}
      >
        {slides?.map((slide, index) => (
          <img
            src={slide.slides_img}
            alt={`Slide ${index}`}
            key={slide.id}
          />
        ))}
      </div>
      <div className="absolute top-0 h-full w-full justify-between items-center flex text-white px-6 text-3xl ">
        <button onClick={previousSlides}>
          <BsArrowLeftCircleFill />
        </button>
        <button onClick={nextSlides}>
          <BsArrowRightCircleFill />
        </button>
      </div>
      <div className="absolute bottom-0 py-4 flex justify-center gap-3 w-full">
        {slides.map((slide, index) => {
          return (
            <div
              key={slide.id}
              className={`rounded-full w-3 h-3 ${
                index === current ? "bg-white" : "bg-gray-500"
              }`}
            ></div>
          );
        })}
      </div>
    </div>
  );
};
Carousel.propTypes ={
    brand_name: PropTypes.string
}


export default Carousel;
