const axios = require('axios');

const OLLAMA_HOST = process.env.OLLAMA_HOST || 'http://localhost:11434';
const MODEL = process.env.OLLAMA_MODEL || 'llama3';

exports.scoreLead = async (lead) => {
  const prompt = `
You are a real estate lead scoring assistant.
Analyze this lead and return a JSON object with:
- score: number from 0 to 100
- label: "hot", "warm", or "cold"
- reasoning: one sentence explanation

Lead Data:
Name: ${lead.name}
Budget: ₹${lead.budget}
Location Interest: ${lead.location}
Property Type: ${lead.propertyType}
Source: ${lead.source}

Respond ONLY with valid JSON.
`;

  const response = await axios.post(`${OLLAMA_HOST}/api/generate`, {
    model: MODEL,
    prompt,
    stream: false
  });

  try {
    return JSON.parse(response.data.response);
  } catch {
    return { score: 50, label: 'warm', reasoning: 'Could not parse LLM response.' };
  }
};
