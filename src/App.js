import React from 'react';
import logo from './logo.svg';
import './App.css';

//added pseudo codes for menu and footer
function App({ children }) {
  return (
    <div className="App">
      {/** menu 2nd priority */}
      {children}
      {/** footer 2nd priority */}
    </div>
  );
}

export default App;
