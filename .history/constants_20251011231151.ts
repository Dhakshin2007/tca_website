import { TeamMember, Event, Student, Professor, Delegate, Announcement, Alumni } from './types';

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
  { id: 1, name: 'Rajesh Naik', role: 'General Secretary', department: 'Mechanical Department', year: '2023-27', imageUrl: './rajesh.jpg', email: '2023meb1373@iitrpr.ac.in', linkedin: 'https://www.linkedin.com/in/tejavath-rajesh-naik-39876a335/' },
  { id: 2, name: 'Sai Mohith Reddy', role: 'Treasurer', department: 'Mechanical Department', year: '2023-27', imageUrl: './mohith.jpg', email: '2023meb1338@iitrpr.ac.in', linkedin: 'https://www.linkedin.com/in/daggolu-sai-mohith-reddy-2b33611b3/' },
  { id: 3, name: 'Arun Rathod', role: 'Sports Secretary', department: 'School of Artificial Intelligence & Data Engineering', year: '2023-27', imageUrl: './Arun.jpg', email: '2023aib1014@iitrpr.ac.in', linkedin: 'https://www.linkedin.com/in/arun-rathlavath-751031287/' },
  { id: 4, name: 'Akash M', role: 'Cultural Secretary ( M )', department: 'Civil Department', year: '2023-27', imageUrl: './akash.jpg', email: '2023ceb1038@iitrpr.ac.in', linkedin: '#' },
  { id: 9, name: 'Nikitha K', role: 'Cultural Secretary ( F )', department: 'Civil Department', year: '2023-27', imageUrl: './nikitha.jpg', email: '2023ceb1033@iitrpr.ac.in', linkedin: '#' },
  { id: 10, name: 'Sree Lakshmi D', role: 'Media & OutReach', department: 'Civil Department', year: '2023-27', imageUrl: './sree.jpg', email: '2023ceb1027@iitrpr.ac.in', linkedin: 'https://www.linkedin.com/in/desireddy-sreelakshmi-53639028a/' },
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
  { name: 'Satya Prakash Nissy', role: 'Cultural Manager', teamYear: '2023-24' },
  { name: 'Saran Yadav', role: 'General Secretary', teamYear: '2023-24' },
  { name: 'Uday N', role: 'Treasurer', teamYear: '2023-24' },
  { name: 'Krishna G', role: 'Sports Secretary', teamYear: '2023-24' },
  { name: 'Chaitanya P', role: 'Cultural Head', teamYear: '2023-24' },
  { name: 'Deekshita K', role: 'Cultural Secretary', teamYear: '2023-24' },
  // Team of 2022-23
  { name: 'Lashyanth', role: 'President', teamYear: '2022-23' },
  { name: 'Harsha', role: 'General secretary', teamYear: '2022-23' },
  { name: 'Nikilesh', role: 'Cultural Secretary (Male)', teamYear: '2022-23' },
  { name: 'Hema Priya', role: 'Cult Secretary (Female)', teamYear: '2022-23' },
  { name: 'Sharath', role: 'Treasurer', teamYear: '2022-23' },
];


