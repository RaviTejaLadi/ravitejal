import NavBar from './layout/NavBar';
import ProjectsSection from './pages/ProjectsSection';
import Footer from './layout/Footer';
import AboutSection from './pages/AboutSection';
import ExperienceSection from './pages/ExperienceSection';
import TechnologiesSection from './pages/TechnologiesSection';
import ScrollTop from './components/ui/ScrollTop';
import { GradientBackground } from './components/ui/GradientBackground';

function App() {
  return (
    <div className="min-h-screen bg-background">
      <NavBar />
        <AboutSection />
        <TechnologiesSection />
        <ProjectsSection />
        <ExperienceSection />
      <Footer />
      <ScrollTop />
    </div>
  );
}

export default App;
