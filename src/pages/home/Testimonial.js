import React, { useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

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
          showArrows={false}
          infiniteLoop={true}
          autoPlay={true}
          interval={2000}
          showStatus={false}
          showIndicators={false}
          transitionTime={1000}
          stopOnHover={true}
          emulateTouch={true}
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
