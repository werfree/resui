"use";
import React, { useEffect } from "react";
import MarkdownRenderer from "./Markdown";

function InsightModal({
  message,
  heading,
  isMarkdown = false,
}: {
  message: string;
  heading?: string;
  isMarkdown?: boolean;
}) {
  useEffect(() => {
    const modal = document.getElementById("my_modal_1") as HTMLDialogElement;
    if (message && modal) {
      console.log("Show Model");
      modal.showModal(); // Show modal when a message is received
    }
  }, [message]);
  return (
    <div>
      <dialog id="my_modal_1" className="modal">
        <div className="  modal-box focus:outline-none focus:ring-0 scrollbar-hide shadow-xl dark:shadow-md dark:shadow-purple-400 dark:bg-gray-900 rounded-badge">
          <div className="blur-[106px] h-5 bg-gradient-to-br from-primary to-purple-400 dark:from-blue-400"></div>
          <div className="blur-[106px] h-5 bg-gradient-to-r from-cyan-400 to-sky-300 dark:to-indigo-300"></div>
          {heading && (
            <h3 className="font-bold text-2xl animate-tilt">{heading}</h3>
          )}
          <div className="py-4 text-left">
            {isMarkdown ? <MarkdownRenderer content={message} /> : `${message}`}
          </div>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
}

export default InsightModal;
