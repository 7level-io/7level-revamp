import HeroBanner from "../components/HeroBanner";
import LandingSection from "../components/LandingSection";
import WellnessGrid from "../components/WellnessGrid";
import { karoHardwareItems } from "../data/ArraysOfItems";

const KaroHardwarePage = () => {
  return (
    <>
      <HeroBanner />
      <WellnessGrid items={karoHardwareItems}/>
      <LandingSection />
    </>
  );
};

export default KaroHardwarePage;
