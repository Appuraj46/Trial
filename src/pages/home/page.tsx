
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import EventDetailsSection from './components/EventDetailsSection';
import ScheduleSection from './components/ScheduleSection';
import SponsorsSection from './components/SponsorsSection';
import TeamSection from './components/TeamSection';
import LocationSection from './components/LocationSection';
import RegistrationSection from './components/RegistrationSection';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <EventDetailsSection />
        <ScheduleSection />
        <SponsorsSection />
        <LocationSection />
        <RegistrationSection />
      </main>
      <Footer />
    </div>
  );
}
