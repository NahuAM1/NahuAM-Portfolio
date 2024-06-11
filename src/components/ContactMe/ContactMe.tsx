import "./ContactMe.scss";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import IconButton from "../../ui-components/IconButton/IconButton.tsx";
import MailSender from "./MailSender.tsx";

const ContactMe = () => {
  return (
    <div className="contactMe-container">
      <div className="contactMe-text-container">
        <div className="contactMe-title">Contactame</div>
        <div className="contactMe-text">
          <p className="contactMe-text-p">Enviame un E-Mail a: </p>
          <p className="contactMe-text-email"> nahuelmanero@gmail.com</p>
        </div>
        <div className="contactMe-buttons">
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
      <MailSender />
    </div>
  );
};

export default ContactMe;
