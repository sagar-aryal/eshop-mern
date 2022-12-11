import "./Carousel.css";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const images = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1607082349566-187342175e2f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHNhbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    alt: "Image 1",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1607083206139-7c5b07e66ac3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjF8fHNhbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    alt: "Image 2 ",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHNhbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    alt: "Image 3",
  },
];

const ImageSlider = () => {
  const settings = {
    infinite: true,
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    lazyLoad: true,
    autoplay: true,
    autoplaySpeed: 2000,
  };
  return (
    <div className="imgslider">
      <Slider {...settings}>
        {images.map((item) => (
          <div key={item.id}>
            <img src={item.src} alt={item.alt} />
          </div>
        ))}
      </Slider>
    </div>
  );
};
export default ImageSlider;
