import React from 'react';
import SectionWrapper from '../components/SectionWrapper';
import { motion } from 'framer-motion';

const PageHeader = () => (
    <div className="bg-gray-800 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.h1 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-4xl md:text-5xl font-extrabold text-amber-400"
            >
                Our Story & Mission
            </motion.h1>
            <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mt-4 text-lg text-gray-300 max-w-3xl mx-auto"
            >
                Tracing our roots, celebrating our present, and building our future together.
            </motion.p>
        </div>
    </div>
);

const TimelineItem: React.FC<{ year: string; title: string; description: string; isLeft?: boolean }> = ({ year, title, description, isLeft }) => (
    <div className="mb-8 flex justify-between items-center w-full">
        {isLeft && <div className="order-1 w-5/12"></div>}
        <div className="z-20 flex items-center order-1 bg-amber-500 shadow-xl w-8 h-8 rounded-full">
            <h1 className="mx-auto font-semibold text-lg text-gray-900">{/* Empty for dot */}</h1>
        </div>
        <div className={`order-1 ${isLeft ? 'md:pl-8' : 'md:pr-8'} bg-gray-800 rounded-lg shadow-xl w-full md:w-5/12 p-6`}>
            <p className="mb-2 text-sm text-amber-400">{year}</p>
            <h3 className="mb-3 font-bold text-white text-xl">{title}</h3>
            <p className="text-sm leading-snug tracking-wide text-gray-400 text-opacity-100">{description}</p>
        </div>
    </div>
);


const AboutPage: React.FC = () => {
    return (
        <>
            <PageHeader />
            <SectionWrapper idName="mission-vision">
              <div className="grid md:grid-cols-2 gap-12">
                <div className="bg-gray-800/50 p-8 rounded-xl shadow-lg border border-amber-500/20">
                  <h2 className="text-3xl font-bold text-amber-400">Our Mission</h2>
                  <p className="mt-4 text-gray-300">To foster a vibrant and inclusive community for Telugu students at IIT Ropar by organizing cultural events, providing academic and social support, and celebrating the rich traditions of our homeland. We aim to be a home away from home, ensuring every member feels connected and proud of their heritage.</p>
                </div>
                <div className="bg-gray-800/50 p-8 rounded-xl shadow-lg border border-amber-500/20">
                  <h2 className="text-3xl font-bold text-amber-400">Our Vision</h2>
                  <p className="mt-4 text-gray-300">To be recognized as the most dynamic and culturally rich student association across all IITs. We envision a future where the Telugu Cultural Association of IIT Ropar is a benchmark for student engagement, cultural celebration, and community building, leaving a lasting legacy for generations of students to come.</p>
                </div>
              </div>
            </SectionWrapper>

            <SectionWrapper idName="timeline">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-amber-400 mb-12">Our Journey</h2>
                <div className="relative wrap overflow-hidden p-10 h-full">
                    <div className="border-2-2 absolute border-opacity-20 border-gray-700 h-full border" style={{ left: '50%' }}></div>
                    <div className="mb-8 flex justify-between md:flex-row-reverse items-center w-full left-timeline">
                        <div className="order-1 w-5/12"></div>
                        <div className="z-20 flex items-center order-1 bg-amber-500 shadow-xl w-8 h-8 rounded-full"></div>
                        <div className="order-1 bg-gray-800 rounded-lg shadow-xl w-full md:w-5/12 px-6 py-4">
                            <p className="mb-2 text-sm text-amber-400">2018</p>
                            <h3 className="mb-3 font-bold text-white text-xl">The Beginning</h3>
                            <p className="text-sm font-medium leading-snug tracking-wide text-gray-400">A small group of enthusiastic Telugu students came together to form the association.</p>
                        </div>
                    </div>

                    <div className="mb-8 flex justify-between items-center w-full right-timeline">
                         <div className="order-1 w-5/12"></div>
                        <div className="z-20 flex items-center order-1 bg-amber-500 shadow-xl w-8 h-8 rounded-full"></div>
                        <div className="order-1 bg-gray-800 rounded-lg shadow-xl w-full md:w-5/12 px-6 py-4">
                             <p className="mb-2 text-sm text-amber-400">2020</p>
                            <h3 className="mb-3 font-bold text-white text-xl">First Grand Event</h3>
                            <p className="text-sm font-medium leading-snug tracking-wide text-gray-400">Successfully organized our first large scale Bathukamma Event, setting a new benchmark.</p>
                        </div>
                    </div>

                    <div className="mb-8 flex justify-between md:flex-row-reverse items-center w-full left-timeline">
                        <div className="order-1 w-5/12"></div>
                        <div className="z-20 flex items-center order-1 bg-amber-500 shadow-xl w-8 h-8 rounded-full"></div>
                        <div className="order-1 bg-gray-800 rounded-lg shadow-xl w-full md:w-5/12 px-6 py-4">
                             <p className="mb-2 text-sm text-amber-400">2022</p>
                            <h3 className="mb-3 font-bold text-white text-xl">Community Growth</h3>
                            <p className="text-sm font-medium leading-snug tracking-wide text-gray-400">Launched the student mentorship program to guide incoming juniors, strengthening our community bonds.</p>
                        </div>
                    </div>
                     <div className="mb-8 flex justify-between items-center w-full right-timeline">
                         <div className="order-1 w-5/12"></div>
                        <div className="z-20 flex items-center order-1 bg-amber-500 shadow-xl w-8 h-8 rounded-full"></div>
                        <div className="order-1 bg-gray-800 rounded-lg shadow-xl w-full md:w-5/12 px-6 py-4">
                             <p className="mb-2 text-sm text-amber-400">2025</p>
                            <h3 className="mb-3 font-bold text-white text-xl">Digital Presence</h3>
                            <p className="text-sm font-medium leading-snug tracking-wide text-gray-400">Launched our official website to connect with a wider audience and document our legacy.</p>
                        </div>
                    </div>
                </div>
            </SectionWrapper>
            
            <SectionWrapper idName="president-message">
                <div className="bg-gray-800 rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-8 shadow-2xl shadow-amber-900/20">
                    <img src="/Uday.jpg" alt="President" className="w-40 h-40 rounded-full object-cover border-4 border-amber-400" />
                    <div>
                        <h2 className="text-3xl font-bold text-amber-400">A Message from the General Secretary</h2>
                        <blockquote className="mt-4 text-gray-300 italic border-l-4 border-amber-500 pl-4">
                            "It is with immense pride that I welcome you to the official home of the Telugu Cultural Association. Our association is more than just a group; it's a family. We strive to create unforgettable experiences and a strong support system for all our members. Let's continue to celebrate our culture with passion and unity!"
                        </blockquote>
                        <p className="mt-4 font-semibold text-white">Vijay Badugu, General Sec (2024-25)</p>
                    </div>
                </div>
            </SectionWrapper>
        </>
    );
};

export default AboutPage;
