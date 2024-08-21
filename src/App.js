import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
// import Layout from "./pages/Layout";
import AboutUs from "./pages/AboutUs";
import Services from "./pages/Services";
import Programs from "./pages/Programs";
import SocialWork from "./pages/SocialWork";
import ContactUs from "./pages/ContactUs";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="aboutus" element={<AboutUs/>}/>
            <Route path="services" element={<Services/>}/>
            <Route path="programs" element={<Programs/>}/>
            <Route path="socialwork" element={<SocialWork/>}/>
            <Route path="contactus" element={<ContactUs/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
