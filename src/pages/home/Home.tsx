import "./Home.scss";
import NavBar from "../../components/NavBar/NavBar";
import Resume from "../../components/Resume/Resume";
import Proyects from "../../components/Proyects/Proyects";
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
