import React, { useState, useMemo } from 'react';
import { TEAM_MEMBERS_2024, TEAM_MEMBERS_2023, PREVIOUS_TEAMS_DATA } from '../constants';
import { TeamMember, PreviousTeamMember } from '../types';
import SectionWrapper from '../components/SectionWrapper';
import Icon from '../components/Icon';
import { motion } from 'framer-motion';

const TeamMemberCard: React.FC<{ member: TeamMember }> = ({ member }) => (
  <motion.div 
    layout
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0, scale: 0.8 }}
    transition={{ type: "spring", stiffness: 260, damping: 20 }}
    className="bg-gray-800 rounded-lg shadow-lg text-center overflow-hidden group"
  >
    <div className="relative">
      <img src={member.imageUrl} alt={member.name} className="w-full h-64 object-cover" />
      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
        <div className="flex space-x-4">
          <a href={`mailto:${member.email}`} className="text-white hover:text-amber-400 p-2 bg-black/50 rounded-full transition-colors"><Icon name="mail" /></a>
          <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-white hover:text-amber-400 p-2 bg-black/50 rounded-full transition-colors"><Icon name="linkedin" /></a>
        </div>
      </div>
    </div>
    <div className="p-6">
      <h3 className="text-xl font-bold text-white">{member.name}</h3>
      <p className="text-amber-400 font-semibold">{member.role}</p>
      <p className="text-gray-400 text-sm mt-1">{member.department}</p>
    </div>
  </motion.div>
);

const TeamPage: React.FC = () => {
  const teams = [
    { year: 2024, label: 'Team of 2025-26' },
    { year: 2023, label: 'Team of 2024-25' },
  ];
  const [selectedYear, setSelectedYear] = useState(teams[0].year);

  const teamMembers = useMemo(() => {
    if (selectedYear === 2024) return TEAM_MEMBERS_2024;
    if (selectedYear === 2023) return TEAM_MEMBERS_2023;
    return [];
  }, [selectedYear]);

  const previousTeams = useMemo(() => {
    const groupedData: Record<string, PreviousTeamMember[]> = {};
    PREVIOUS_TEAMS_DATA.forEach((member) => {
      const year = member.teamYear;
      if (!groupedData[year]) {
        groupedData[year] = [];
      }
      groupedData[year].push(member);
    });
    return groupedData;
  }, []);

  const previousTeamYears = Object.keys(previousTeams).sort((a, b) => b.localeCompare(a)); // Sort years descending

  return (
    <div className="min-h-screen">
      <div className="bg-gray-800 py-16 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-amber-400">Our Pillars of Strength</h1>
        <p className="mt-4 text-lg text-gray-300">Meet the dedicated individuals who lead our community.</p>
      </div>

      <SectionWrapper idName="team-list">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">Current Office Bearers</h2>
        <div className="flex justify-center mb-12">
          <div className="flex space-x-2 bg-gray-800 p-2 rounded-full">
            {teams.map(team => (
              <button
                key={team.year}
                onClick={() => setSelectedYear(team.year)}
                className={`px-6 py-2 rounded-full font-semibold transition-colors text-sm md:text-base ${selectedYear === team.year ? 'bg-amber-500 text-gray-900' : 'text-gray-300 hover:bg-gray-700'}`}
              >
                {team.label}
              </button>
            ))}
          </div>
        </div>

        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {teamMembers.map(member => (
              <TeamMemberCard key={member.id} member={member} />
            ))}
        </motion.div>
      </SectionWrapper>
      
      <SectionWrapper idName="previous-teams">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">Previous Office Bearers</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {previousTeamYears.map(year => (
                <motion.div 
                    key={year}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.5 }}
                    className="bg-gray-800/50 p-8 rounded-xl shadow-lg border border-amber-500/20"
                >
                    <h3 className="text-2xl font-bold text-amber-400 mb-6 border-b-2 border-amber-500/30 pb-2">
                        Team of {year}
                    </h3>
                    <motion.ul 
                        className="space-y-4"
                        variants={{ show: { transition: { staggerChildren: 0.07 } } }}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                    >
                        {previousTeams[year].map((member, index) => (
                            <motion.li 
                                key={`${member.name}-${index}`}
                                className="flex justify-between items-center"
                                variants={{ hidden: { opacity: 0, x: -20 }, show: { opacity: 1, x: 0 } }}
                            >
                                <span className="font-semibold text-white">{member.name}</span>
                                <span className="text-gray-400 text-sm text-right">{member.role}</span>
                            </motion.li>
                        ))}
                    </motion.ul>
                </motion.div>
            ))}
        </div>
      </SectionWrapper>
    </div>
  );
};

export default TeamPage;