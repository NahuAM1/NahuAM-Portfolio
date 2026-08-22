import './AboutMe.scss';
import ResumeAbout from '../../components/ResumeAbout/ResumeAbout';
import Skills from '../../components/Skills/Skills';
import EducationComponent from '../../components/EducationComponent/EducationComponent';

const AboutMe = () => {
  return (
    <div className='aboutMe-container'>
      <ResumeAbout />
      <div className='section-divider'>
        <hr />
      </div>
      <Skills />
      <div className='section-divider'>
        <hr />
      </div>
      <EducationComponent />
    </div>
  );
};

export default AboutMe;
