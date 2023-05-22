import logo from './logo.svg';
import './App.css';

import ScrollPrompt from './components/ScrollPrompt.js';

import NavBar from './components/Navbar.js';
import Banner from './components/Banner.js';
import Footer from './components/Footer.js';


import ProjectsSection from './components/ProjectsSection.js';
import ExperienceSection from './components/ExperienceSection.js';
import AchievementsSection from './components/AchievementsSection.js';

import MeSection from './components/MeSection.js';
import ContactSection from './components/ContactSection.js';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <ScrollPrompt/>

      <ProjectsSection/>
      <ExperienceSection/>
      <AchievementsSection/>

      <MeSection/>
      <ContactSection/>

      <Footer/>

    </div>
  );
}

export default App;
