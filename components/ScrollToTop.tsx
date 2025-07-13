
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // This will run on every route change
    window.scrollTo(0, 0);
  }, [pathname]);

  return null; // This component does not render anything
};

export default ScrollToTop;
