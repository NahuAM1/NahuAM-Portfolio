import "./ContactMeComponent.scss";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import IconButton from "../../ui-components/IconButton/IconButton.tsx";
import MailSender from "./MailSender.tsx";

const EMAIL = "nahuelmanero@gmail.com";

const ContactMeComponent = () => {
  return (
    <section className="contactMeComponent-container" id="contacto" data-reveal>
      <div className="contactMeComponent-text-container">
        <p className="section-eyebrow">Contacto</p>
        <h2 className="contactMeComponent-title">Trabajemos juntos</h2>

        <p className="contactMeComponent-lead">
          ¿Tenés un proyecto en mente o una posición abierta? Escribime y te
          respondo a la brevedad.
        </p>

        <div className="contactMeComponent-text">
          <span className="contactMeComponent-text-p">
            Enviame un e-mail a:
          </span>
          {/* A mailto link: the address was previously plain text, so it
              could not be clicked or copied in one action. */}
          <a
            className="contactMeComponent-text-email"
            href={`mailto:${EMAIL}`}
          >
            {EMAIL}
          </a>
        </div>

        <div className="contactMeComponent-buttons">
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

      <MailSender />
    </section>
  );
};

export default ContactMeComponent;
