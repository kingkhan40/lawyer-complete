import React from "react";
import "./App.css";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import { Routes, Route } from "react-router-dom";
import Blog from "./components/pages/Blog";
import Navbar from "./components/Navbar/Navbar";
import Carousel from "./components/carousal/Carousel";
import Practice from "./components/pages/Practice";
import Team from "./components/pages/Team";
import Careers from "./components/pages/Careers";
import Clients from "./components/pages/Clients";
import BlogCard from "./components/Blog/BlogCard";
import Footer from "./components/Footer/Footer";
import Table1 from "./components/Tables/Table1";
import Table2 from "./components/Tables/Table2";
import Table3 from "./components/Tables/Table3";
import Table4 from "./components/Tables/Table4";
import Table5 from "./components/Tables/Table5";
import Table6 from "./components/Tables/Table6";
import Table7 from "./components/Tables/Table7";
import Table8 from "./components/Tables/Table8";
import Table9 from "./components/Tables/Table9";


const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />

        <Route path="/carousel" element={<Carousel />} />
        <Route path="/practice" element={<Practice />} />
        <Route path="/team" element={<Team />} />
        <Route path="/clinte" element={<Clients />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blogcard" element={<BlogCard />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/footer" element={<Footer />} />
        <Route path="/tab-1" element={<Table1 />} />
        <Route path="/tab-2" element={<Table2 />} />
        <Route path="/tab-3" element={<Table3 />} />
        <Route path="/tab-4" element={<Table4 />} />
        <Route path="/tab-5" element={<Table5 />} />
        <Route path="/tab-6" element={<Table6 />} />
        <Route path="/tab-7" element={<Table7 />} />
        <Route path="/tab-8" element={<Table8 />} />
        <Route path="/tab-9" element={<Table9 />} />


      </Routes>



    </>
  );
}

export default App;
