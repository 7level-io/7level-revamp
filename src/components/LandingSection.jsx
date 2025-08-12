import "./LandingSection.css";
import SectionBanner1 from "../assets/imgs/Placeholder_Section_Banner_1.png";

const LandingSection = () => {
  return (
    <div className="landing-container">
      <div
        className="banner"
        style={{
          backgroundImage: `url(${SectionBanner1})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          borderRadius: "20px 20px 0 0"
        }}
      >
        <div className="banner-heading">
          <span>Access a range of</span> doctor-trusted weight loss medications
        </div>
        <p className="subtext">GLP-1 medications available online</p>
        <div className="banner-image"></div>

        <div className="banner-buttons">
          <button className="btn-primary">Get started</button>
          <button className="btn-secondary">See if I'm eligible</button>
        </div>
      </div>

      <section className="info-cards">
        <div className="card">
          <h2>
            Moving in the <br />
            <strong>right direction</strong>
          </h2>
          <p>
            Cut your appetite and speed up fat burn — helping you shed fat, not
            just weight.
          </p>
          <button className="btn-primary">Get started</button>
        </div>

        <div className="card">
          <h2>
            Eat healthy, <br />
            <strong>get strong</strong>
          </h2>
          <p>
            Find meal plans, snacks, protein shakes & more to help you stay on
            track and feel great.
          </p>
          <button className="btn-primary">Get started</button>
          <div className="card-footer">
            <a href="#">Learn more about weight loss</a>
            <a href="#">Check your BMI</a>
          </div>
        </div>
      </section>

      <div className="personal-plan">
        <h2>
          It's more than a plan,
          <br />
          <strong>it’s personal</strong>
        </h2>
        <p>
          A smarter formula for your plan — tailored to your biometrics,
          lifestyle & budget, designed to support your journey.
        </p>
        <div className="plan-image">{/* Person Image & Stats here */}</div>
        <button className="btn-primary">Get started</button>
      </div>
    </div>
  );
};

export default LandingSection;
