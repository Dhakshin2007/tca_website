import React from 'react';
import { Routes, Route } from 'react-router-dom';
import WelcomeOverlay from './components/WelcomeOverlay';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import TeamPage from './pages/TeamPage';
import EventsPage from './pages/EventsPage';
import StudentsPage from './pages/StudentsPage';
import ContactPage from './pages/ContactPage';
import CollegeInfoPage from './pages/CollegeInfoPage';
import NotablePage from './pages/NotablePage';
import ScrollToTop from   './components/ScrollToTop';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-900 text-gray-200">
      <WelcomeOverlay />
      <Header />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/team" element={<TeamPage />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/students" element={<StudentsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/college-info" element={<CollegeInfoPage />} />
          <Route path="/notable" element={<NotablePage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;