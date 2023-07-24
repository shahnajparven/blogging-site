import Blogs from "./Blogs";
import { About } from "./About";
import Banner from "./Banner";
import Nav from "./Nav";
import PopularPlace from "./PopularPlace";
import { Footer } from "./Footer";

const Home = () => {
  return (
    <div>
      <Nav />
      <Banner />
      <PopularPlace/>
      <Blogs/>
      <About/>
      <Footer/>
    </div>
  );
};

export default Home;
