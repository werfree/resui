'use client';
import { useState } from 'react';
import {
  GET_INSIGHT_LOADING_MESSAGE,
  LANDING_BODY,
  LANDING_HEADER,
  LANDING_HEADER_SECOND,
  PROCESSING,
} from '@/utils/frontend/allHeading';
import api from '@/utils/frontend/api';
import { DefaultDataResponse, ResponseType } from '@/utils/responseType';
import { HttpStatusCode } from 'axios';
import InsightModal from '@/components/InsightModal';
import LoadingDot from '@/components/LoadingDot';
import Alert from '@/components/Alert';

// interface CardProps {
//   children: React.ReactNode;
//   className?: string;
// }

// const Card: React.FC<CardProps> = ({ children, className }) => (
//   <div
//     className={`p-6 bg-gray-800 shadow-lg rounded-2xl border border-gray-700 ${className}`}
//   >
//     {children}
//   </div>
// );

// const CardContent: React.FC<CardProps> = ({ children, className }) => (
//   <div className={className}>{children}</div>
// );

// interface ButtonProps {
//   children: React.ReactNode;
//   className?: string;
//   onClick?: () => void;
// }
// const iMEssage = `## Issues

// * The resume lacks a summary section to provide a concise overview of the candidate's key strengths and qualifications.
// * Work experience descriptions are vague and lack quantifiable results or specific examples of the candidate's contributions. For example, the role of "Design and build a backend for hospital management software" does not provide any tangible results or impact.
// * The skills section is just a list of technologies without any context or level of proficiency.

// ## Strengths

// * The resume is well-structured and easy to follow.
// * It includes relevant education and work experience sections.
// * The candidate has received several awards and recognitions, highlighting their potential and accomplishments.`;
// const Button: React.FC<ButtonProps> = ({ children, className, onClick }) => (
//   <button
//     onClick={onClick}
//     className={`px-6 py-2 rounded-lg shadow-lg ${className}`}
//   >
//     {children}
//   </button>
// );

export default function LandingPage() {
  // const [file, setFile] = useState<File | null>(null);
  // const [insight, setInsight] = useState<string>(`${iMEssage.slice(1, -1)}`);
  const [loadingMessage, setLoadingMessage] = useState<string>('');
  const [insight, setInsight] = useState<string>('');

  const handleFileUpload = async (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const uploadedFile = event.target.files?.[0];
    console.log(uploadedFile);
    if (uploadedFile) {
      setLoadingMessage(GET_INSIGHT_LOADING_MESSAGE);
      const formData = new FormData();
      formData.append('resume', uploadedFile);
      const res = await api
        .post<ResponseType<DefaultDataResponse>>('/resume', formData, {
          headers: { 'Content-Type': 'multipart/form-data' },
        })
        .catch((e) => console.error(e))
        .finally(() => setLoadingMessage(''));
      if (res && res?.status === HttpStatusCode.Ok) {
        const responseData = res?.data;
        const message = responseData?.message ?? 'File Uploaded Sussfully';
        console.log(message);
        setInsight(message);
      }
    }
  };

  return (
    <div className="relative" id="home">
      {loadingMessage.length ? (
        <Alert message={loadingMessage} title={PROCESSING} color="blue" />
      ) : (
        <></>
      )}
      <div className="relative pt-36 ml-auto">
        <div className="lg:w-2/3 text-center mx-auto">
          <h1 className="text-gray-900 text-balance dark:text-white font-bold text-4xl md:text-6xl xl:text-7xl">
            {LANDING_HEADER}{' '}
            <span className="text-primary dark:text-purple-400">
              {LANDING_HEADER_SECOND}
            </span>
          </h1>
          {insight !== '' && (
            <InsightModal
              message={insight}
              heading="Resume Insight"
              isMarkdown
            />
          )}
          <p className="mt-8 font-semibold text-gray-700 dark:text-gray-300">
            {LANDING_BODY}
          </p>
          <div className="mt-16 flex flex-wrap justify-center gap-y-4 gap-x-6">
            <label
              htmlFor="resume-upload"
              className="relative flex h-11 w-full items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full before:bg-primary before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max"
            >
              <input
                accept="application/pdf, application/msword, application/vnd.openxmlformats-officedocument.wordprocessingml.document, image/png, image/jpeg, image/jpg"
                id="resume-upload"
                type="file"
                className="hidden"
                disabled={loadingMessage.length > 0}
                onChange={handleFileUpload}
              />
              <span className="relative text-base font-semibold text-white">
                {loadingMessage.length ? <LoadingDot /> : 'Upload Resume'}
              </span>
            </label>
            <a
              href="#"
              className="relative flex h-11 w-full items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full before:border before:border-transparent before:bg-primary/10 before:bg-gradient-to-b before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 dark:before:border-gray-700 dark:before:bg-gray-800 sm:w-max"
            >
              <span className="relative text-base font-semibold text-primary dark:text-white">
                Sign In
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
