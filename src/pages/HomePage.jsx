import HeroBanner from "../components/HeroBanner";
import LandingSection from "../components/LandingSection";
import WellnessGrid from "../components/WellnessGrid";
import { homeItems } from "../data/ArraysOfItems";

const HomePage = () => {
  return (
    <>
      <HeroBanner />
      <section data-navbar-color="brown">
        <WellnessGrid items={homeItems} />
      </section>
      <LandingSection />
    </>
  );
};

export default HomePage;
