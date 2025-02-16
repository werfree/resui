import fs from "fs";
import path from "path";
import pdfParse from "pdf-parse";
import { createWorker } from "tesseract.js";

export const extractTextFromPDF = async (pdfPath: string) => {
  const pdfBuffer = fs.readFileSync(pdfPath);
  try {
    //   // Step 1: Try extracting text normally
    const pdfData = await pdfParse(pdfBuffer);
    if (pdfData.text.trim()) {
      console.log("✅ Extracted text from PDF (without OCR):");
      console.log(pdfData.text);
      // return pdfData.text; // Return if text is found
    }
  } catch (error) {
    console.error("Error parsing PDF:", error);
  }

  // // Step 2: OCR (for scanned PDFs)
  console.log("🔍 Running OCR...");
  const worker = await createWorker("eng", 1, {
    logger: (m) => console.log(m), // Add logger here
  });
  try {
    const {
      data: { text },
    } = await worker.recognize(pdfPath);

    console.log("✅ Extracted text from OCR:");
    return text;
  } catch (error) {
    console.error(error);
  } finally {
    await worker.terminate();
  }
  return "";
};
