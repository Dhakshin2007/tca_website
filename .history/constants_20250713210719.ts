import { TeamMember, Event, Student, Professor, Delegate } from './types';

type PreviousTeamMember = {
  name: string;
  role: string;
  teamYear: string;
};

export const NAV_LINKS = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Team', path: '/team' },
  { name: 'Events', path: '/events' },
  { name: 'Students', path: '/students' },
  { name: 'College Info', path: '/college-info' },
  { name: 'Notable', path: '/notable' },
];

export const TEAM_MEMBERS_2024: TeamMember[] = [
  { id: 1, name: 'YTD', role: 'Secretary', department: '-', year: '2023-27', imageUrl: 'https://picsum.photos/seed/sathvik/400/400', email: 's.reddy@iitrpr.ac.in', linkedin: '#' },
  { id: 2, name: 'YTD', role: 'Treasurer', department: '-', year: '2023-27', imageUrl: 'https://picsum.photos/seed/lakshmi/400/400', email: 'l.priya@iitrpr.ac.in', linkedin: '#' },
  { id: 3, name: 'YTD', role: 'Sports Secretary', department: '-', year: '2023-27', imageUrl: 'https://picsum.photos/seed/arjun/400/400', email: 'a.varma@iitrpr.ac.in', linkedin: '#' },
  { id: 4, name: 'YTD', role: 'Cultural Secretary', department: '-', year: '2023-27', imageUrl: 'https://picsum.photos/seed/keerthana/400/400', email: 'k.rao@iitrpr.ac.in', linkedin: '#' },
];

export const TEAM_MEMBERS_2023: TeamMember[] = [
  { id: 5, name: 'Vijay Badugu', role: 'Secretary', department: 'Mechanical Department', year: '2022-26', imageUrl: '/Vijay.jpg', email: '2022meb1303@iitrpr.ac.in', linkedin: 'https://www.linkedin.com/in/badugu-vijay-a28366261/' },
  { id: 6, name: 'Pradeep', role: 'Treasurer', department: 'Electrical Department', year: '2022-26', imageUrl: '/Pradeep.jpg', email: 'a.kumari@iitrpr.ac.in', linkedin: 'https://www.linkedin.com/in/sai-pradeep-2050a728a/' },
  { id: 7, name: 'Deepak Teja Banoth', role: 'Sports Secretary', department: 'Metallurgy Department', year: '2022-26', imageUrl: '/Deepak.jpg', email: '2022mmb1404@iitrpr.ac.in', linkedin: 'https://www.linkedin.com/in/banoth-deepak-teja/' },
  { id: 8, name: 'Kota Lohith', role: 'Cultural Secretary', department: 'Metallurgy Department', year: '2022-26', imageUrl: '/lo.jpg', email: '2022mmb1384@iitrpr.ac.in', linkedin: 'https://www.linkedin.com/in/lohith-kota-4a5891272/' },
];

export const PREVIOUS_TEAMS_DATA: PreviousTeamMember[] = [
  // Team of 2023-24
  { name: 'Uday Singh', role: 'President', teamYear: '2023-24' },
  { name: 'Saran Yadav', role: 'Secretary', teamYear: '2023-24' },
  { name: 'Uday N', role: 'Treasurer', teamYear: '2023-24' },
  { name: 'Chaitanya', role: 'Cultural Secretary', teamYear: '2023-24' },
  { name: 'Deekshita', role: 'Cultural Secretary', teamYear: '2023-24' },
  { name: 'Krishna', role: 'Sports Secretary', teamYear: '2023-24' },
  { name: 'Satya Prakash', role: 'Cultural Manager', teamYear: '2023-24' },
  // Team of 2022-23
  { name: 'Lashyanth', role: 'President', teamYear: '2022-23' },
  { name: 'Harsha', role: 'General secretary', teamYear: '2022-23' },
  { name: 'Nikilesh', role: 'Cultural Secretary (Male)', teamYear: '2022-23' },
  { name: 'Hema Priya', role: 'Cult Secretary (Female)', teamYear: '2022-23' },
  { name: 'Sharath', role: 'Treasurer', teamYear: '2022-23' },
];


