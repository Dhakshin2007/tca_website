
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { EVENTS } from '../constants';
import SectionWrapper from '../components/SectionWrapper';
// import GeminiFunFact from '../components/GeminiFunFact';
import { Announcements } from '../components/Announcements.tsx';

const Hero = () => (
  <div className="relative h-[80vh] min-h-[500px] flex items-center justify-center text-center text-white overflow-hidden">
    <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(https://picsum.photos/seed/culture/1920/1080)` }}>
        <div className="absolute inset-0 bg-black/60"></div>
    </div>
    <motion.div
      className="relative z-10 px-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-amber-400 tracking-tight">
        Mana Telugu – Mana Samskruthi
      </h1>
      <h2 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight mt-2">
        Mana IIT Ropar
      </h2>
      <p className="mt-6 max-w-2xl mx-auto text-lg md:text-xl text-gray-300">
        The heart of Telugu culture and community at IIT Ropar.
      </p>
      <div className="mt-10 flex flex-wrap justify-center gap-4">
        <Link to="/events" className="bg-amber-500 text-gray-900 hover:bg-amber-400 font-bold py-3 px-8 rounded-full text-lg transition-transform transform hover:scale-105">
          Explore Events
        </Link>
        <a 
          href="https://tally.so/r/mZrlbz"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-amber-500 text-gray-900 hover:bg-amber-400 font-bold py-3 px-8 rounded-full text-lg transition-transform transform hover:scale-105"
        >
          Register as a Student
        </a>
        <Link to="/about" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-gray-900 font-bold py-3 px-8 rounded-full text-lg transition-colors">
          About Us
        </Link>
      </div>
    </motion.div>
  </div>
);

const HomePage: React.FC = () => {
  const upcomingEvents = EVENTS.filter(e => e.type === 'upcoming').slice(0, 3);
  return (
    <div>
      <Hero />
      <SectionWrapper idName="about-summary">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-amber-400">Welcome to TCA!</h2>
        <p className="mt-4 max-w-3xl mx-auto text-center text-gray-300 text-lg">
          The Telugu Cultural Association (TCA) is a vibrant student-run organization at IIT Ropar. We are dedicated to celebrating and preserving the rich cultural heritage of the Telugu people. Our goal is to create a home away from home for Telugu students, fostering a strong sense of community, belonging, and cultural pride.
        </p>
        <div className="text-center mt-8">
            <Link to="/about" className="text-amber-400 hover:text-amber-300 font-semibold text-lg">Learn More &rarr;</Link>
        </div>
      </SectionWrapper>
      <SectionWrapper idName="events">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-amber-400">Upcoming Events</h2>
            <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {upcomingEvents.map(event => (
                    <div key={event.id} className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-amber-500/30 transition-shadow duration-300 transform hover:-translate-y-2">
                        <img src={event.imageUrl} alt={event.title} className="w-full h-56 object-cover" />
                        <div className="p-6">
                            <h3 className="text-xl font-bold text-gray-100">{event.title}</h3>
                            <p className="text-amber-400 font-semibold mt-1">{event.date}</p>
                            <p className="text-gray-400 mt-2 text-sm">{event.description}</p>
                        </div>
                    </div>
                ))}
            </div>
             <div className="text-center mt-12">
                <Link to="/events" className="bg-amber-500 text-gray-900 hover:bg-amber-400 font-bold py-3 px-6 rounded-full transition-transform transform hover:scale-105">
                    View All Events
                </Link>
            </div>
      </SectionWrapper>
      <SectionWrapper idName="announcements">
        <Announcements />
      </SectionWrapper>
      {/* 
      <SectionWrapper idName="gemini-fun-fact">
        <GeminiFunFact />
      </SectionWrapper>
       */}
    </div>
  );
};

export default HomePage;