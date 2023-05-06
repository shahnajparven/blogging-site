import "./Nav.scss";
const Nav = () => {
  return (
    <div className="navbar">
      <div className="container">
        <div className="nav">
          <div className="logo">ATrip</div>
          <div className="list-item">
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="#profile">Profile</a>
              </li>
              <li>
                <a href="#blogs">Blogs</a>
              </li>
              <li>
                <a href="#gallery">Gallery</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
          <div className="login">login</div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
