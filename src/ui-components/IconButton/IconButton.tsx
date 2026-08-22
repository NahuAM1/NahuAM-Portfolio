import { Tooltip } from '@mui/material';
import './IconButton.scss';

interface IconButtonProps {
  icon: JSX.Element;
  href?: string | null;
  name: string;
  onClick?: () => void;
}

const IconButton = ({ icon, href, name, onClick }: IconButtonProps) => {
  // An <a> and a <button> must never nest: they are both interactive,
  // which produces invalid HTML and a doubled screen-reader announcement.
  // One element or the other, decided by whether we navigate or act.
  const content = href ? (
    <a
      className="icon-button"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={name || undefined}
    >
      {icon}
    </a>
  ) : (
    <button
      type="button"
      className="icon-button"
      onClick={onClick}
      aria-label={name || undefined}
    >
      {icon}
    </button>
  );

  return name ? <Tooltip title={name}>{content}</Tooltip> : content;
};

export default IconButton;
