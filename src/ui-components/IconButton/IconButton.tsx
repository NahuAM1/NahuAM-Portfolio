import { Tooltip } from "@mui/material";
import "./IconButton.scss";

interface IconButtonProps {
  icon: JSX.Element;
  href?: string | null;
  name: string;
  onClick?: () => void;
}

const IconButton = ({ icon, href, name, onClick }: IconButtonProps) => {
  const Wrapper = href ? "a" : "div";
  return (
    <Tooltip title={name}>
      <Wrapper
        className="icon-button-a"
        href={href || undefined}
        onClick={onClick}
        style={{ cursor: onClick ? "pointer" : "default" }}
      >
        <button className="icon-button-container">{icon}</button>
      </Wrapper>
    </Tooltip>
  );
};

export default IconButton;
