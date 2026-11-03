import "./App.css";
import { lazy, Suspense } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import TopNavbar from "./components/TopNavbar";

// Lazy load route pages for optimal initial bundle size and zero unused JS
const HomePage = lazy(() => import("./pages/HomePage"));
const LrnStudioPage = lazy(() => import("./pages/LrnStudioPage"));
const SevenLevelIoPage = lazy(() => import("./pages/SevenLevelIoPage"));
const DevelopmentPage = lazy(() => import("./pages/DevelopmentPage"));
const NotFound = lazy(() => import("./pages/NotFound"));

function App() {
  return (
    <Router>
      <TopNavbar />
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/lrn-studio" element={<LrnStudioPage />} />
          <Route path="/7level-io" element={<SevenLevelIoPage />} />
          <Route path="/:brand" element={<DevelopmentPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
