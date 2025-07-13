import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import GreetingIcon from './GreetingIcon';

const WelcomeOverlay: React.FC = () => {
    const [isVisible, setIsVisible] = React.useState(false);

    React.useEffect(() => {
        const hasVisited = sessionStorage.getItem('tca-visited');
        if (!hasVisited) {
            setIsVisible(true);
            sessionStorage.setItem('tca-visited', 'true');

            const timer = setTimeout(() => {
                setIsVisible(false);
            }, 1500); // Overlay stays for 3.5 seconds

            return () => clearTimeout(timer);
        }
    }, []);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.7 }}
                    className="fixed inset-0 bg-gray-900/90 flex flex-col items-center justify-center z-[9999]"
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <GreetingIcon className="w-48 h-48 md:w-64 md:h-64 object-contain" />
                    </motion.div>
                    
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.8 }}
                        className="text-center mt-6"
                    >
                        <p className="text-4xl md:text-5xl font-semibold text-amber-400">Namaskaram</p>
                        <p className="text-3xl md:text-4xl font-semibold text-amber-400 mt-2">"నమస్కారం"</p>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default WelcomeOverlay;
