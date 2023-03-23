import imgCar from "../../assets/img_car.png";

import Footer from "../../components/Footer";
import Main from "../../components/Main";
import Navbar from "../../components/Navbar";

import CarRental from "./components/CarRental";
import FAQ from "./components/FAQ";
import SewaMobil from "./components/SewaMobil";
import Testimonial from "./components/Testimonial";
import WhyUs from "./components/WhyUs";

const Home = () => {
  return (
    <div>
      <img src={imgCar} />
      <Navbar />
      <Main showButton />
      <CarRental />
      <WhyUs />
      <Testimonial />
      <SewaMobil />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Home;
