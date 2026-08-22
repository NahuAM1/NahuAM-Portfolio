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
    <section className="resume-container">
      <div className="resume-glow" aria-hidden="true" />

      <div className="resume-text-container">
        <p className="resume-eyebrow">
          <span className="resume-eyebrow-dot" />
          Disponible para nuevos proyectos
        </p>

        <h1 className="resume-greeting">
          Hola, mi nombre es <span>Nahuel Manero</span>.
        </h1>

        <p className="resume-text">
          Ingeniero en Sistemas de Información. Desarrollo aplicaciones
          completas, automatizo procesos y optimizo sistemas para que las
          organizaciones trabajen mejor.
        </p>

        <div className="resume-buttons">
          <ButtonTemplate name="Contactame" onClick={scrollToBottom} />
          <IconButton
            icon={<LinkedInIcon />}
            href={"https://www.linkedin.com/in/nahuelmanero/"}
            name={"LinkedIn"}
          />
          <IconButton
            icon={<GitHubIcon />}
            href={"https://github.com/NahuAM1"}
            name={"GitHub"}
          />
        </div>
      </div>

      <div className="resume-image-container">
        <img src={image} alt="Retrato de Nahuel Manero" />
      </div>
    </section>
  );
};

export default Resume;
