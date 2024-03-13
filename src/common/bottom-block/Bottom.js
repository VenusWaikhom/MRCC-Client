import React from "react";

function Bottom() {
  return (
    <div className="BottomWrapper">
      <div style={{ gap: "4rem" }} className="flex-c-c BottomMainWrapper">
        <div className="BottomLeft">
          <h3 className="BottomHeader">Social Address</h3>
          <a
            href="https://www.facebook.com/people/Matai-Rehabilitation-Care-Centre/100086513682083/?mibextid=sCpJLy"
            className="BottomLeftItem"
          >
            <img
              className="SocialIcon"
              src="./Images/BottomIcons/facebook.png"
              alt="Facebook Icon"
            />
            <p className="SocialAddressInfo">Facebook</p>
          </a>
          <div className="BottomLeftItem">
            <img
              className="SocialIcon"
              src="./Images/BottomIcons/whatsapp.png"
              alt="WhatsApp Icon"
            />
            <p className="SocialAddressInfo">+91 9654321650</p>
          </div>

          <div className="BottomLeftItem">
            <img
              className="SocialIcon"
              src="./Images/BottomIcons/gmail.png"
              alt="Email Icon"
            />
            <p className="SocialAddressInfo">Example@gmail.com</p>
          </div>
        </div>
        <div className="BottomRight">
          <h3 className="BottomHeader">Postal Address</h3>
          <p className="BottomRightInfo">
            Matai Mamang Leikai,
            <br /> Luwangsangbam,
            <br />
            Matai Garden Road,
            <br /> Imphal, Manipur 795002
          </p>
          <br />
          <div className="BottomLeftItem">
            <img
              className="SocialIcon SocialIconCall"
              src="./Images/BottomIcons/phone-call.png"
              alt="Call Icon"
            />
            <p className="SocialAddressInfo SocialAddressInfoCall">
              +91 9654321650
            </p>
          </div>
        </div>
      </div>
      <div className="CopyRightTxt flex-c-c">Copyright © 2024</div>
    </div>
  );
}

export default Bottom;