export const EVENTS: Event[] = [
  { id: 1, title: 'Bathukamma 2025', date: 'October 02, 2025', description: 'Experience the floral festival of Telangana and Andhra Pradesh. Join us for a vibrant celebration with traditional songs, dances, and beautifully arranged flower stacks.', imageUrl: '/Dush_25.jpg', type: 'past' , youtubeLink: 'https://drive.google.com/drive/folders/1eGTUyuv_tqfQSe5JPOHaSGQRZ4-r8vYx' },
  { id: 2, title: 'Fresher Interaction 2025', date: 'August 07 2025', description: 'A warm welcome to all the new Telugu students joining the IIT Ropar family.', imageUrl: '/fresh_25.jpg', type: 'past' },
  { id: 4, title: 'Kingdom Screening', date: 'August 02, 2025', description: 'Kingdom is a Telugu Movie with Star Cast Vijay Devarkonda and Showing the essence of direction with Gowtham Sir', imageUrl: '/kind.avif', type: 'past' },
  { id: 5, title: 'SVSC Screening', date: 'March 07, 2024', description: "A fun night watching the classic Telugu movie 'Seethamma Vakitlo Sirimalle Chettu' with friends and popcorn.", imageUrl: '/SVSC.jpg', type: 'past' },
  { id: 3, title: 'Bathukamma 2024', date: 'October 12, 2024', description: 'A colorful floral festival celebrating the vibrant culture of Telangana and Andhra Pradesh with traditional songs and dances.', imageUrl: '/Dush_24.jpg', type: 'past', youtubeLink: 'https://drive.google.com/drive/folders/1iI_6OEfZALUv6lszThgjm-05U8Reoq6F' },
  { id: 6, title: 'Coolie Screening', date: 'August 15, 2025', description: "Starring Rajnikanth in Action with the Director Lokesh Kanagaraj has been Screened in the Ritz Multiplex Ropar", imageUrl: '/Cool.jpg', type: 'past' },
];

