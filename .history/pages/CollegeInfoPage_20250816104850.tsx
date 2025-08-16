
import React from 'react';
import SectionWrapper from '../components/SectionWrapper';
import { motion } from 'framer-motion';

const InfoCard: React.FC<{ title: string; children: React.ReactNode; imageUrl: string; linkUrl?: string }> = ({ title, children, imageUrl, linkUrl }) => (
    <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
        className="bg-gray-800 rounded-lg overflow-hidden shadow-lg flex flex-col"
    >
        <img src={imageUrl} alt={title} className="w-full h-56 object-cover"/>
        <div className="p-6 flex flex-col flex-grow">
            <h3 className="text-2xl font-bold text-amber-400 mb-3">{title}</h3>
            <div className="text-gray-300 space-y-2 flex-grow">{children}</div>
            {linkUrl && (
                <div className="mt-4">
                    <a 
                        href={linkUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-amber-500 text-gray-900 font-bold py-2 px-4 rounded-md hover:bg-amber-400 transition-colors"
                    >
                        Learn More &rarr;
                    </a>
                </div>
            )}
        </div>
    </motion.div>
);

const CollegeInfoPage: React.FC = () => {
  return (
    <div>
        <div className="relative py-24 text-center overflow-hidden">
            <div 
                className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
                style={{ backgroundImage: `url(https://i.postimg.cc/BnPzxjvn/Clginfo.jpg)` }}
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
                    About IIT Ropar
                </motion.h1>
                <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="mt-4 text-lg text-gray-200 max-w-2xl mx-auto"
                >
                    Discover our campus, our culture, and what makes life here special.
                </motion.p>
            </div>
        </div>

        <SectionWrapper idName="college-info">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <InfoCard 
                    title="Institute Location" 
                    imageUrl="https://i.postimg.cc/rmjZ8WfQ/Whats-App-Image-2025-06-30-at-20-46-19-b7c79bb2.jpg"
                    linkUrl="https://earth.google.com/web/@30.96688819,76.47214869,288.91025875a,1207.90782205d,60y,169.82445604h,0t,0r/data=CgRCAggBOgMKATBCAggASg0I____________ARAA"
                >
                    <p>IIT Ropar is nestled on the banks of the Sutlej River in Rupnagar, Punjab. The permanent campus is spread over 500 acres, offering a serene and picturesque environment that is perfect for learning and research. Its location provides a peaceful escape while being well-connected to major cities like Chandigarh.</p>
                </InfoCard>

                <InfoCard 
                    title="Campus Facilities" 
                    imageUrl="https://i.postimg.cc/T3n9dgwg/cfac.webp"
                    linkUrl="https://www.iitrpr.ac.in/facilities"
                >
                    <p>Our state-of-the-art campus is equipped with modern academic buildings, advanced laboratories, a well-stocked library, and sports facilities including a cricket ground, football field, and tennis courts. High-speed Wi-Fi is available throughout the campus, ensuring seamless connectivity for all students.</p>
                </InfoCard>

                <InfoCard 
                    title="Hostel & Food" 
                    imageUrl="https://picsum.photos/seed/hostel/600/400"
                    linkUrl="https://www.iitrpr.ac.in/student-council/boha.php"
                >
                    <p>Life at IIT Ropar is comfortable with well-maintained hostels for all students. Each hostel has its own mess providing a variety of nutritious and tasty food options, catering to different dietary preferences. The messes ensure a mix of North and South Indian cuisines, making everyone feel at home.</p>
                </InfoCard>

                <InfoCard 
                    title="Culture & Life at IIT Ropar" 
                    imageUrl="https://i.postimg.cc/8P6d4ML9/audi.webp"
                    linkUrl="https://www.iitrpr.ac.in/students"
                >
                    <p>The campus culture is a vibrant blend of diverse backgrounds. With numerous clubs and societies, there's always something happening. Zeitgeist, our annual cultural fest, and Advitiya, our technical fest, are major highlights, attracting participants from all over the country.</p>
                </InfoCard>
                
                <InfoCard title="Telugu Culture on Campus" imageUrl="https://picsum.photos/seed/teluguculture/600/400">
                    <p>The Telugu community is an integral and vibrant part of IIT Ropar's cultural fabric. Through the Telugu Cultural Association (TCA), we celebrate our festivals like Sankranti, Ugadi, and Bathukamma with great fervor. These events bring a piece of our home to the campus, creating a strong bond among students and celebrating our rich heritage together.</p>
                </InfoCard>

                 <InfoCard 
                    title="Academic Excellence" 
                    imageUrl="https://picsum.photos/seed/academics/600/400"
                    linkUrl="https://www.iitrpr.ac.in/iitrpr-academics"
                 >
                    <p>IIT Ropar is committed to excellence in education and research. With a distinguished faculty and a rigorous curriculum, the institute is at the forefront of technological innovation. Students are encouraged to engage in research projects and participate in international collaborations.</p>
                </InfoCard>
            </div>
        </SectionWrapper>
    </div>
  );
};

export default CollegeInfoPage;