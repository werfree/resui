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
        <div className="modal-box scrollbar-hide">
          {heading && <h3 className="font-bold text-lg">{heading}</h3>}
          <p className="py-4 text-left">
            {isMarkdown ? <MarkdownRenderer content={message} /> : `${message}`}
          </p>
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
