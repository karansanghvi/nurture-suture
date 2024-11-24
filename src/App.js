import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
// import Layout from "./pages/Layout";
import AboutUs from "./pages/AboutUs";
import Services from "./pages/Services";
import Programs from "./pages/Programs";
import SocialWork from "./pages/SocialWork";
import ContactUs from "./pages/ContactUs";
import Chatbot from "./components/ChatBot";

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
            <Route path="chatbot" element={<Chatbot/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
