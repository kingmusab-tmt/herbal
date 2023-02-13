import "./App.css";
import React from "react";

import Navbar from "./Nav";
import { BrowserRouter } from "react-router-dom";
import SocialMediaNav from "./SocialMediaNav";
import Header from "./Header";
import About from "./About";
import Product from "./Product";
import Faq from "./Faq";
import Testimonial from "./Testimonial";
import ContactUs from "./ContactUs";
import Footer from "./Footer";
import { testimonials } from "./Testimonials";
import News from "./News";

function App() {
  return (
    <div className="App">
      {/* <h1>Hello</h1> */}
      <SocialMediaNav />
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
      <Header />
      <News />
      <About />
      <Product />
      <Faq />
      <Testimonial testimonials={testimonials} />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default App;
