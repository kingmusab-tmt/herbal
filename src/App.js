import "./App.css";
import React from "react";

import Navbar from "./Nav";
import { BrowserRouter } from "react-router-dom";
import SocialMediaNav from "./SocialMediaNav";
import Header from "./Header";
import About from "./About";
import Product from "./Product";
import Faq from "./Faq";
import ContactUs from "./ContactUs";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      {/* <h1>Hello</h1> */}
      <SocialMediaNav />
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
      <Header />
      <About />
      <Product />
      <Faq />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default App;
