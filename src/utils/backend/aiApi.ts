import axios from 'axios';
import { GEMINI_API_KEY } from '../getEnvVariable';

export enum AI_MODEL {
  geminiPro = 'https://generativelanguage.googleapis.com/v1/models/gemini-pro:generateContent',
}
type AI_INPUT = {
  text: string;
};

export const getAIResponse = async (message: AI_INPUT, model: AI_MODEL) => {
  switch (model) {
    case AI_MODEL.geminiPro:
      const geminiURL = `${model}?key=${GEMINI_API_KEY}`;
      console.log(geminiURL);
      const response = await axios.post(geminiURL, {
        contents: [
          {
            parts: [message],
          },
        ],
      });
      console.log(response);
      const summary: string =
        response.data?.candidates?.[0]?.content?.parts?.[0]?.text ?? '';
      return summary;

    default:
      throw Error('Model Not Supported');
  }
};
