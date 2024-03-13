import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Specialist from "./pages/specialist/Specialist";
import ContactUs from "./pages/contact-us/ContactUs";

function MainRouter() {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<Home />} />
        <Route path="Specialist" element={<Specialist />} />
        <Route path="ContactUs" element={<ContactUs />} />
      </Route>
    </Routes>
  );
}

export default MainRouter;
