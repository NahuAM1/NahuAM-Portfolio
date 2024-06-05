import { Tooltip } from "@mui/material";
import "./IconButton.scss";

interface IconButtonProps {
  icon: JSX.Element;
  href: string | null;
  name: string;
}

function IconButton({ icon, href, name }: IconButtonProps) {
  return (
    <Tooltip title={name}>
      {href ? (
        <a className="icon-button-a" href={href}>
          <button className="icon-button-container">{icon}</button>
        </a>
      ) : (
        <button className="icon-button-container">{icon}</button>
      )}
    </Tooltip>
  );
}

export default IconButton;
