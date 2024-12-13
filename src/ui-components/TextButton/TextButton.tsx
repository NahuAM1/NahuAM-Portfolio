import './TextButton.scss';
import { Tooltip } from '@mui/material';

interface TextButtonProps {
  icon: JSX.Element;
  href: string | null;
  text: string;
  name: string;
}

const TextButton = ({ icon, href, text, name }: TextButtonProps) => {
  return (
    <Tooltip title={name}>
      {href ? (
        <a className='text-button-a' href={href}>
          <p className='text-button-container'>
            {text}
            {icon}
          </p>
        </a>
      ) : (
        <a className='text-button-a'>
          <p className='text-button-container-empty'>
            {text}
            {icon}
          </p>
        </a>
      )}
    </Tooltip>
  );
};

export default TextButton;
