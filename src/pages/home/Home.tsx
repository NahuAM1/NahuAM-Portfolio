import "./Home.scss";
import Resume from "../../components/Resume/Resume";
import AboutMeHome from "../../components/AboutMeHome/AboutMeHome";
import ContactMe from "../../components/ContactMe/ContactMe";

const Home = () => {
  return (
    <div className="home-container">
      <Resume />
      <AboutMeHome />
      <ContactMe />
    </div>
  );
};

export default Home;
