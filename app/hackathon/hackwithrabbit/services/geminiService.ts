import { GoogleGenAI, Type } from "@google/genai";
import { GeneratedIdea } from "../types";

const apiKey = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

export const generateHackathonIdeas = async (
  track: string, 
  interests: string
): Promise<GeneratedIdea[]> => {
  if (!apiKey) {
    console.error("API Key is missing");
    // Return mock data fallback if API key is missing to prevent app crash in preview without keys
    return [
      {
        title: "EcoTrack AI",
        description: "An app that uses computer vision to classify recyclable waste and rewards users with crypto tokens.",
        technologies: ["TensorFlow", "React Native", "Solidity"],
        difficulty: "Intermediate",
        impact: "Reduces landfill waste by gamifying recycling."
      }
    ];
  }

  const prompt = `Generate 3 innovative hackathon project ideas for the "${track}" track. The user is interested in: "${interests}". 
  The ideas should be feasible for a 48-hour hackathon but impressive.`;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
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