import "./App.css";
import "./assets/styles/SofiaPro.css";

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import BannerMarquee from "./components/BannerMarquee";
import TopNavbar from "./components/TopNavbar";
import HomePage from "./pages/HomePage";
import KaroHardwarePage from "./pages/KaroHardwarePage";

function App() {
  return (
      <Router>
        <BannerMarquee />
        <TopNavbar />
        <Routes>
          <Route
            path="/7level-revamp"
            element={<HomePage />}
          />

          <Route path="/karo-hardware" element={<KaroHardwarePage />} />
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
