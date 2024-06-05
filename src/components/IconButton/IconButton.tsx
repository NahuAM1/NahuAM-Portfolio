import { Tooltip } from "@mui/material";
import "./IconButton.scss";

interface IconButtonProps {
  icon: JSX.Element;
  href: string;
  name: string;
}

function IconButton({ icon, href, name }: IconButtonProps) {
  return (
    <Tooltip title={name}>
      <a className="icon-button-a" href={href}>
        <button className="icon-button-container">{icon}</button>
      </a>
    </Tooltip>
  );
}

export default IconButton;
