import React from "react";

const pathName = window.location.pathname;
console.log("Pathname: ", window.location.pathname);

function Nav() {
  return (
    <div className="NavWrapper flex-c-c">
      <a
        href="/"
        className={
          pathName === "/"
            ? "NavItems flex-c-c NavItemActive"
            : "NavItems flex-c-c"
        }
      >
        Home
      </a>
      <a
        href="/Specialist"
        className={
          pathName === "/Specialist"
            ? "NavItems flex-c-c NavItemActive"
            : "NavItems flex-c-c"
        }
      >
        Our Specialist
      </a>
      <a
        href="/ContactUs"
        className={
          pathName === "/ContactUs"
            ? "NavItems flex-c-c NavItemActive"
            : "NavItems flex-c-c"
        }
      >
        Contact Us
      </a>
    </div>
  );
}

export default Nav;
