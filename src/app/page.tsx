"use client";
import { useState } from "react";
import { UploadCloud, CheckCircle } from "lucide-react";

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
  const [file, setFile] = useState<File | null>(null);
  const [summary, setSummary] = useState<string>("");

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const uploadedFile = event.target.files?.[0];
    if (uploadedFile) {
      setFile(uploadedFile);
      // Simulated summary generation
      setSummary("This is a brief summary extracted from your resume.");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center ">
      <h1 className="text-4xl font-bold mb-6 text-pink-400">
        Your Resume, Refined. Your Career, Defined.
      </h1>
      <Card className="w-full max-w-lg neomorphic">
        <CardContent className="flex flex-col items-center">
          <label
            htmlFor="file-upload"
            className="flex flex-col items-center justify-center w-full h-48 border-2 border-gray-600 border-dashed rounded-lg cursor-pointer hover:border-pink-400 transition-all p-4 bg-gray-900 neomorphic"
          >
            {file ? (
              <CheckCircle className="text-green-400 w-12 h-12 mb-2" />
            ) : (
              <UploadCloud className="text-pink-400 w-12 h-12 mb-2" />
            )}
            <span className="text-sm text-gray-400">
              {file ? file.name : "Click to upload your resume"}
            </span>
          </label>
          <input
            id="file-upload"
            type="file"
            className="hidden"
            onChange={handleFileUpload}
          />

          {summary && (
            <div className="mt-4 p-4 w-full text-center bg-gray-700 rounded-lg text-white shadow-md">
              <p className="text-sm">{summary}</p>
            </div>
          )}

          <Button
            className="mt-4 bg-pink-500 hover:bg-pink-600 text-white"
            onClick={() => alert("Feedback Coming Soon!")}
          >
            Get Feedback
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
