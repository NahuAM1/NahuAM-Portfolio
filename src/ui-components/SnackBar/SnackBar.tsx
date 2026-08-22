import './SnackBar.scss';
import ErrorIcon from '@mui/icons-material/Error';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { useEffect, useState } from 'react';

interface SnackBarProps {
  text: string;
  severity: 'success' | 'error';
}

const DURATION_MS = 10000;

const SnackBar = ({ text, severity }: SnackBarProps) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), DURATION_MS);
    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div
      className='snackbar-backdrop'
      // Errors interrupt; confirmations wait for a pause in speech.
      role={severity === 'error' ? 'alert' : 'status'}
      aria-live={severity === 'error' ? 'assertive' : 'polite'}
    >
      <div className={`snackbar snackbar--${severity}`}>
        <span className='snackbar-icon'>
          {severity === 'success' ? <CheckCircleIcon /> : <ErrorIcon />}
        </span>
        <p className='snackbar-text'>{text}</p>
      </div>
    </div>
  );
};

export default SnackBar;
