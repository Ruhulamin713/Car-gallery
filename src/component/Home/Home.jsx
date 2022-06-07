import React from "react";
import Banner from "../Banner/Banner";
import Collection from "../Collection/Collection";
import Section1 from "../section1/Section1";
import Footer from "../Shared/Footer/Footer";
import Section from "./Sections/Section";

const Home = () => {
  return (
    <div>
      <Banner />
      <Collection />
      <Section1 />
      <Section />
      <Footer />
    </div>
  );
};

export default Home;
