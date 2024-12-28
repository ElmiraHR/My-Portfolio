import React from 'react';
import Navigation from './components/navigation/Navigation';
import Home from './pages/homePage/HomePage';
import SkillsPage from './pages/skilsPage/SkillsPage';


function App() {
  return (
    <div className="App">
      <Navigation />
      <Home/>
      <SkillsPage/>
    </div>
  );
}

export default App;
