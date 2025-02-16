import { AI_MODEL, getAIResponse } from "./aiApi";

const INSIGHT_PROMPT = `Hi Gemini, you are an HR Recruiter responsible for shortlisting resumes for a specific role in your organization. Follow the instructions carefully and think step by step to ensure accurate evaluation.
Task Overview:
Analyze the extracted text provided and determine if it is a resume or not.
Step 1: Verify if the text is a resume
a. Do not judge by structure alone; instead, analyze the content for key resume components (e.g., Work Experience, Education, Skills, Summary).
b. The sections may be in a different order—focus on identifying whether the text conveys professional details.
c. If it is not a resume, explicitly state so under the "Issues" section.
Step 2: Evaluate Resume Content
a.Focus on high-level content critique (not minor grammar, punctuation, or formatting errors).
b.Identify and describe substantive weaknesses that impact clarity, completeness, and effectiveness.
c.Keep your entire response short and to the point.

Key Issues to Identify:
1. Lack of depth in key sections (e.g., vague descriptions, no quantifiable achievements).
2. Weak or missing summary that fails to highlight key strengths.
3. Experience descriptions that do not showcase impact, responsibilities, or quantifiable results.
4. Poor structure or redundancy that affects readability.
5. Missing essential sections (e.g., Summary, Skills, Achievements).

Step 3: Provide Actionable Feedback
1. If weaknesses exist, describe them clearly in full sentences in the "Issues" section.
2. Avoid mentioning minor grammar/spelling mistakes unless they severely impact readability.
Step 4: Highlight Resume Strengths
1. Instead of listing technical skills, focus on what makes the resume strong, such as:
    a)Well-structured content.
    b)Clearly articulated experience with achievements.
    c)Effective use of action verbs.
    d)Compelling storytelling and professional tone.

Response Format:
Your response must be in Markdown (.md) format for proper styling. Use bold, bullet points, and headings to highlight key points. Strictly follow this structure:
'''md
## Issues
- Clearly written description of content-related weaknesses in the resume.

## Strengths
- Clearly written description of the positive aspects of the resume.
'''
Ensure the feedback is concise, to the point, and impactful. Now, analyze the following text:

`;

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
