import "./Gallery.scss";
import img1 from "../../assets/images/img1.jpg";
import img2 from "../../assets/images/img2.jpg";
import img3 from "../../assets/images/img3.jpg";
import img4 from "../../assets/images/img4.jpg";
import img5 from "../../assets/images/img5.jpg";

export const Gallery = () => {
  return (
    <div className="gallery">
    <div className="containers">
      <div className="heading">
        <h1>Gallery</h1>
      </div>
      <div className="box">
        <div className="dream">
          <img src={img4} />
          <img src={img3} />
          <img src={img1} />
        </div>
        <div className="dream">
          <img src={img2} />
          <img src={img5} />

          <img src={img3} />
        </div>
        <div className="dream">
          <img src={img5} />
          <img src={img3} />
          <img src={img1} />
        </div>
        <div className="dream">
          <img src={img1} />
          <img src={img3} />
          <img src={img4} />
        </div>
      </div>
    </div>
    </div>
  );
};
