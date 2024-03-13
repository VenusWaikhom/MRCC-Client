import React from "react";
import Top from "../../common/top-block/Top";
import Nav from "../../common/nav-block/Nav";
import Bottom from "../../common/bottom-block/Bottom";
import "./Home.css";
import ImageCarousal from "./ImageCarousel";
import Testimonial from "./Testimonial";

function Home() {
  return (
    <div className="HomeWrapper">
      <Top />
      <Nav />
      <div className="HomeMainWrapper">
        <div className="HomeImageCorosal">
          <ImageCarousal />
        </div>
        <div className="BodyWrapper flex-c-c">
          <h2 className="BodyHeader">About US</h2>
          <div className="Body">
            <p className="BodyTxt">
              oaisudhglkasjdholkasjhdblkashdglakjshdgkasjhdg
            </p>
          </div>
        </div>
        <div className="BodyWrapper flex-c-c">
          <h2 className="BodyHeader">Services Avialable</h2>
          <div className="Body">
            <p className="BodyTxt">
              oaisudhglkasjdholkasjhdblkashdglakjshdgkasjhdg
            </p>
          </div>
        </div>
        <div className="BodyWrapper flex-c-c">
          <h2 className="BodyHeader">Testimonial</h2>
          <div className="Body Testimonial">
            <Testimonial />
          </div>
        </div>
      </div>
      <Bottom />
    </div>
  );
}

export default Home;
