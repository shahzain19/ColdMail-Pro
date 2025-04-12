import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY!);

type MessageType = 'cold_email' | 'copy_paste_message';

interface GenerateMessagesOptions {
  type: MessageType;
  niche: string;
  service: string;
  tone: string;
}

// Set the rate limit values
const RATE_LIMIT = 5; // Max requests per hour
const RATE_LIMIT_INTERVAL = 60 * 60 * 1000; // 1 hour in milliseconds

const generatePrompt = ({ type, niche, service, tone }: GenerateMessagesOptions): string => {
  if (type === 'cold_email') {
    return `
You are a top-tier cold email copywriter.

Write 6 concise, personalized, and high-converting cold emails for a freelancer offering "${service}" services to the "${niche}" niche. Use a "${tone}" tone.

Follow these strict guidelines:
- Number the emails from 1 to 6
- Keep each email under 150 words
- Begin with a warm, natural greeting
- Use line breaks between paragraphs for clarity
- End with a strong, actionable call-to-action (CTA)
- Avoid fluff — every sentence should add value or drive response

Output only the emails. Do not include explanations, intros, or formatting outside the emails.
`;
  } else {
    return `
You are a high-converting direct message copywriter.

Write 5 short, impactful outreach messages for a freelancer offering "${service}" services to the "${niche}" niche. Maintain a "${tone}" tone throughout.

Follow these precise instructions:
- Number the messages from 1 to 5
- Limit each message to a maximum of 100 words
- Start with a friendly, humanized greeting
- End with a compelling and clear CTA
- Keep the message focused, relevant, and easy to read

Return only the messages. No extra commentary or formatting.
`;
  }
};

// Function to check if the rate limit is exceeded
const isRateLimited = () => {
  const lastRequestTimestamp = localStorage.getItem("lastRequestTimestamp");
  const requestCount = parseInt(localStorage.getItem("requestCount") || "0", 10);

  const currentTime = Date.now();
  if (lastRequestTimestamp && currentTime - parseInt(lastRequestTimestamp, 10) < RATE_LIMIT_INTERVAL) {
    if (requestCount >= RATE_LIMIT) {
      return true; // Rate limit exceeded
    }
  } else {
    // Reset the counter if it's a new hour
    localStorage.setItem("lastRequestTimestamp", currentTime.toString());
    localStorage.setItem("requestCount", "0");
  }
  return false;
};

// Function to increment request count
const incrementRequestCount = () => {
  const currentCount = parseInt(localStorage.getItem("requestCount") || "0", 10);
  localStorage.setItem("requestCount", (currentCount + 1).toString());
};

export const generateMessages = async ({
  type,
  niche,
  service,
  tone,
}: GenerateMessagesOptions): Promise<string> => {
  // Check if rate limit is exceeded
  if (isRateLimited()) {
    return "⚠️ Rate limit exceeded. Please try again later.";
  }

  const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });
  const prompt = generatePrompt({ type, niche, service, tone });

  try {
    const result = await model.generateContent(prompt);
    const response = await result.response;

    // Increment the request count after successful request
    incrementRequestCount();

    return response.text();
  } catch (error) {
    console.error("Message generation failed:", error);
    return "⚠️ Failed to generate messages. Please try again.";
  }
};
