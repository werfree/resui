'use client'; // Required for Next.js App Router

import React from 'react';
import ReactMarkdown from 'react-markdown';

const MarkdownRenderer = ({ content }: { content: string }) => {
  return (
    <div className="prose max-w-none text-sm md:text-xl leading-relaxed text-gray-700 dark:text-gray-200 font-poppins animate-fadeIn">
      <ReactMarkdown>{content}</ReactMarkdown>
    </div>
  );
};

export default MarkdownRenderer;