export const STUDENTS: Student[] = [
    // Artificial Intelligence and Data Engineering
    { id: 1, name: 'Dhakshin Kotha', entryNumber: '2024AIB1009', branch: 'Artificial Intelligence and Data Engineering', batch: 2024, email: '2024aib1009@iitrpr.ac.in' },
    { id: 2, name: 'Yeswanth Teja Jakka', entryNumber: '2024AIB1008', branch: 'Artificial Intelligence and Data Engineering', batch: 2024, email: '2024aib1008@iitrpr.ac.in' },
    { id: 3, name: 'Arun Rathlavath', entryNumber: '2023AIB1014', branch: 'Artificial Intelligence and Data Engineering', batch: 2023, email: '2023aib1014@iitrpr.ac.in' },

    // Computer Science
    { id: 4, name: 'Para Arun Gopi', entryNumber: '2024CSB1138', branch: 'Computer Science', batch: 2024, email: '2024csb1138@iitrpr.ac.in' },
    { id: 5, name: 'Bolisetti Hansika', entryNumber: '2024CSB1109', branch: 'Computer Science', batch: 2024, email: '2024csb1109@iitrpr.ac.in' },
    { id: 6, name: 'Polisetty Tharun', entryNumber: '2023CSB1144', branch: 'Computer Science', batch: 2023, email: '2023csb1144@iitrpr.ac.in' },
    { id: 7, name: 'Sai Pranav', entryNumber: '2022CSB1117', branch: 'Computer Science', batch: 2022, email: '2022csb1117@iitrpr.ac.in' },

    // Chemical Engineering
    { id: 8, name: 'Ganedi Durga Tejaswi', entryNumber: '2024CHB1067', branch: 'Chemical Engineering', batch: 2024, email: '2024chb1067@iitrpr.ac.in' },
    { id: 9, name: 'Purandhar Sai', entryNumber: '2024CHB1062', branch: 'Chemical Engineering', batch: 2024, email: '2024chb1062@iitrpr.ac.in' },
    { id: 10, name: 'Durgam Navya', entryNumber: '2023CHB1066', branch: 'Chemical Engineering', batch: 2023, email: '2023chb1066@iitrpr.ac.in' },
    { id: 11, name: 'Elluri Niranjan', entryNumber: '2023CHB1067', branch: 'Chemical Engineering', batch: 2023, email: '2023chb1067@iitrpr.ac.in' },
    
    // Electrical Engineering
    { id: 13, name: 'Kanithi Pavanrammanikanta', entryNumber: '2024EEB1214', branch: 'Electrical Engineering', batch: 2024, email: '2024eeb1214@iitrpr.ac.in' },
    { id: 14, name: 'Mudavath Sriman', entryNumber: '2023EEB1225', branch: 'Electrical Engineering', batch: 2023, email: '2023eeb1225@iitrpr.ac.in' },
    { id: 15, name: 'P Kohith ', entryNumber: '2023EEB1232', branch: 'Electrical Engineering', batch: 2023, email: '2023eeb1232@iitrpr.ac.in' },
    { id: 16, name: 'Manajigari Harshitha', entryNumber: '2022EEB1189', branch: 'Electrical Engineering', batch: 2022, email: '2022eeb1189@iitrpr.ac.in' },
    { id: 17, name: 'Venkat Kommina', entryNumber: '2022EEB1225', branch: 'Electrical Engineering', batch: 2022, email: '2022eeb1225@iitrpr.ac.in' },

    // Mathematics and computing
    { id: 18, name: 'Pola Sai Sujith', entryNumber: '2024MCB1309', branch: 'Mathematics and computing', batch: 2024, email: '2024mcb1309@iitrpr.ac.in' },
    { id: 19, name: 'Chinthamalla Samhitha', entryNumber: '2024MCB1291', branch: 'Mathematics and computing', batch: 2024, email: '2024mcb1291@iitrpr.ac.in' },
    { id: 20, name: 'Goutham Naroju', entryNumber: '2023MCB1295', branch: 'Mathematics and computing', batch: 2023, email: '2023mcb1295@iitrpr.ac.in' },
    { id: 21, name: 'Kammari Harshavardhan', entryNumber: '2023MCB1216', branch: 'Mathematics and computing', batch: 2023, email: '2023mcb1216@iitrpr.ac.in' },
    { id: 22, name: 'Gopi Varshini', entryNumber: '2022MCB1264', branch: 'Mathematics and computing', batch: 2022, email: '2022mcb1264@iitrpr.ac.in' },

    // Mechanical Engineering
    { id: 23, name: 'Koppu Divyamshi', entryNumber: '2024MEB1363', branch: 'Mechanical Engineering', batch: 2024, email: '2024meb1363@iitrpr.ac.in' },
    { id: 24, name: 'Hemanth', entryNumber: '2024MEB1399', branch: 'Mechanical Engineering', batch: 2024, email: '2024meb1399@iitrpr.ac.in' },
    { id: 25, name: 'Daggolu Sai', entryNumber: '2023MEB1338', branch: 'Mechanical Engineering', batch: 2023, email: '2023meb1338@iitrpr.ac.in' },
    { id: 26, name: 'Juvvanapudi Nikhil', entryNumber: '2023MEB1352', branch: 'Mechanical Engineering', batch: 2023, email: '2023meb1352@iitrpr.ac.in' },
    { id: 27, name: 'Badugu Vijay', entryNumber: '2022MEB1303', branch: 'Mechanical Engineering', batch: 2022, email: '2022meb1303@iitrpr.ac.in' },
    
    // Metallurgical Engineering
    { id: 28, name: 'Savara Anil Kumar', entryNumber: '2024MMB1420', branch: 'Metallurgical Engineering', batch: 2024, email: '2024mmb1420@iitrpr.ac.in' },
    { id: 29, name: 'Geethika Garepally', entryNumber: '2024MMB1410', branch: 'Metallurgical Engineering', batch: 2024, email: '2024mmb1410@iitrpr.ac.in' },
    { id: 30, name: 'K Sanjana', entryNumber: '2023MMB1412', branch: 'Metallurgical Engineering', batch: 2023, email: '2023mmb1412@iitrpr.ac.in' },
    { id: 31, name: 'Kota Lohith', entryNumber: '2023MMB1384', branch: 'Metallurgical Engineering', batch: 2022, email: '2023mmb1384@iitrpr.ac.in' },

    // Civil Engineering
    { id: 32, name: 'Dhaneeshwar', entryNumber: '2024CEB1037', branch: 'Civil Engineering', batch: 2024, email: '2024ceb1037@iitrpr.ac.in' },
    { id: 33, name: 'Aakash', entryNumber: '2023CEB1038', branch: 'Civil Engineering', batch: 2023, email: '2023ceb1038@iitrpr.ac.in' },
    { id: 34, name: 'D Sree Lakshmi', entryNumber: '2023CEB1027', branch: 'Civil Engineering', batch: 2023, email: '2023ceb1027@iitrpr.ac.in' },
    { id: 35, name: 'Jaya harish', entryNumber: '2022CEB1011', branch: 'Civil Engineering', batch: 2022, email: '2022ceb1011@iitrpr.ac.in' },
    
    // Engineering Physics
    { id: 36, name: 'Pavan G', entryNumber: '2023EPB1274', branch: 'Engineering Physics', batch: 2023, email: '2023epb1274@iitrpr.ac.in' },
    { id: 37, name: 'Hari', entryNumber: '2022EPB1241', branch: 'Engineering Physics', batch: 2022, email: '2022epb1241@iitrpr.ac.in' },
    { id: 38, name: 'Bhargav', entryNumber: '2022EPB1242', branch: 'Engineering Physics', batch: 2022, email: '2022epb1242@iitrpr.ac.in' },
];

