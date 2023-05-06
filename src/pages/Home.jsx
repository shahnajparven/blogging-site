import Blogs from "./Blogs";
import { About } from "./About";
import Banner from "./Banner";
import Nav from "./Nav";
import PopularPlace from "./PopularPlace";

const Home = () => {
  return (
    <div>
      <Nav />
      <Banner />
      <PopularPlace/>
      <Blogs/>
      <About/>
    </div>
  );
};

export default Home;
