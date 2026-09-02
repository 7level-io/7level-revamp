import HeroBanner from "../components/HeroBanner";
import WellnessGrid from "../components/WellnessGrid";
import { homeItems } from "../data/ArraysOfItems";

const HomePage = () => {
  return (
    <>
      <HeroBanner />
      <section data-navbar-color="brown">
        <WellnessGrid items={homeItems} />
      </section>
    </>
  );
};

export default HomePage;
