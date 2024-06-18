import ResumeAbout from "../../components/ResumeAbout/ResumeAbout";
import ContactMe from "../../components/ContactMeComponent/ContactMeComponent";
import Skills from "../../components/Skills/Skills";

const AboutMe = () => {
  return (
    <div className="aboutMe-container">
      <ResumeAbout />
      <Skills />
      <ContactMe />
    </div>
  );
};

export default AboutMe;
