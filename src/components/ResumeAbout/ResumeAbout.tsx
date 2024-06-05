import "./ResumeAbout.scss";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import IconButton from "../IconButton/IconButton.tsx";
import ButtonTemplate from "../ButtonTemplate/ButtonTemplate.tsx";
import CV from "../../shared/media/Curriculum Vitae - Manero Nahuel.pdf";
const ResumeAbout = () => {
  return (
    <div className="resumeAbout-container">
      <div className="resumeAbout-title">Acerca De Mi</div>
      <div className="resumeAbout-resume">
        <p className="resumeAbout-resume-title">
          Dejame contarte un poco mas de mi:
        </p>
        <p className="resumeAbout-resume-text">
          Soy estudiante de la carrera de Ingeniería en Sistema de Información,
          Actualmente me encuentro cursando el ultimo año de la carrera.
          <br></br>Mi principal enfoque es lograr un constante crecimiento,
          tanto a nivel personal como profesional. Me considero una persona
          dedicada a la formación continua, siempre buscando oportunidades para
          ampliar mis habilidades y conocimientos en el ámbito tecnológico.
          <br></br>Tengo conocimientos y formación en lenguajes de desarrollo
          web y en metodologías ágiles. Poseo experiencia y formación sólida en
          diversos lenguajes de desarrollo web, así como en la aplicación de
          metodologías ágiles. <br></br>Mi objetivo es contribuir de manera
          significativa al campo de la ingeniería de sistemas, aplicando mis
          habilidades técnicas y mi capacidad para adaptarme a entornos
          dinámicos. Estoy comprometido con mi desarrollo profesional y estoy
          abierto a desafíos que me permitan seguir aprendiendo y evolucionando
          en esta disciplina.
        </p>
        <div className="resumeAbout-buttons">
          <a
            href={CV}
            download="Curriculum Vitae - Manero Nahuel.pdf"
            className="a"
          >
            <ButtonTemplate name="Descarga mi CV" />
          </a>
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
    </div>
  );
};

export default ResumeAbout;
