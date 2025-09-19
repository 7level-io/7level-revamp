import "./App.css";
import "./assets/styles/SofiaPro.css";

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import BannerMarquee from "./components/BannerMarquee";
import TopNavbar from "./components/TopNavbar";
import HomePage from "./pages/HomePage";
import KaroHardwarePage from "./pages/KaroHardwarePage";
import NotFound from "./pages/NotFound";

function App() {
  // const host = window.location.hostname;

  return (
    <Router>
      <BannerMarquee />
      <TopNavbar />
      <Routes>
        {/* <Route path="/" element={<HomePage />} /> */}
        <Route path="/" element={<KaroHardwarePage />} />
        <Route path="*" element={<NotFound />} />

        {/* <Route path="/regrow-hair" element={<RegrowHair />} />
          <Route path="/last-longer" element={<LastLonger />} />
          <Route path="/better-sex" element={<BetterSex />} />
          <Route path="/tackle-anxiety" element={<TackleAnxiety />} />
          <Route path="/smoother-skin" element={<SmootherSkin />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