export const MENTORS: Student[] = [
    { id: 40, name: 'Manchala Sashank', entryNumber: '2023EEB1221', branch: 'Electrical Engineering', batch: 2023, email: '2023eeb1221@iitrpr.ac.in' },
    { id: 41, name: 'Kondaka Dhaneeswar', entryNumber: '2024CEB1037', branch: 'Civil Engineering', batch: 2024, email: '2024ceb1037@iitrpr.ac.in' },
    { id: 42, name: 'S Madhu', entryNumber: '2022CSB1127', branch: 'Computer Science Engineering', batch: 2022, email: '2022csb1127@iitrpr.ac.in' },
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
  { name: 'Lava Kumar', department: 'Metallurgy Dept' },
  { name: 'Prabhakar', department: 'Mathematics Dept' },
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
  { name: 'Manogona', entryNumber: '2024MCB1293', position: 'Alfaaz' },
  { name: 'Divyamshi Koppu', entryNumber: '2024MEB1363', position: 'Epicure' },
  { name: 'Ganedi Durga Tejaswi', entryNumber: '2024CHB1067', position: 'SWE , Pehchaan Ek Safar' },
  { name: 'Akkireddi Bhavya', entryNumber: '2024MEB1327', position: 'SWE , CDPC' },
  { name: 'Balaji Naik', entryNumber: '2024MCB1290', position: 'ODAC' },
];

export const ANNOUNCEMENTS: Announcement [] = [
  {
    id: 1,
    title: 'Website Launch!',
    content: 'Welcome to the new official digital home of the Telugu Cultural Association at IIT Ropar! Explore our new features, get to know the team, and stay updated on all our events.',
  },
  {
    id: 2,
    title: 'Welcome Freshers of Batch 2025',
    content: 'We are Welcoming Heartfully to all the Students of Batch 2025 to IIT Ropar',
    /*link: '/events',
    linkText: 'See Event Details',*/
  }
  /*{
    id: 3,
    title: 'Mentorship Program Sign-ups Open',
    content: 'The 2025-26 mentorship program is now open for sign-ups. Connect with a senior to guide you through your first year at IIT Ropar. Limited spots available!',
    link: '/students',
    linkText: 'Find Your Mentor',
  }*/
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

export const ALUMNI: Alumni[] = [
  {
    id: 1,
    name: 'Gochipatla Satya Prakash',
    batch: '2021-2025',
    currentRole: 'Business Technology Solutions associate',
    company: 'ZS Associates, Pune',
    imageUrl: './satya.jpg',
    linkedin: 'https://www.linkedin.com/in/satya-prakash-gochipatla-5ba74a249/?originalSubdomain=in',
    email: 'gsp883337@gmail.com'
  },
  {
    id: 2,
    name: 'Kayitha Saran Yadav',
    batch: '2021-2022',
    currentRole: 'Data Scientist',
    company: 'Microsoft',
    imageUrl: 'https://picsum.photos/seed/sravya/400/400',
    linkedin: 'https://www.linkedin.com/',
    email: 'sravya.r@example.com'
  }
];
