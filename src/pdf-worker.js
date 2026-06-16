// src/pdf-worker.js
import { pdfjs } from "react-pdf";

// Directly point to the worker file shipped with pdfjs-dist
import workerSrc from "pdfjs-dist/build/pdf.worker.mjs?url";

// Tell react-pdf to use this worker
pdfjs.GlobalWorkerOptions.workerSrc = workerSrc;
