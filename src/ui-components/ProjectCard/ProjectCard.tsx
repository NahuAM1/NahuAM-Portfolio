import "./ProjectCard.scss";
import CoffeeImg from "../../shared/media/CofeeProject.png";
import TextButton from "../TextButton/TextButton";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import GitHubIcon from "@mui/icons-material/GitHub";

const ProjectCard = () => {
  return (
    <div className="project-card-container">
      <div className="project-card-image-container">
        <img src={CoffeeImg} alt="" className="project-card-image" />
      </div>
      <div className="project-card-resume">
        <p className="project-card-title">Cofee listing</p>
        <p className="project-card-text">
          Este projecto es un catalago de cafés el cual consume los datos de una
          API y muestra los cafés populares, los puntajes dados por la gente,
          los disponibes, etc.
        </p>
        <div className="project-card-info-container">
          <div className="project-card-info-row">
            <p className="project-card-info">PROJECT INFO</p>
          </div>
          <div className="project-card-info-row">
            <p className="project-card-year">Año</p>
            <p className="project-card-year-info">2024</p>
          </div>
          <div className="project-card-info-row">
            <p className="project-card-rol">Rol en el proyecto</p>
            <p className="project-card-rol-info">Desarrolador Front-End</p>
          </div>
          <div className="project-card-info-row">
            <p className="project-card-tech">Tecnologias</p>
            <p className="project-card-tech-info">TypeScript, React, Sass</p>
          </div>
        </div>
        <div className="project-card-buttons">
          <TextButton
            icon={<ArrowOutwardIcon />}
            href="https://simple-coffee-listing-pied.vercel.app"
            text="DEMO ONLINE"
            name=""
          />
          <TextButton
            icon={<GitHubIcon />}
            href="https://github.com/NahuAM1/Simple-Coffee-Listing"
            text="REPOSITORIO DE GITHUB"
            name=""
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
