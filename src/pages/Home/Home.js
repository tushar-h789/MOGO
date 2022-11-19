import React from "react";
import About from "../../componants/about/About";
import Copyright from "../../componants/copyright/Copyright";
import Counter from "../../componants/counter/Counter";
import Footer from "../../componants/footer/Footer";
import Navbar from "../../componants/navbar/Navbar";
import Services from "../../componants/services/Services";
import Speech from "../../componants/speech/Speech";
import Team from "../../componants/team/Team";
import Teamwork from "../../componants/teamWork/Teamwork";
import Workimage from "../../componants/workimage/Workimage";

const Home = () => {
  return (
    <>
      <Navbar />
      <About />
      <Counter />
      <Services />
      <Speech />
      <Team />
      <Teamwork />
      <Workimage />
      <Footer />
      <Copyright />
    </>
  );
};

export default Home;
