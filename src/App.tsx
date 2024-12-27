import React from 'react';
import Navigation from './components/navigation/Navigation.tsx';
import Home from './pagees/homePage/HomePage.tsx';


function App() {
  return (
    <div className="App">
      <Navigation />
      <Home/>
    </div>
  );
}

export default App;
