// src/components/BookPdfModal.tsx
import React, { useEffect } from "react";
import "./BookPdfModal.css";

interface BookPdfModalProps {
  isOpen: boolean;
  onClose: () => void;
  pdfUrl: string;
  title?: string;
}

const BookPdfModal: React.FC<BookPdfModalProps> = ({ isOpen, onClose, pdfUrl, title }) => {
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    if (isOpen) document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="pdf-modal-overlay" onClick={onClose}>
      <div className="pdf-modal" onClick={(e) => e.stopPropagation()}>
        <div className="pdf-modal-header">
          <div className="pdf-title">{title || "Book"}</div>
          <div className="pdf-controls">
            <button onClick={() => window.open(pdfUrl, "_blank")}>Open in new tab</button>
            <a href={pdfUrl} download className="download-btn">Download</a>
            <button className="close-btn" onClick={onClose}>✕</button>
          </div>
        </div>

        <div className="pdf-body">
          <div className="iframe-wrapper">
            {/* Browser-native PDF viewer — reliable and simple */}
           <embed
              src={pdfUrl}
               type="application/pdf"
               width="100%"
               height="100%"
              style={{ border: "none" }}
/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookPdfModal;