export const EVENTS: Event[] = [
  { id: 1, title: 'Bathukamma 2025', date: 'October 2, 2025', description: 'Experience the floral festival of Telangana and Andhra Pradesh. Join us for a vibrant celebration with traditional songs, dances, and beautifully arranged flower stacks.', imageUrl: '/Dush_25.jpg', type: 'upcoming' },
  { id: 2, title: 'Fresher Interaction 2025', date: 'TBD', description: 'A warm welcome to all the new Telugu students joining the IIT Ropar family.', imageUrl: '/fresh_25.jpg', type: 'upcoming' },
  { id: 5, title: 'SVSC Screening', date: 'March 7, 2024', description: "A fun night watching the classic Telugu movie 'Seethamma Vakitlo Sirimalle Chettu' with friends and popcorn.", imageUrl: '/SVSC.jpg', type: 'past' },
  { id: 3, title: 'Bathukamma 2024', date: 'October 12, 2024', description: 'A colorful floral festival celebrating the vibrant culture of Telangana and Andhra Pradesh with traditional songs and dances.', imageUrl: '/Dush_24.jpg', type: 'past', youtubeLink: 'https://drive.google.com/drive/folders/1iI_6OEfZALUv6lszThgjm-05U8Reoq6F' },
];

export const STUDENTS: Student[] = [
    // Artificial Intelligence and Data Engineering
    { id: 1, name: 'Dhakshin Kotha', entryNumber: '2024AIB1009', branch: 'Artificial Intelligence and Data Engineering', batch: 2024, email: '2024aib1009@iitrpr.ac.in' },
    { id: 2, name: 'Yeswanth Teja Jakka', entryNumber: '2024AIB1008', branch: 'Artificial Intelligence and Data Engineering', batch: 2024, email: '2024aib1008@iitrpr.ac.in' },
    { id: 3, name: 'Arun Rathlavath', entryNumber: '2024AIB1014', branch: 'Artificial Intelligence and Data Engineering', batch: 2023, email: '2024aib1014@iitrpr.ac.in' },

    // Computer Science
    { id: 4, name: 'Para Arun Gopi', entryNumber: '2024CSB1138', branch: 'Computer Science', batch: 2024, email: '2024csb1138@iitrpr.ac.in' },
    { id: 5, name: 'Bolisetti Hansika', entryNumber: '2024csb1109', branch: 'Computer Science', batch: 2024, email: '2024csb1109@iitrpr.ac.in' },
    { id: 6, name: 'Polisetty Tharun', entryNumber: '2023csb1144', branch: 'Computer Science', batch: 2023, email: '2023csb1144@iitrpr.ac.in' },
    { id: 7, name: 'Sai Pranav', entryNumber: '2022csb1117', branch: 'Computer Science', batch: 2022, email: '2022csb1117@iitrpr.ac.in' },

    // Chemical Engineering
    { id: 8, name: 'Ganedi Durga Tejaswi', entryNumber: '2024chb1067', branch: 'Chemical Engineering', batch: 2024, email: '2024chb1067@iitrpr.ac.in' },
    { id: 9, name: 'Purandhar Sai', entryNumber: '2024chb1062', branch: 'Chemical Engineering', batch: 2024, email: '2024chb1062@iitrpr.ac.in' },
    { id: 10, name: 'Durgam Navya', entryNumber: '2023chb1066', branch: 'Chemical Engineering', batch: 2023, email: '2023chb1066@iitrpr.ac.in' },
    { id: 11, name: 'Elluri Niranjan', entryNumber: '2023chb1067', branch: 'Chemical Engineering', batch: 2023, email: '2023chb1067@iitrpr.ac.in' },
    { id: 12, name: 'Mula Spurthy', entryNumber: '2022chb1053', branch: 'Chemical Engineering', batch: 2022, email: '2022chb1053@iitrpr.ac.in' },

    // Electrical Engineering
    { id: 13, name: 'Kanithi Pavanrammanikanta', entryNumber: '2024eeb1214', branch: 'Electrical Engineering', batch: 2024, email: '2024eeb1214@iitrpr.ac.in' },
    { id: 14, name: 'Mudavath Sriman', entryNumber: '2023eeb1225', branch: 'Electrical Engineering', batch: 2023, email: '2023eeb1225@iitrpr.ac.in' },
    { id: 15, name: 'Manchala Sashank', entryNumber: '2023eeb1221', branch: 'Electrical Engineering', batch: 2023, email: '2023eeb1221@iitrpr.ac.in' },
    { id: 16, name: 'Manajigari Harshitha', entryNumber: '2022eeb1189', branch: 'Electrical Engineering', batch: 2022, email: '2022eeb1189@iitrpr.ac.in' },
    { id: 17, name: 'Bhukya Niharika', entryNumber: '2022eeb1402', branch: 'Electrical Engineering', batch: 2022, email: '2022eeb1402@iitrpr.ac.in' },

    // Mathematics and computing
    { id: 18, name: 'Pola Sai Sujith', entryNumber: '2024mcb1309', branch: 'Mathematics and computing', batch: 2024, email: '2024mcb1309@iitrpr.ac.in' },
    { id: 19, name: 'Chinthamalla Samhitha', entryNumber: '2024mcb1291', branch: 'Mathematics and computing', batch: 2024, email: '2024mcb1291@iitrpr.ac.in' },
    { id: 20, name: 'Goutham Naroju', entryNumber: '2023mcb1295', branch: 'Mathematics and computing', batch: 2023, email: '2023mcb1295@iitrpr.ac.in' },
    { id: 21, name: 'Kammari Harshavardhan', entryNumber: '2023mcb1216', branch: 'Mathematics and computing', batch: 2023, email: '2023mcb1216@iitrpr.ac.in' },
    { id: 22, name: 'Gopi Varshini', entryNumber: '2022mcb1264', branch: 'Mathematics and computing', batch: 2022, email: '2022mcb1264@iitrpr.ac.in' },

    // Mechanical Engineering
    { id: 23, name: 'Koppu Divyamshi', entryNumber: '2024meb1363', branch: 'Mechanical Engineering', batch: 2024, email: '2024meb1363@iitrpr.ac.in' },
    { id: 24, name: 'Hemanth', entryNumber: '2024meb1399', branch: 'Mechanical Engineering', batch: 2024, email: '2024meb1399@iitrpr.ac.in' },
    { id: 25, name: 'Daggolu Sai', entryNumber: '2023meb1338', branch: 'Mechanical Engineering', batch: 2023, email: '2023meb1338@iitrpr.ac.in' },
    { id: 26, name: 'Juvvanapudi Nikhil', entryNumber: '2023meb1352', branch: 'Mechanical Engineering', batch: 2023, email: '2023meb1352@iitrpr.ac.in' },
    { id: 27, name: 'Badugu Vijay', entryNumber: '2022meb1303', branch: 'Mechanical Engineering', batch: 2022, email: '2022meb1303@iitrpr.ac.in' },
    
    // Metallurgical Engineering
    { id: 28, name: 'Savara Anil Kumar', entryNumber: '2024MMB1420', branch: 'Metallurgical Engineering', batch: 2024, email: '2024mmb1420@iitrpr.ac.in' },
    { id: 29, name: 'Geethika Garepally', entryNumber: '2024MMB1410', branch: 'Metallurgical Engineering', batch: 2024, email: '2024mmb1410@iitrpr.ac.in' },
    { id: 30, name: 'Sai Charan', entryNumber: '2023mmb1340', branch: 'Metallurgical Engineering', batch: 2023, email: '2023mmb1340@iitrpr.ac.in' },
    { id: 31, name: 'Kota Lohith', entryNumber: '2023mmb1384', branch: 'Metallurgical Engineering', batch: 2022, email: '2023mmb1384@iitrpr.ac.in' },

    // Civil Engineering
    { id: 32, name: 'Dhaneeshwar', entryNumber: '2024CEB1037', branch: 'Civil Engineering', batch: 2024, email: '2024ceb1037@iitrpr.ac.in' },
    { id: 33, name: 'Aakash', entryNumber: '2023ceb1038', branch: 'Civil Engineering', batch: 2023, email: '2023ceb1038@iitrpr.ac.in' },
    { id: 34, name: 'D Sree Lakshmi', entryNumber: '2023ceb1027', branch: 'Civil Engineering', batch: 2023, email: '2023ceb1027@iitrpr.ac.in' },
    { id: 35, name: 'Jaya harish', entryNumber: '2022CEB1011', branch: 'Civil Engineering', batch: 2022, email: '2022ceb1011@iitrpr.ac.in' },
    
    // Engineering Physics
    { id: 36, name: 'Pavan G', entryNumber: '2023epb1274', branch: 'Engineering Physics', batch: 2023, email: '2023epb1274@iitrpr.ac.in' },
    { id: 37, name: 'Hari', entryNumber: '2022EPB1241', branch: 'Engineering Physics', batch: 2022, email: '2022epb1241@iitrpr.ac.in' },
    { id: 38, name: 'Bhargav', entryNumber: '2022EPB1242', branch: 'Engineering Physics', batch: 2022, email: '2022epb1242@iitrpr.ac.in' },
];

