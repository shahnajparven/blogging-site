import { useState } from "react";
import "./Nav.scss";
const Nav = () => {
  const [ menuShow, setMenuShow ] = useState(false);

  return (
    <div className="navbar">
      <div className="container">
        <div className="nav active">
          <div className="logo">ATrip</div>
        
          <div className={menuShow ? "mobile-list" : "list-item"}>
            <ul>
              <li>
                <a className="active" href="/">Home</a>
              </li>
              <li>
                <a href="#profile">Profile</a>
              </li>
              <li>
                <a href="#blogs">Blogs</a>
              </li>
              <li>
                <a href="gallery">Gallery</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
              <li>
                <a className="academic" href="#">login</a>
              </li>
            </ul>
          </div>
          {/* <div className="login mobile-login">login</div> */}
          {/* <div onClick={() => setMenuShow(menuShow)} className="cancle">
            cancle
          </div> */}
          <div onClick={() => setMenuShow(!menuShow)} className="menu">
            Menu
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
