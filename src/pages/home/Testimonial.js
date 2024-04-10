import React, { useEffect, useState } from "react";
// import { Slide } from "react-slideshow-image";
// import "react-slideshow-image/dist/styles.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

function Testimonial() {
  const [Data, SetData] = useState(null);

  useEffect(() => {
    fetch("https://mrcc-server.onrender.com/Testimonials")
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        SetData(json);
      });
  }, []);

  if (Data != null) {
    return (
      <div className="slide-container">
        <Carousel
          swipeable={true}
          draggable={true}
          showDots={false}
          responsive={responsive}
          ssr={true}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={3000}
          keyBoardControl={true}
          customTransition="all .5"
          transitionDuration={500}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile"]}
          itemClass="carousel-item-padding-40-px"
          focusOnSelect={true}
          arrows={false}
          centerMode={true}
        >
          {Data?.map((item, index) => (
            <div key={index} className="flex-c-c">
              <div className="TestimonialMainWrapper flex-c-c">
                <img
                  className="TestimonialPicture flex-c-c"
                  src={"https://mrcc-server.onrender.com" + item?.photo}
                  alt="PersonPhoto"
                />
                <div className="PersonAndMessage flex-c-c">
                  <div className="TestimonialName">{item.name}</div>
                  <span className="TestimonialMessage">
                    &emsp;{item.message}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    );
  }
}

export default Testimonial;
