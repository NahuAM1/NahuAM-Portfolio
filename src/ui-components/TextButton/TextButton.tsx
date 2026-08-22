import './TextButton.scss';
import { Tooltip } from '@mui/material';

interface TextButtonProps {
  icon: JSX.Element;
  href: string | null;
  text: string;
  name: string;
}

const TextButton = ({ icon, href, text, name }: TextButtonProps) => {
  // Without an href there is nothing to navigate to, so this renders as
  // a plain span. An <a> with no href is not focusable and announces as
  // a link that goes nowhere.
  if (!href) {
    return (
      <span className="text-button text-button--disabled" aria-disabled="true">
        {text}
        {icon}
      </span>
    );
  }

  const link = (
    <a
      className="text-button"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      {text}
      {icon}
    </a>
  );

  return name ? <Tooltip title={name}>{link}</Tooltip> : link;
};

export default TextButton;
