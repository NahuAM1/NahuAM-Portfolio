import './SnackBar.scss';
import ErrorIcon from '@mui/icons-material/Error';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Icon from '@mui/material/Icon';
import { useEffect, useState } from 'react';

interface SnackBarProps {
  text: string;
  severity: 'success' | 'error';
}

const SnackBar = (snackBarProps: SnackBarProps) => {
  const { text, severity } = snackBarProps;
  const duration: number = 10000;
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    console.log(text, severity);
    const timer = setTimeout(() => {
      setVisible(false);
    }, duration);
    return () => clearTimeout(timer);
  }, [duration]);

  if (!visible) return null;

  return (
    <div className='snackbar-backdrop'>
      <div className={`snackbar-container-${severity}`}>
        <p className='snackbar-icon'>
          {severity === 'success' ? <CheckCircleIcon /> : <ErrorIcon />}
        </p>
        <Icon />
        <p className='snackbar-text'>{text}</p>
      </div>
    </div>
  );
};

export default SnackBar;
