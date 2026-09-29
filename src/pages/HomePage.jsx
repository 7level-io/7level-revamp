import HeroBanner from "../components/HeroBanner";
import MarqueeStrip from "../components/MarqueeStrip";
import WellnessGrid from "../components/WellnessGrid";
import AboutSection from "../components/AboutSection";
import InquiriesSection from "../components/InquiriesSection";
import Footer from "../components/Footer";
import { homeItems } from "../data/ArraysOfItems";

const HomePage = () => {
  return (
    <>
      <HeroBanner />
      <MarqueeStrip />
      <WellnessGrid items={homeItems} />
      {/* Temporarily hidden until ready: */}
      {/* <AboutSection /> */}
      {/* <InquiriesSection /> */}
      <Footer />
    </>
  );
};

export default HomePage;
