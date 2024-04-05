import React, { useEffect, useState } from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const Testimonial = () => {
  const [Data, SetData] = useState();

  useEffect(() => {
    fetch("https://mrcc-server.onrender.com/Testimonials")
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        SetData(json);
      });
  }, []);

  return (
    <div className="slide-container">
      <Slide>
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
                <span className="TestimonialMessage">&emsp;{item.message}</span>
              </div>
            </div>
          </div>
        ))}
      </Slide>
    </div>
  );
};
export default Testimonial;
