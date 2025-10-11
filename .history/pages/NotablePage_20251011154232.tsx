import React, { useState } from 'react';
import SectionWrapper from '../components/SectionWrapper';
import { motion, Variants, AnimatePresence } from 'framer-motion';
import { PROFESSORS, DELEGATES, ALUMNI } from '../constants';
import { Alumni } from '../types';
import Icon from '../components/Icon.tsx';

const PageHeader = () => (
    <div className="relative py-24 text-center overflow-hidden">
        <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
            style={{ backgroundImage: `url(https://i.postimg.cc/kgN4XgdB/prof.webp)` }}
        >
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
        </div>
        <div className="relative z-10 container mx-auto px-4">
            <motion.h1 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-4xl md:text-5xl font-extrabold text-amber-400"
            >
                Notable Figures
            </motion.h1>
            <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mt-4 text-lg text-gray-200 max-w-3xl mx-auto"
            >
                Honoring the individuals who have made significant contributions to our community.
            </motion.p>
        </div>
    </div>
);

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
        },
    },
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    show: { opacity: 1, y: 0, scale: 1, transition: { type: 'spring' } },
};

const delegateItemVariants: Variants = {
    hidden: { opacity: 0, x: -30 },
    show: { opacity: 1, x: 0, transition: { type: 'spring', stiffness: 120 } },
};

const AlumniCard: React.FC<{ alumnus: Alumni }> = ({ alumnus }) => (
    <motion.div
        layout
        variants={itemVariants}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="relative aspect-square bg-gray-800 rounded-lg shadow-lg text-left overflow-hidden group"
    >
        <img src={alumnus.imageUrl} alt={alumnus.name} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
        
        <div className="absolute bottom-0 left-0 right-0 p-4">
            <h3 className="text-lg font-bold text-white">{alumnus.name}</h3>
            <p className="text-amber-400 text-sm font-semibold">{alumnus.currentRole}</p>
            <p className="text-gray-300 text-xs">{alumnus.company}</p>
        </div>

        <div className="absolute inset-0 bg-black/50 transition-opacity duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
            <div className="flex space-x-4">
                {alumnus.email && (
                    <a href={`mailto:${alumnus.email}`} className="text-white hover:text-amber-400 p-3 bg-black/50 rounded-full transition-all transform hover:scale-110">
                        <Icon name="mail" className="w-5 h-5" />
                    </a>
                )}
                {alumnus.linkedin && (
                    <a href={alumnus.linkedin} target="_blank" rel="noopener noreferrer" className="text-white hover:text-amber-400 p-3 bg-black/50 rounded-full transition-all transform hover:scale-110">
                        <Icon name="linkedin" className="w-5 h-5" />
                    </a>
                )}
            </div>
        </div>
    </motion.div>
);


const NotablePage: React.FC = () => {
    const [showAllAlumni, setShowAllAlumni] = useState(false);
    const displayedAlumni = showAllAlumni ? ALUMNI : ALUMNI.slice(0, 4);

    return (
        <div>
            <PageHeader />

            <SectionWrapper idName="alumni">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">Distinguished Alumni</h2>
                {ALUMNI.length > 0 ? (
                     <>
                        <motion.div
                            layout
                            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
                        >
                            <AnimatePresence>
                                {displayedAlumni.map((alumnus) => (
                                    <AlumniCard key={alumnus.id} alumnus={alumnus} />
                                ))}
                            </AnimatePresence>
                        </motion.div>
                        {ALUMNI.length > 4 && (
                            <div className="text-center mt-12">
                                <button
                                    onClick={() => setShowAllAlumni(!showAllAlumni)}
                                    className="bg-amber-500 text-gray-900 hover:bg-amber-400 font-bold py-3 px-8 rounded-full transition-transform transform hover:scale-105"
                                >
                                    {showAllAlumni ? 'Show Less' : 'View More Alumni'}
                                </button>
                            </div>
                        )}
                    </>
                ) : (
                    <div className="flex justify-center items-center h-48 bg-gray-800/50 rounded-xl border border-dashed border-amber-500/30">
                        <motion.div
                            animate={{
                                scale: [1, 1.02, 1],
                                opacity: [0.7, 1, 0.7],
                            }}
                            transition={{
                                duration: 2.5,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                            className="text-2xl font-semibold text-amber-300 tracking-wider"
                        >
                            Will be updated soon...
                        </motion.div>
                    </div>
                )}
            </SectionWrapper>

            <SectionWrapper idName="professors">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">Our Professors</h2>
                 <motion.div 
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {PROFESSORS.map((professor) => (
                        <motion.div 
                            key={professor.name}
                            variants={itemVariants}
                            className="bg-gray-800/70 p-6 rounded-xl shadow-lg border border-amber-500/20 text-center transform transition-transform duration-300 hover:scale-105 hover:shadow-amber-500/20"
                        >
                            <h3 className="text-xl font-bold text-white">{professor.name}</h3>
                            <p className="text-amber-400 mt-1">{professor.department}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </SectionWrapper>
            
            <SectionWrapper idName="delegates">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">Delegates of 2024</h2>
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.1 }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-8"
                >
                    {DELEGATES.map((delegate, index) => (
                        <motion.div
                            key={`${delegate.name}-${index}`}
                            variants={delegateItemVariants}
                            className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-2xl border border-amber-500/40 shadow-xl shadow-amber-900/10 flex flex-col"
                        >
                            <span className="bg-amber-500/10 text-amber-300 text-xs font-bold px-3 py-1 rounded-full mb-4 self-start">
                                {delegate.position}
                            </span>
                            <h3 className="text-2xl font-bold text-white">{delegate.name}</h3>
                            <p className="text-gray-500 mt-1">{delegate.entryNumber}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </SectionWrapper>

        </div>
    );
};

export default NotablePage;