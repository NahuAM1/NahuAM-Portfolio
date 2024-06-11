import "./Resume.scss";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import image from "../../shared/media/IMG_0559-01.jpeg";
import IconButton from "../../ui-components/IconButton/IconButton.tsx";
import ButtonTemplate from "../../ui-components/ButtonTemplate/ButtonTemplate.tsx";
const Resume = () => {
  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };

  return (
    <div className="resume-container">
      <div className="resume-text-container">
        <div className="resume-greeting">Hola, mi nombre es Nahuel Manero.</div>
        <p className="resume-text">
          Estudiante | Desarrollador Web | Apasionado de la Tecnologia
        </p>
        <div className="resume-buttons">
          <ButtonTemplate name="Contactame" onClick={scrollToBottom} />
          <IconButton
            icon={<LinkedInIcon />}
            href={"https://www.linkedin.com/in/nahuelmanero/"}
            name={""}
          />
          <IconButton
            icon={<GitHubIcon />}
            href={"https://github.com/NahuAM1"}
            name={""}
          />
        </div>
      </div>
      <img src={image} alt="" />
    </div>
  );
};

export default Resume;
