import "./TextButton.scss";

interface IconButtonProps {
  icon: JSX.Element;
  href: string;
  text: string;
}

const TextButton = ({ icon, href, text }: IconButtonProps) => {
  return (
    <>
      <a className="text-button-a" href={href}>
        <p className="text-button-container">
          {text}
          {icon}
        </p>
      </a>
    </>
  );
};

export default TextButton;
