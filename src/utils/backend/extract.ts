import fs from "fs";
import pdfParse from "pdf-parse";
import Tesseract from "tesseract.js";

export async function extractTextFromPDF(pdfPath: string) {
  const pdfBuffer = fs.readFileSync(pdfPath);

  try {
    // Step 1: Try extracting text normally
    const pdfData = await pdfParse(pdfBuffer);

    if (pdfData.text.trim()) {
      console.log("✅ Extracted text from PDF (without OCR):");
      console.log(pdfData.text);
      return pdfData.text; // Return if text is found
    }
  } catch (error) {
    console.error("Error parsing PDF:", error);
  }

  // Step 2: OCR (for scanned PDFs)
  console.log("🔍 Running OCR...");
  const ocrResult = await Tesseract.recognize(pdfPath, "eng", {
    logger: (m) => console.log(m), // Logs OCR progress
  });

  console.log("✅ Extracted text from OCR:");
  console.log(ocrResult.data.text);
  return ocrResult.data.text;
}
