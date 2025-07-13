
import React, { useState, useCallback } from 'react';
import { generateFunFact } from '../services/geminiService';
import { motion, AnimatePresence } from 'framer-motion';

const GeminiFunFact: React.FC = () => {
    const [fact, setFact] = useState<string>('');
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    const handleFetchFact = useCallback(async () => {
        setIsLoading(true);
        setError(null);
        setFact('');
        try {
            const newFact = await generateFunFact();
            setFact(newFact);
        } catch (err) {
            setError('Failed to fetch a fun fact. Please try again later.');
            console.error(err);
        } finally {
            setIsLoading(false);
        }
    }, []);

    return (
        <div className="bg-gray-800/50 p-6 rounded-2xl shadow-lg border border-amber-500/20 text-center max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-amber-400 mb-2">Discover Telugu Culture</h3>
            <p className="text-gray-400 mb-6">Click the button below to get an interesting fact powered by AI!</p>

            <button
                onClick={handleFetchFact}
                disabled={isLoading}
                className="bg-amber-500 text-gray-900 font-bold py-3 px-8 rounded-full transition-all transform hover:scale-105 hover:bg-amber-400 disabled:bg-gray-600 disabled:cursor-not-allowed disabled:scale-100 flex items-center justify-center mx-auto"
            >
                {isLoading ? (
                    <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Thinking...
                    </>
                ) : (
                    'Tell Me a Fun Fact!'
                )}
            </button>
            <div className="mt-6 min-h-[6rem] flex items-center justify-center">
                <AnimatePresence mode="wait">
                    {error && (
                        <motion.p
                            key="error"
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 10 }}
                            className="text-red-400"
                        >
                            {error}
                        </motion.p>
                    )}
                    {fact && (
                        <motion.blockquote
                            key="fact"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            className="text-lg text-amber-200 italic border-l-4 border-amber-400 pl-4"
                        >
                            {fact}
                        </motion.blockquote>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
};

export default GeminiFunFact;
