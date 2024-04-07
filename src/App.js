import './App.css';

import {useEffect} from 'react';

const App = () => {
  useEffect(() => {
    const handleTabClose = event => {
      event.preventDefault();

      console.log('beforeunload event triggered');

      return (event.returnValue =
        'Are you sure you want to exit?');
    };

    window.addEventListener('beforeunload', handleTabClose);

    return () => {
      window.removeEventListener('beforeunload', handleTabClose);
    };
  }, []);

  return (
    <div>
      <h2>bobbyhadz.com</h2>
    </div>
  );
};

export default App;
