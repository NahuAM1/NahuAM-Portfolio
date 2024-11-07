import { useEffect, useState } from 'react';
import './Loader.scss';
import loaderVideo from '../../shared/media/loader.mp4';

const Loader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3800);

    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null;

  return (
    <div className='loader-container'>
      <video autoPlay muted loop className='loader-video'>
        <source src={loaderVideo} type='video/mp4' />
      </video>
    </div>
  );
};

export default Loader;
