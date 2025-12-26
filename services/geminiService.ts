
import { GoogleGenAI } from "@google/genai";

export class GeminiService {
  private ai: GoogleGenAI;

  constructor() {
    this.ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
  }

  async getMathExplanation(question: string, userAnswer: string, correctAnswer: string, difficulty?: string) {
    try {
      const response = await this.ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: `I am a student in elementary school. I am working on a ${difficulty || ''} math problem. 
        Question: "${question}"
        My answer was: "${userAnswer}"
        The correct answer is: "${correctAnswer}"
        
        Please explain why the correct answer is right. Use simple, step-by-step logic that a 10-year-old would understand. 
        Be very encouraging! If my answer was wrong, help me see how I might have been thinking so I can learn from it.`,
        config: {
          systemInstruction: "You are a warm, patient, and brilliant elementary school math tutor from the Cupertino Unified School District. You believe every student can be a math genius. Your explanations are visual, relatable, and use kid-friendly analogies.",
        }
      });
      return response.text;
    } catch (error) {
      console.error("Gemini Error:", error);
      return "Oops! My math circuits got a bit tangled. But don't give up! You're doing great!";
    }
  }

  async searchCurriculumUpdates() {
    try {
      const response = await this.ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: "Find the official math scope and sequence links for 4th and 5th grade for Cupertino Unified School District (CUSD) 2024-2025.",
        config: {
          tools: [{ googleSearch: {} }],
        }
      });
      
      const text = response.text;
      const links = response.candidates?.[0]?.groundingMetadata?.groundingChunks?.map((chunk: any) => ({
        title: chunk.web?.title,
        uri: chunk.web?.uri
      })) || [];

      return { text, links };
    } catch (error) {
      console.error("Search Error:", error);
      return { text: "Could not fetch updates.", links: [] };
    }
  }
}

export const gemini = new GeminiService();
