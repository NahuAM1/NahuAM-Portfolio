import TextButton from "../../ui-components/TextButton/TextButton";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import { Link } from "react-router-dom";
import "./AboutMehome.scss";

const AboutMeHome = () => {
  return (
    <div className="aboutMeHome-container">
      <div className="aboutMeHome-title">Acerca De Mi</div>
      <div className="aboutMeHome-resume">
        <p className="aboutMeHome-resume-title">
          Dejame contarte un poco mas de mi:
        </p>
        <p className="aboutMeHome-resume-text">
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

        <Link to={"/about"}>
          <TextButton
            text="Mas Acerca De Mi"
            icon={<ArrowOutwardIcon />}
            href={null}
            name=""
          />
        </Link>
      </div>
    </div>
  );
};

export default AboutMeHome;
