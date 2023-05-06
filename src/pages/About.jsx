import "./About.scss";
import aboutImg from "../assets/blog-images/about-img.png";

export const About = () => {
  return (
    <div className="container">
      <div className="about-section">
        <div className="about-title">
          <p> I am Shahnaj Parven</p>
          <h2>A Travel Blogger</h2>
          <button className="about-btn">Explore Here</button>
        </div>

        <div className="about-image" id="about-image">
          <img src={aboutImg} alt="about-img" id="about-img"/>
        </div>
      </div>
    </div>
  );
};
