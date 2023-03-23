import React from "react";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import SearchBar from "../../components/SearchBar";
import Content from "./components/Content";

const Detail = () => {
  return (
    <div>
      <Navbar />
      <SearchBar canSearch={false} />
      <Content />
      <Footer />
    </div>
  );
};

export default Detail;
