import React from 'react';
import SectionWrapper from '../components/SectionWrapper';
import { motion, Variants } from 'framer-motion';
import { PROFESSORS, DELEGATES } from '../constants';

const PageHeader = () => (
    <div className="relative py-24 text-center overflow-hidden">
        <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
            style={{ backgroundImage: `url(https://i.postimg.cc/vBhf1vFx/IMG-8062.jpg)` }}
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
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: 'spring' } },
};

const delegateItemVariants: Variants = {
    hidden: { opacity: 0, x: -30 },
    show: { opacity: 1, x: 0, transition: { type: 'spring', stiffness: 120 } },
};


const NotablePage: React.FC = () => {
    return (
        <div>
            <PageHeader />

            <SectionWrapper idName="alumni">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-8">Distinguished Alumni</h2>
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