"use client"; // Required for Next.js App Router

import React from "react";
import ReactMarkdown from "react-markdown";

const MarkdownRenderer = ({ content }: { content: string }) => {
  return (
    <div className="prose max-w-none">
      <ReactMarkdown>{content}</ReactMarkdown>
    </div>
  );
};

export default MarkdownRenderer;
