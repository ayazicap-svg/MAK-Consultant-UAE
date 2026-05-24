import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import WhyChoose from "../components/WhyChoose";
import CTA from "../components/CTA";
import Footer from "../components/Footer";
import WhatsAppFloat from "../components/WhatsAppFloat";
import ScrollProgress from "../components/ScrollProgress";

const Home = () => {
  return (
    <div>
      <ScrollProgress />
      <Navbar />
      <Hero />
      <About />
      <Services />
      <WhyChoose />
      <CTA />
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default Home;