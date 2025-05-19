import NavBar from './layout/NavBar';
import ProjectsSection from './pages/ProjectsSection';
import Footer from './layout/Footer';
import AboutSection from './pages/AboutSection';
import ExperienceSection from './pages/ExperienceSection';
import TechnologiesSection from './pages/TechnologiesSection';
import ScrollTop from './components/ui/ScrollTop';
import Resume from './pages/Resume';

function App() {
  return (
    <div className="min-h-screen bg-background">
      <NavBar />
      <AboutSection />
      <TechnologiesSection />
      <ProjectsSection />
      <ExperienceSection />
      <Resume />
      <Footer />
      <ScrollTop />
    </div>
  );
}

export default App;
