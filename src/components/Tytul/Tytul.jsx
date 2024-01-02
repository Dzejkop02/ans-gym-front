import { useEffect } from 'react';

const Tytul = () => {
    useEffect(() => {
      document.title = 'ANS-GYM';
      const favicon = document.querySelector('link[rel="icon"]');
      if (favicon) {
        favicon.href = '/zdj/strong.png';
      }
    }, []);
  };
  
  export default Tytul;