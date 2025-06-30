import NavBar from './layout/NavBar';
import ProjectsSection from './pages/ProjectsSection';
import Footer from './layout/Footer';
import AboutSection from './pages/AboutSection';
import ExperienceSection from './pages/ExperienceSection';
import TechnologiesSection from './pages/TechnologiesSection';
import ScrollTop from './components/ui/ScrollTop';
import Resume from './pages/Resume';
import EducationSection from './pages/EducationSection';
import AchievementsSection from './pages/AchievementsSection';
import ContactSection from './pages/ContactSection';

function App() {
  return (
    <div className="min-h-screen bg-background">
      <NavBar />
      <AboutSection />
      <TechnologiesSection />
      <ProjectsSection />
      <ExperienceSection />
      <EducationSection />
      <AchievementsSection />
      <Resume />
      <ContactSection />
      <Footer />
      <ScrollTop />
    </div>
  );
}

export default App;
