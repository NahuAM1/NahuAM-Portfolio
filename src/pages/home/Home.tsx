import "./Home.scss";
import Resume from "../../components/Resume/Resume";
import AboutMeHome from "../../components/AboutMeHome/AboutMeHome";
import ContactMe from "../../components/ContactMe/ContactMe";
import Projects from "../../components/Proyects/Proyects";

const Home = () => {
  return (
    <div className="home-container">
      <Resume />
      <AboutMeHome />
      <Projects />
      <ContactMe />
    </div>
  );
};

export default Home;
