"use client";
import { useState } from "react";
import { UploadCloud, CheckCircle } from "lucide-react";
import {
  LANDING_BODY,
  LANDING_HEADER,
  LANDING_HEADER_SECOND,
} from "@/utils/frontend/allHeading";
import api from "@/utils/frontend/api";
import { DefaultDataResponse, ResponseType } from "@/utils/responseType";
import { HttpStatusCode } from "axios";
import InsightModal from "@/components/InsightModal";

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

const Card: React.FC<CardProps> = ({ children, className }) => (
  <div
    className={`p-6 bg-gray-800 shadow-lg rounded-2xl border border-gray-700 ${className}`}
  >
    {children}
  </div>
);

const CardContent: React.FC<CardProps> = ({ children, className }) => (
  <div className={className}>{children}</div>
);

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ children, className, onClick }) => (
  <button
    onClick={onClick}
    className={`px-6 py-2 rounded-lg shadow-lg ${className}`}
  >
    {children}
  </button>
);

export default function LandingPage() {
  // const [file, setFile] = useState<File | null>(null);
  const [insight, setInsight] = useState<string>("kk");

  const handleFileUpload = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const uploadedFile = event.target.files?.[0];
    if (uploadedFile) {
      const formData = new FormData();
      formData.append("resume", uploadedFile);
      const res = await api
        .post<ResponseType<DefaultDataResponse>>("/upload", formData, {
          headers: { "Content-Type": "multipart/form-data" },
        })
        .catch((e) => console.error(e));
      if (res && res?.status === HttpStatusCode.Ok) {
        const responseData = res?.data;
        const message = responseData?.message ?? "File Uploaded Sussfully";
        console.log(message);
        setInsight(message);
      }
    }
  };

  return (
    <div className="relative" id="home">
      <div
        aria-hidden="true"
        className="absolute inset-0 grid grid-cols-2 -space-x-52 opacity-40 dark:opacity-20"
      >
        <div className="blur-[106px] h-56 bg-gradient-to-br from-primary to-purple-100 dark:from-blue-700"></div>
        <div className="blur-[106px] h-32 bg-gradient-to-r from-cyan-400 to-sky-100 dark:to-indigo-600"></div>
      </div>
      <div className="relative pt-36 ml-auto">
        <div className="lg:w-2/3 text-center mx-auto">
          <h1 className="text-gray-900 text-balance dark:text-white font-bold text-5xl md:text-6xl xl:text-7xl">
            {LANDING_HEADER}{" "}
            <span className="text-primary dark:text-white">
              {LANDING_HEADER_SECOND}.
            </span>
          </h1>
          {insight !== "" && <InsightModal message={insight} />}
          <p className="mt-8 text-gray-700 dark:text-gray-300">
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
                onChange={handleFileUpload}
              />
              <span className="relative text-base font-semibold text-white">
                Upload Resume
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
