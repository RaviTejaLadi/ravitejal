import { lazy, Suspense } from 'react';
import NavBar from './layout/NavBar';
import AboutSection from './pages/AboutSection';
import Footer from './layout/Footer';
import ScrollTop from './components/ui/ScrollTop';

const TechnologiesSection = lazy(() => import('./pages/TechnologiesSection'));
const ProjectsSection = lazy(() => import('./pages/ProjectsSection'));
const ExperienceSection = lazy(() => import('./pages/ExperienceSection'));
const EducationSection = lazy(() => import('./pages/EducationSection'));
const AchievementsSection = lazy(() => import('./pages/AchievementsSection'));
const Resume = lazy(() => import('./pages/Resume'));
const ContactSection = lazy(() => import('./pages/ContactSection'));
const OpenToWork = lazy(() => import('./pages/OpenToWork'));

const SectionFallback = () => (
  <div className="section-shell" aria-hidden="true">
    <div className="section-container h-24" />
  </div>
);

function App() {
  return (
    <div className="min-h-screen bg-background">
      <NavBar />
      <main className="pt-24 sm:pt-28">
        <AboutSection />
        <Suspense fallback={<SectionFallback />}>
          <TechnologiesSection />
          <ProjectsSection />
          <ExperienceSection />
          <EducationSection />
          <AchievementsSection />
          <Resume />
          <ContactSection />
          <OpenToWork />
        </Suspense>
      </main>
      <Footer />
      <ScrollTop />
    </div>
  );
}

export default App;
