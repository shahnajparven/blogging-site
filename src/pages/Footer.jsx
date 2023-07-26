import "./Footer.scss";
// import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
// import TwitterIcon from '@mui/icons-material/Twitter';
// import YouTubeIcon from '@mui/icons-material/YouTube';

export const Footer = () => {
  return (
    <div className="footer-section">
      <div className="container">
        <div className="footer-box">
          <div className="footer-heading">
            <div className="footer-title">
              <h3>ATrip</h3>
            </div>
            <p>
              Speak with your own voice! On our marketplaces you can maintain
              your identity, build your brand and promote your work to the
              community - however you like.
            </p>
          </div>
          <div className="footer-heading">
            <div className="footer-title1">
              <h3>About</h3>
            </div>
            <p>
              Speak with your own voice! On our marketplaces you can maintain
              your identity,
            </p>
          </div>
          <div className="footer-heading">
            <div className="footer-title2">
              <h3>Contact</h3>
            </div>
            <p>
              +880 1745001556
              <br />
              shahnajparven21@gmail.com
              <br />
            </p>
          </div>
          <div className="footer-heading">
            <div className="footer-text">
            <p>Get Touch With Us....</p>
            </div>
            <div className="footer-logo">
              {/* <div className="social-icon"><FacebookOutlinedIcon/></div>
              <div className="social-icon"><TwitterIcon/></div>
              <div className="social-icon"><YouTubeIcon/></div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
