import "./ButtonTemplate.scss";

interface ButtonTemplateProps {
  name: string;
  onClick?: () => void;
  // MailSender relies on this button submitting its form, so the type
  // has to stay explicit rather than defaulting to "button" silently.
  type?: "button" | "submit";
  disabled?: boolean;
}

const ButtonTemplate = ({
  name,
  onClick,
  type = "button",
  disabled = false,
}: ButtonTemplateProps) => {
  return (
    <div className="button-template-container">
      <button
        className="button-template"
        type={type}
        onClick={onClick}
        disabled={disabled}
      >
        {name}
      </button>
    </div>
  );
};

export default ButtonTemplate;
