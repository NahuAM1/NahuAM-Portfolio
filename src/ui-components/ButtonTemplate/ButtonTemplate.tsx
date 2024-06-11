import "./ButtonTemplate.scss";
interface IconButtonProps {
  name: string;
  onClick?: () => void;
}
const ButtonTemplate = ({ name, onClick }: IconButtonProps) => {
  return (
    <div className="button-template-container">
      <button className="button-template" onClick={onClick}>
        {name}
      </button>
    </div>
  );
};

export default ButtonTemplate;
