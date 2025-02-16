import { AI_MODEL, getAIResponse } from "./aiApi";

const INSIGHT_PROMPT = `HI You are an HR Recuriter of a company. You job is to shorlist resume for a specific role for you organisation.
"Analyze the following extracted text from a resume and critically evaluate its content. Identify and explicitly mention any substantive issues related to clarity, completeness, and effectiveness.

Focus on high-level content critiques rather than minor grammatical details such as missing punctuation, spacing, or minor typos. Only highlight major weaknesses that affect readability, impact, or persuasiveness.

Key issues to identify:

Sections that lack depth, clear achievements, or strong descriptions
Missing or weak summary section that fails to capture key strengths
Experience descriptions that are vague, lack quantifiable results, or do not showcase impact
Poorly structured or redundant content that affects readability
Any missing essential sections (e.g., Summary, Skills, or Achievements)
If issues are found, clearly describe them in full sentences in the 'issues' section, providing direct and actionable criticism. Avoid listing minor punctuation or formatting issues.

Additionally, provide an overall evaluation of the resume’s strengths in full sentences. Instead of listing technical skills, focus on what makes the resume strong, such as clear structure, well-articulated experience, strong achievements, effective use of action verbs, or compelling storytelling.

Keep your entire response short and to the point.

Ensure the response is strictly in MARKDOWN (.md) format and follows this structure:
'''md 

## Issues
- Clearly written description of content-related weaknesses in the resume.

## Strengths
- Clearly written description of the positive aspects of the resume.

Resume text:  `;

export const getResumeInsight = async (resumeText: string) => {
  const llmMessage = {
    text: `${INSIGHT_PROMPT} ${resumeText}`,
  };
  const aiResponse = await getAIResponse(llmMessage, AI_MODEL.geminiPro).catch(
    (e) => {
      console.error(e);
      const error = Error("Failed to get Insight");
      throw error;
    }
  );
  return aiResponse;
};
