
import React from 'react';
import { EVENTS } from '../constants';
import { Event } from '../types';
import SectionWrapper from '../components/SectionWrapper';
import { motion } from 'framer-motion';
import Icon from '../components/Icon';

const EventCard: React.FC<{ event: Event }> = ({ event }) => (
    <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
        className="bg-gray-800 rounded-lg overflow-hidden shadow-lg group transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-amber-900/50"
    >
        <div className="relative">
            <img src={event.imageUrl} alt={event.title} className="w-full h-60 object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
            {event.type === 'upcoming' && <span className="absolute top-4 left-4 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full">UPCOMING</span>}
            {event.type === 'past' && <span className="absolute top-4 left-4 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full">PAST</span>}
            <div className="absolute bottom-0 left-0 p-6">
                <h3 className="text-2xl font-bold text-white">{event.title}</h3>
                <p className="text-amber-400 font-semibold">{event.date}</p>
            </div>
        </div>
        <div className="p-6">
            <p className="text-gray-300">{event.description}</p>
            {event.youtubeLink && (
                <a
                    href={event.youtubeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center mt-4 text-red-500 hover:text-red-400 font-semibold"
                >
                    <Icon name="youtube" className="w-5 h-5 mr-2" />
                    Watch Highlights
                </a>
            )}
        </div>
    </motion.div>
);

const EventsPage: React.FC = () => {
    const upcomingEvents = EVENTS.filter(e => e.type === 'upcoming');
    const pastEvents = EVENTS.filter(e => e.type === 'past');

    return (
        <div>
            <div className="bg-gray-800 py-16 text-center">
                <h1 className="text-4xl md:text-5xl font-extrabold text-amber-400">Our Celebrations</h1>
                <p className="mt-4 text-lg text-gray-300">From grand festivals to casual get-togethers, here's what's happening.</p>
            </div>

            <SectionWrapper idName="upcoming-events">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">Upcoming Events</h2>
                {upcomingEvents.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {upcomingEvents.map(event => <EventCard key={event.id} event={event} />)}
                    </div>
                ) : (
                    <p className="text-gray-400 text-center py-8">No upcoming events scheduled. Stay tuned!</p>
                )}
            </SectionWrapper>

            <SectionWrapper idName="past-events">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">Past Events Archive</h2>
                {pastEvents.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {pastEvents.map(event => <EventCard key={event.id} event={event} />)}
                    </div>
                ) : (
                    <p className="text-gray-400">Our event archive is currently empty.</p>
                )}
            </SectionWrapper>
        </div>
    );
};

export default EventsPage;
