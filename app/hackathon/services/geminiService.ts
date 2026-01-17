import { GoogleGenAI, Type } from "@google/genai";
import { GeneratedIdea } from "../types";

// Access the API key from environment variables (NEXT_PUBLIC_ for client-side)
const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY || process.env.GEMINI_API_KEY || '';

// Initialize the API only if the key exists to avoid immediate errors
const ai = apiKey ? new GoogleGenAI({ apiKey }) : null;

export const generateHackathonIdeas = async (
  track: string,
  interests: string
): Promise<GeneratedIdea[]> => {
  if (!ai) {
    console.warn("Gemini API Key is missing. Returning mock data.");
    // Return mock data fallback if API key is missing
    return [
      {
        title: "EcoTrack AI",
        description: "An app that uses computer vision to classify recyclable waste and rewards users with crypto tokens.",
        technologies: ["TensorFlow", "React Native", "Solidity"],
        difficulty: "Intermediate",
        impact: "Reduces landfill waste by gamifying recycling."
      },
      {
        title: "Smart Budget Assistant",
        description: "AI-powered personal finance tracker that predicts expenses and suggests savings strategies.",
        technologies: ["Next.js", "Python", "Plaid API"],
        difficulty: "Beginner",
        impact: "Helps users achieve financial stability."
      },
      {
        title: "Decentralized Voting",
        description: "Secure, transparent voting system using blockchain technology for student organizations.",
        technologies: ["Ethereum", "Solidity", "React"],
        difficulty: "Advanced",
        impact: "Ensures fair and verifiable elections."
      }
    ];
  }

  const prompt = `Generate 3 innovative hackathon project ideas for the "${track}" track. The user is interested in: "${interests}". 
  The ideas should be feasible for a 48-hour hackathon but impressive.`;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.0-flash-exp", // Updated to a more standard available model if possible, or keep as provided
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.ARRAY,
          items: {
            type: Type.OBJECT,
            properties: {
              title: { type: Type.STRING },
              description: { type: Type.STRING },
              technologies: {
                type: Type.ARRAY,
                items: { type: Type.STRING }
              },
              difficulty: { type: Type.STRING, enum: ["Beginner", "Intermediate", "Advanced"] },
              impact: { type: Type.STRING }
            },
            required: ["title", "description", "technologies", "difficulty", "impact"]
          }
        }
      }
    });

    const text = response.text;
    if (!text) return [];

    return JSON.parse(text) as GeneratedIdea[];
  } catch (error) {
    console.error("Error generating ideas:", error);
    return [];
  }
};