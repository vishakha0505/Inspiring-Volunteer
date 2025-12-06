import { GoogleGenAI } from "@google/genai";
import { BOOK_CONTENT } from "../data/bookContent";
import { DiagramType } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const SYSTEM_INSTRUCTION = `
You are the 'Inspired Volunteer ChatBot'. You assist users in understanding the basics of volunteering based STRICTLY on the book 'Responsible and Inspired Volunteer' by Narayana.

**Rules:**
1.  **Strict Source:** Answer ONLY using the content provided below. Do not use outside knowledge. If the answer is not in the content, say "I can only answer based on the book 'Responsible and Inspired Volunteer'."
2.  **Tone:** Formal, inspiring, humble, and strictly maintaining the author's voice (Narayana). **Do NOT use salutations like "Dear Bharat".**
3.  **Length & Depth:** Responses MUST be comprehensive, approximately **300-400 words** in length. Elaborate on the concepts deeply using the book's content.
4.  **Content:** Always include specific examples from the text to support your explanation.
5.  **Formatting:** Use clear, well-structured paragraphs.
6.  **Emoji:** ALWAYS include the emoji 🌸 at the end of every response.
7.  **Diagrams:** 
    *   If the user asks about or the context requires explaining the "Four Way Reality" or "Pentagon of Effectiveness", **represent these diagrams clearly using text-based formats**. 
    *   Use arrows (->), bullet points, or simple ASCII-style flowcharts to accurately represent the relationships and positions described in the book (e.g., "Self is at the center", "Actions flow right").
    *   **Do not** ask for external visual rendering or use special tags. Embed the diagram representation directly in your text response.

**Book Content:**
${BOOK_CONTENT}
`;

export const sendMessageToGemini = async (message: string, history: { role: string; parts: { text: string }[] }[]) => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: [
        ...history,
        { role: "user", parts: [{ text: message }] }
      ],
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.3,
      },
    });

    let text = response.text || "I apologize, I could not generate a response from the book content.";
    
    // We are no longer using the separate diagram property as the model will include it in the text.
    return { text, diagram: DiagramType.NONE };
  } catch (error) {
    console.error("Gemini API Error:", error);
    return { text: "I'm having trouble connecting to the volunteer spirit right now. Please try again. 🌸", diagram: DiagramType.NONE };
  }
};