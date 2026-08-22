import './Home.scss';
import Resume from '../../components/Resume/Resume';
import AboutMeHome from '../../components/AboutMeComponent/AboutMeComponent';
import ContactMe from '../../components/ContactMeComponent/ContactMeComponent';
import Projects from '../../components/Proyects/Proyects';
import ExperienceComponent from '../../components/ExperienceComponent/ExperienceComponent';

const Home = () => {
  return (
    <div className='home-container'>
      <Resume />
      <div className='section-divider'>
        <hr />
      </div>
      <AboutMeHome />
      <Projects />
      <ExperienceComponent />
      <div className='section-divider'>
        <hr />
      </div>
      <ContactMe />
    </div>
  );
};

export default Home;
