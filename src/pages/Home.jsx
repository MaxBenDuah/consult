import ContactUs from "../components/ContactUs";
import Features from "../components/Features";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import InfoHeader from "../components/InfoHeader";
import NavBar from "../components/NavBar";
import OurPartners from "../components/OurPartners";
import Projects from "../components/Projects";
import Services from "../components/Services";
import Stats from "../components/Stats";
import Testimonial from "../components/Testimonial";
import WhoWeAre from "../components/WhoWeAre";
import WhyUs from "../components/WhyUs";

function Home() {
  return (
    <div>
      <InfoHeader />
      <NavBar />
      <Hero />
      <OurPartners />
      <Features />
      <WhoWeAre />
      <Services />
      <Projects />
      <Testimonial />
      <Stats />
      <WhyUs />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default Home;
