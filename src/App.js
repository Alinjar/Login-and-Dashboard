import React, { useEffect, useState } from 'react';
import './App.css';
import Page1 from './Page1/LoginFinal';
import FinalPage2 from './Page2/FinalPage2';
import { auth } from './Page1/config';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setIsLoggedIn(user !== null);
      setIsLoading(false);
    });

    return () => {
      setIsLoggedIn(false); // Reset the login status when the component unmounts
      unsubscribe();
    };
  }, []);

  if (isLoading) {
    return <div>Loading...</div>; // Display a loading indicator while checking the authentication state
  }

  return (
    <>
      {isLoggedIn ? <FinalPage2 /> : <Page1 />}
    </>
  );
}

export default App;
