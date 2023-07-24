import img1 from "../assets/images/img1.jpg";
import img2 from "../assets/images/img2.jpg";
import img3 from "../assets/images/img3.jpg";
import img4 from "../assets/images/img4.jpg";
import img5 from "../assets/images/img5.jpg";
import "./PopularPlace.scss";
const PopularPlace = () => {
  return (
    <div className="popular-section">
    <div className="container">
      <div className="popular-place-container">
        <div className="popular-place-left">
          <h1>Top Popular Places</h1>

          <div className="hr-line" />
          <p>
            Speak with your own voice! On our marketplaces you can maintain your
            identity, build your brand and promote your work to the community -
            however you like.
          </p>
          <div>
            <h2>Title are here</h2>
            <p> Speak with your own voice! On our marketplaces you can maintain your
            identity, build your brand and promote your work to the community</p>
            <button className="about-btn">See More</button>
            {/* <button className="about-btn">See More</button> */}
          </div>
        </div>
        <div className="popular-place-right">
          <div className="grid-container">
            <div className="grid-item1">
              <img src={img1} />
            </div>
            <div className="grid-item2">
            <div className="grids">
              <div className="grids1">
                <img src={img2} />
              </div>
              <div className="grids2">
                <img src={img5} />
              </div>
            </div>
            <div className="grids">
              <div className="grids3">
                <img src={img4} />
              </div>
              <div className="grids4">
                <img src={img3} />
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default PopularPlace;
