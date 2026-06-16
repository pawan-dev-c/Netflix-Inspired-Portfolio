// src/pages/Certifications.tsx
import React from "react";
import "./Certifications.css";

type Cert = {
  title: string;
  issuer?: string;
  date?: string;
  file?: string; // path under /public (e.g. /certifications/my-cert.pdf)
  thumbnail?: string; // optional thumbnail under /public/images/certificates/
  description?: string;
};

const certifications: Cert[] = [
  {
    title: "Microsoft — Excel (Course Completion)",
    issuer: "Microsoft",
    date: "2024-08-12",
    // If your file name has spaces, encodeURI is used when rendering the href.
    file: "/certifications/Microsoft Certificate.pdf",
    thumbnail: "/images/certificates/microsoft-thumb.jpeg",
  },
  {
    title: "Oracle — Course Completion",
    issuer: "Oracle",
    date: "2024-07-10",
    file: "/certifications/Oracle-Certificate.pdf",
    thumbnail: "/images/certificates/oracle-thumb.jpeg",
  },

  // empty placeholders (you said you'll add 3 more later) — these show "Coming soon"
  { title: "Coming soon", description: "New certificate will appear here", date: "" },
  { title: "Coming soon", description: "New certificate will appear here", date: "" },
  { title: "Coming soon", description: "New certificate will appear here", date: "" },
];

const Certifications: React.FC = () => {
  return (
    <div className="certifications-container">
      <h1 className="certifications-title">🏆 Certifications</h1>

      <div className="certifications-grid">
        {certifications.map((cert, idx) => {
          const hasFile = !!cert.file && cert.file.trim() !== "";

          // Use encodeURI when creating the href (safe even if name has spaces)
          const fileHref = hasFile ? encodeURI(cert.file as string) : "#";

          return hasFile ? (
            <a
              key={idx}
              className="certification-card"
              href={fileHref}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="certification-thumbnail">
                {cert.thumbnail ? (
                  <img src={cert.thumbnail} alt={`${cert.title} thumbnail`} />
                ) : (
                  <div className="cert-placeholder">PDF</div>
                )}
              </div>

              <div className="certification-content">
                <div className="certification-link">{cert.title}</div>
                {cert.issuer && <div className="certification-issuer">{cert.issuer}</div>}
                {cert.date && <div className="issued-date">{cert.date}</div>}
                {cert.description && <div className="cert-description">{cert.description}</div>}
              </div>

              <div className="certification-actions">
                <a className="download-btn" href={fileHref} download>
                  Download
                </a>
                <button
                  className="view-btn"
                  onClick={(e) => {
                    // open in new tab already handled by anchor, but keep button fallback
                    e.preventDefault();
                    window.open(fileHref, "_blank", "noopener");
                  }}
                >
                  View
                </button>
              </div>
            </a>
          ) : (
            <div key={idx} className="certification-card coming-soon" aria-hidden>
              <div className="certification-thumbnail">
                <div className="cert-placeholder">Soon</div>
              </div>

              <div className="certification-content">
                <div className="certification-link">{cert.title}</div>
                {cert.issuer && <div className="certification-issuer">{cert.issuer}</div>}
                {cert.date && <div className="issued-date">{cert.date}</div>}
                {cert.description && <div className="cert-description">{cert.description}</div>}
              </div>

              <div className="certification-actions">
                <button className="disabled-btn" disabled>
                  Coming soon
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Certifications;
