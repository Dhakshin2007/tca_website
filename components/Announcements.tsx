
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ANNOUNCEMENTS } from '../constants';

export const Announcements: React.FC = () => {
    if (!ANNOUNCEMENTS || ANNOUNCEMENTS.length === 0) {
        return null;
    }

    return (
        <div className="bg-gray-800/50 p-6 md:p-8 rounded-2xl shadow-lg border border-amber-500/20 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-amber-400 mb-6 text-center">Announcements</h3>
            <div className="space-y-6">
                {ANNOUNCEMENTS.map((announcement, index) => (
                    <motion.div
                        key={announcement.id}
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.5, delay: index * 0.15 }}
                        className="bg-gray-900/60 p-6 rounded-lg border-l-4 border-amber-500 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4"
                    >
                        <div className="flex-1">
                            <h4 className="text-xl font-semibold text-white">{announcement.title}</h4>
                            <p className="text-gray-300 mt-2">{announcement.content}</p>
                        </div>
                        {announcement.link && announcement.linkText && (
                            <div className="mt-4 sm:mt-0 sm:ml-6 flex-shrink-0">
                                <Link 
                                    to={announcement.link} 
                                    className="inline-flex items-center bg-amber-500 text-gray-900 font-bold py-2 px-5 rounded-md hover:bg-amber-400 transition-colors transform hover:scale-105"
                                >
                                    {announcement.linkText}
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                    </svg>
                                </Link>
                            </div>
                        )}
                    </motion.div>
                ))}
            </div>
        </div>
    );
};
