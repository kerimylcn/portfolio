
import './App.css';
import Header from './components/Header';
import IntroCard from './components/IntroCard';
import IntroCard2 from './components/IntroCard2';
import ProjectCard from './components/ProjectCard';
import Skills from './components/Skills';



function App() {
  return (
    <div className="portfolio-main">
     <Header />
     <IntroCard2 />
     <Skills />
     <ProjectCard />
    </div>
  );
}

export default App;
