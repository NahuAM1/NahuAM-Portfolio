import "./ProyectCard.scss";
import CoffeeImg from "../../shared/media/Cofee proyect.png";
import TextButton from "../TextButton/TextButton";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import GitHubIcon from "@mui/icons-material/GitHub";

const ProyectCard = () => {
  return (
    <div className="proyect-card-container">
      <div className="proyect-card-image-container">
        <img src={CoffeeImg} alt="" className="proyect-card-image" />
      </div>
      <div className="proyect-card-resume">
        <p className="proyect-card-title">Cofee listing</p>
        <p className="proyect-card-text">
          Este proyecto es un catalago de cafés el cual consume los datos de una
          apli y muestra los cafés populares, los puntajes dados por la gente,
          los disponibes, etc.
        </p>
      </div>
      <div className="pryect-card-buttons">
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
  );
};

export default ProyectCard;
