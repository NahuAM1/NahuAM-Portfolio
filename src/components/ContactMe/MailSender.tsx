import "./MailSender.scss";
import ButtonTemplate from "../ButtonTemplate/ButtonTemplate";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

const MailSender = () => {
  const form = useRef<HTMLFormElement | null>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.current === null) return;

    emailjs
      .sendForm("service_5argm9a", "template_anvvinn", form.current, {
        publicKey: "JLjd2FkS-iPbgmfNr",
      })
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <>
      <div className="emailSender-container">
        <form
          ref={form}
          onSubmit={sendEmail}
          className="emailSender-form-control"
        >
          <input
            className="emailSender-form-input"
            type="text"
            placeholder="Nombre Completo"
            name="user_name"
            required
          />
          <input
            className="emailSender-form-input"
            type="email"
            placeholder="Email"
            name="user_email"
            required
          />
          <input
            className="emailSender-form-input"
            type="text"
            placeholder="Asunto"
            name="subject"
            required
          />
          <textarea
            className="emailSender-form-textarea"
            name="message"
            cols={30}
            rows={10}
            required
          ></textarea>
          <ButtonTemplate name="Enviar" />
        </form>
      </div>
    </>
  );
};

export default MailSender;