export const MENTORS: Student[] = [
    { id: 40, name: 'Manchala Sashank', entryNumber: '2023EEB1221', branch: 'Electrical Engineering', batch: 2023, email: '2023eeb1221@iitrpr.ac.in' },
    { id: 41, name: 'Kondaka Dhaneeswar', entryNumber: '2024CEB1037', branch: 'Civil Engineering', batch: 2024, email: '2024ceb1037@iitrpr.ac.in' },
    { id: 42, name: 'Venkat Kommina', entryNumber: '2022EEB1225', branch: 'Electrical Engineering', batch: 2022, email: '2022eeb1225@iitrpr.ac.in' },
];

export const PROFESSORS: Professor[] = [
  { name: 'Srivatsava Naidu', department: 'Bio Medical Dept' },
  { name: 'CC Reddy', department: 'Electrical Dept' },
  { name: 'G S Raju', department: 'Mathematics Dept' },
  { name: 'S K Vipparthi', department: 'SAIDE' },
  { name: 'K R Sekhar', department: 'Electrical Dept' },
  { name: 'T V Kalyan', department: 'CSE Dept' },
  { name: 'Deepti', department: 'CSE Dept' },
  { name: 'A V RaviTeja', department: 'Electrical Dept' },
];

export const DELEGATES: Delegate[] = [
  { name: 'Poorna Vadhan', entryNumber: '2024MCB1306', position: 'ISMP Ug Mentor' },
  { name: 'Pola Sai Sujith', entryNumber: '2024MCB1309', position: 'ISMP Ug Mentor' },
  { name: 'Samhitha', entryNumber: '2024MCB1291', position: 'ISMP Ug Mentor' },
  { name: 'Hansika', entryNumber: '2024CSB1109', position: 'ISMP Ug Mentor , SWE , Kshitij' },
  { name: 'B Sujay', entryNumber: '2024CSB1110', position: 'ISMP Ug Mentor , Automotive' },
  { name: 'Dedeep Vasireddy', entryNumber: '2024MEB1337', position: 'Iota Cluster' },
  { name: 'Arun Gopi', entryNumber: '2024CSB1138', position: 'Coordinator (BOWA)' },
  { name: 'Ch Purandhar Sai', entryNumber: '2024CHB1062', position: 'Coordinator (BOWA)' },
  { name: 'Y Hemanath', entryNumber: '2024CSB1172', position: 'Esportz' },
  { name: 'K Dhaneeshwar', entryNumber: '2024CEB1037', position: 'Alpha' },
  { name: 'G Lahari', entryNumber: '2024CSB1116', position: 'SWE' },
  { name: 'Mangona', entryNumber: '2024MCB1293', position: 'Alfaaz' },
  { name: 'Divyamshi Koppu', entryNumber: '2024MEB1363', position: 'Epicure' },
  { name: 'Ganedi Durga Tejaswi', entryNumber: '2024CHB1067', position: 'SWE , Pehchaan Ek Safar' },
  { name: 'Akkireddi Bhavya', entryNumber: '2024MEB1327', position: 'SWE , CDPC' },
];


export const DEPARTMENTS = [
    "Artificial Intelligence and Data Engineering",
    "Chemical Engineering",
    "Computer Science",
    "Civil Engineering",
    "Electrical Engineering",
    "Engineering Physics", 
    "Mathematics and computing",
    "Mechanical Engineering",
    "Metallurgical Engineering",
].sort();
export const BATCHES = [2024, 2023, 2022];