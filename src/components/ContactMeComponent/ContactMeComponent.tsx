import "./ContactMeComponent.scss";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import IconButton from "../../ui-components/IconButton/IconButton.tsx";
import MailSender from "./MailSender.tsx";

const ContactMeComponent = () => {
  return (
    <div className="contactMeComponent-container">
      <div className="contactMeComponent-text-container">
        <div className="contactMeComponent-title">Contactame</div>
        <div className="contactMeComponent-text">
          <p className="contactMeComponent-text-p">Enviame un E-Mail a: </p>
          <p className="contactMeComponent-text-email">
            {" "}
            nahuelmanero@gmail.com
          </p>
        </div>
        <div className="contactMeComponent-buttons">
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

export default ContactMeComponent;
