import { useParams } from "react-router-dom";

import "./DevelopmentPage.css";
import NotFound from "./NotFound";

const developmentBrands = {
  "7level-io": "7level-io",
  "lrn-studio": "LRN Studio",
};

const DevelopmentPage = () => {
  const { brand } = useParams();
  const brandName = developmentBrands[brand];

  if (!brandName) {
    return <NotFound />;
  }

  return (
    <main className="development-page">
      <section className="development-message" aria-labelledby="development-title">
        <p className="development-eyebrow">{brandName}</p>
        <h1 id="development-title">Website under development.</h1>
      </section>
    </main>
  );
};

export default DevelopmentPage;
