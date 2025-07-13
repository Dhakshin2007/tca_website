
import React, { useState } from 'react';
import { STUDENTS, MENTORS, DEPARTMENTS, BATCHES } from '../constants';
import { Student } from '../types';
import SectionWrapper from '../components/SectionWrapper';
import { motion, AnimatePresence } from 'framer-motion';

type Tab = 'directory' | 'juniors';

const StudentCard: React.FC<{ student: Student }> = ({ student }) => (
    <motion.div
        layout
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="bg-gray-800 p-4 rounded-lg text-center"
    >
        <h3 className="font-bold text-lg text-white">{student.name}</h3>
        <p className="text-amber-400 text-sm">{student.branch}</p>
        <p className="text-gray-400 text-xs mt-1">Batch of {student.batch}</p>
        <p className="text-gray-500 text-xs mt-2">{student.entryNumber}</p>
        <a href={`mailto:${student.email}`} className="text-amber-500 hover:text-amber-400 text-xs mt-2 inline-block">Contact</a>
    </motion.div>
);

const StudentDirectory = () => {
    // Use DEPARTMENTS from constants to maintain a sorted order for branches
    const branchesWithStudents = DEPARTMENTS.filter(department =>
        STUDENTS.some(student => student.branch === department)
    );

    return (
        <div>
            {branchesWithStudents.map(branch => (
                <div key={branch} className="mb-12">
                    <h2 className="text-3xl font-bold text-amber-400 border-b-2 border-amber-500/30 pb-2 mb-6">
                        {branch}
                    </h2>
                    <motion.div
                        layout
                        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"
                    >
                        {STUDENTS
                            .filter(student => student.branch === branch)
                            .map(student => (
                                <StudentCard key={student.id} student={student} />
                            ))}
                    </motion.div>
                </div>
            ))}
        </div>
    );
};

const JuniorsSection = () => (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 bg-gray-800/50 p-8 rounded-lg">
            <h2 className="text-3xl font-bold text-amber-400">A Warm Welcome to Our Juniors!</h2>
            <p className="mt-4 text-gray-300">Welcome to the IIT Ropar family! We are thrilled to have you here. The Telugu Cultural Association is your home on campus. We're here to help you settle in, make friends, and celebrate our shared culture.</p>
            <h3 className="text-2xl font-bold text-white mt-8">Campus Survival Guide</h3>
            <p className="mt-2 text-gray-300">To help you get started, we've compiled a survival guide with tips on academics, hostel life, food, and navigating the campus. Download it and get a head start!</p>
            <div className="mt-4 flex flex-wrap gap-4">
                <a href="https://drive.google.com/file/d/1Dp0GgfUVdL5W1pQbERkn0RmRbq3VMiLq/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="inline-block bg-amber-500 text-gray-900 font-bold py-2 px-4 rounded-md hover:bg-amber-400 transition-colors">Download Guide (PDF)</a>
                <a href="https://docs.google.com/document/d/1Nye9iAh_VHODnMgyPABfSAczzmcML1PL4-AnRIi7bTE/edit?usp=sharing" target="_blank" rel="noopener noreferrer" className="inline-block bg-amber-500 text-gray-900 font-bold py-2 px-4 rounded-md hover:bg-amber-400 transition-colors">How to reach (PDF)</a>
                <a href="https://iitropartourr.netlify.app/" target="_blank" rel="noopener noreferrer" className="inline-block bg-amber-500 text-gray-900 font-bold py-2 px-4 rounded-md hover:bg-amber-400 transition-colors">Campus Tour</a>
            </div>
        </div>
        <div className="bg-gray-800 p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-white">Your Telugu Mentors</h3>
            <p className="text-sm text-gray-400 mt-2">Connect with senior students who can guide you. Don't hesitate to reach out!</p>
            <div className="mt-4 space-y-4">
                {MENTORS.map(mentor => (
                    <div key={mentor.id} className="bg-gray-700 p-3 rounded-md">
                        <p className="font-semibold text-white">{mentor.name}</p>
                        <p className="text-xs text-amber-400">{mentor.branch}</p>
                        <a href={`mailto:${mentor.email}`} className="text-xs text-gray-400 hover:text-amber-300">{mentor.email}</a>
                    </div>
                ))}
            </div>
        </div>
    </div>
);

const StudentsPage: React.FC = () => {
    const [activeTab, setActiveTab] = useState<Tab>('directory');

    return (
        <div>
            <div className="bg-gray-800 py-16 text-center">
                <h1 className="text-4xl md:text-5xl font-extrabold text-amber-400">Our Community</h1>
                <p className="mt-4 text-lg text-gray-300">Connecting every Telugu student at IIT Ropar.</p>
            </div>

            <SectionWrapper idName="students-section">
                <div className="flex justify-center border-b border-gray-700 mb-8">
                    <button onClick={() => setActiveTab('directory')} className={`px-6 py-3 text-lg font-semibold transition-colors ${activeTab === 'directory' ? 'text-amber-400 border-b-2 border-amber-400' : 'text-gray-400'}`}>Student Directory</button>
                    <button onClick={() => setActiveTab('juniors')} className={`px-6 py-3 text-lg font-semibold transition-colors ${activeTab === 'juniors' ? 'text-amber-400 border-b-2 border-amber-400' : 'text-gray-400'}`}>For Upcoming Juniors</button>
                </div>
                
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                    >
                        {activeTab === 'directory' ? <StudentDirectory /> : <JuniorsSection />}
                    </motion.div>
                </AnimatePresence>
            </SectionWrapper>
        </div>
    );
};

export default StudentsPage;