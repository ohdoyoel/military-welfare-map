// import { google, generateText } from '@ai-sdk/google';

// const sgtGpt = google('models/gemini-pro', { 
// });

// const { text } = await generateText({
//   model: sgtGpt,
//   prompt: 'Write a vegetarian lasagna recipe for 4 people.',
// });

// export const gptReply =  (input) => {
//   console.log(text)
// }

const {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} = require("@google/generative-ai");

const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-pro",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 64,
  maxOutputTokens: 8192,
  responseMimeType: "text/plain",
};

const chatSession = model.startChat({
  generationConfig,
// safetySettings: Adjust safety settings
// See https://ai.google.dev/gemini-api/docs/safety-settings
  history: [
  ],
});

export async function gptReply(input) {
  const result = await chatSession.sendMessage(input);
  return result.response.text();
}