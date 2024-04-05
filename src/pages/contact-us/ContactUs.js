import React from "react";
import Top from "../../common/top-block/Top";
import Bottom from "../../common/bottom-block/Bottom";
import Nav from "../../common/nav-block/Nav";
import "./contact.css";

function ContactUs() {
  const handleSubmit = () => {
    const Name = document.getElementById("Name")?.value || "";
    const Message = document.getElementById("Message")?.value || "";
    const Email = document.getElementById("Email")?.value || "";

    console.log("Name: " + Name + " Email: " + Email + " Message: " + Message);

    fetch("https://mrcc-server.onrender.com/SendMail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: Name,
        email: Email,
        message: Message,
      }),
    });
    window.location.reload();
  };

  return (
    <div className="ContactUsWrapper">
      <Top />
      <Nav />
      <div className="MapEmailWrapper flex-c-c">
        <div className="MapWrapper">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d905.0227902153471!2d93.9178027!3d24.8607359!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3748d94a9283b87f%3A0x21368df2314586f7!2sMRCC%20Matai%20Rehabilitation%20care%20centre%20PHYSIOTHERAPY!5e0!3m2!1sen!2sin!4v1709965069729!5m2!1sen!2sin"
            style={{ border: 0 }}
            width="100%"
            height="100%"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
        <div className="EmailTxtWrapper flex-c-c">
          <h2 className="MailHeader">Drop us a mail</h2>
          <div className="MailInputWrapper flex-c-c">
            <div className="MailInputs flex-c-c">
              <h3 className="MailInputHeader">Name</h3>
              <input
                className="MailInput"
                id="Name"
                type="text"
                placeholder="eg. Thoiba"
              ></input>
            </div>
            <div className="MailInputs flex-c-c">
              <h3 className="MailInputHeader">Email</h3>
              <input
                className="MailInput"
                id="Email"
                type="text"
                placeholder="thoiba@gmail.com"
              ></input>
            </div>
            <div className="MailInputs flex-c-c">
              <h3 className="MailInputHeader">message</h3>
              <textarea
                className="MailInput message "
                type="text"
                id="Message"
              ></textarea>
            </div>
          </div>
          <div className="EmailButtons flex-c-c">
            <button
              className="EmailButton send flex-c-c"
              onClick={handleSubmit}
            >
              Send
            </button>
            <button className="EmailButton cancel flex-c-c">cancel</button>
          </div>
        </div>
      </div>
      <Bottom />
    </div>
  );
}

export default ContactUs;
