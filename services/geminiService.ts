
import { GoogleGenAI } from "@google/genai";

/**
 * Generates a fun fact about Telugu culture using the Gemini API.
 * @returns A promise that resolves to a string containing the fun fact.
 * @throws An error if the API call fails or the API key is missing.
 */
export const generateFunFact = async (): Promise<string> => {
    // API key access and client initialization are moved inside the function.
    // This prevents a crash on module load in browser environments where `process.env`
    // is not available at the top level, which was causing the module to not export anything.
    const apiKey = process.env.API_KEY;

    if (!apiKey) {
        throw new Error("API key for Gemini is not configured.");
    }

    const ai = new GoogleGenAI({ apiKey });
    
    try {
        const response = await ai.models.generateContent({
            model: 'gemini-2.5-flash',
            contents: 'Tell me a short, interesting, and fun fact about Telugu culture, history, language, or cinema. Make it concise (1-2 sentences) and suitable for a website. Avoid generic facts.'
        });
        
        const text = response.text;
        
        if (!text) {
            throw new Error("Received an empty response from the API.");
        }
        
        return text.trim();
        
    } catch (error) {
        console.error("Error fetching fun fact from Gemini API:", error);
        throw new Error("Failed to communicate with the Gemini API. Please check your connection or API key.");
    }
};
