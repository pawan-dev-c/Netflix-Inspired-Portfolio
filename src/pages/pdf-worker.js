// src/pdf-worker.js
import { pdfjs } from "react-pdf";

// ✅ Use the built-in worker shipped with pdfjs-dist
import workerSrc from "pdfjs-dist/build/pdf.worker.min.mjs?url";

pdfjs.GlobalWorkerOptions.workerSrc = workerSrc;
