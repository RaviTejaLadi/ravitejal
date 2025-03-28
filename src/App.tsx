import NavBar from './layout/NavBar';
import ProjectsSection from './pages/ProjectsSection';
import Footer from './layout/Footer';
import AboutSection from './pages/AboutSection';
import ResumeSection from './pages/ResumeSection';
import TechnologiesSection from './pages/TechnologiesSection';
import ScrollTop from './components/ui/ScrollTop';

function App() {
  return (
    <div className="min-h-screen bg-background">
      <NavBar />
      <AboutSection />
      <TechnologiesSection />
      <ProjectsSection />
      <ResumeSection />
      <Footer />
      <ScrollTop />
    </div>
  );
}

export default App;
