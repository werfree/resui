import { extractTextFromPDF } from "@/utils/backend/extract";
import { getResumeInsight } from "@/utils/backend/getInsight";
import { initializeUploadsDirectory, saveFile } from "@/utils/backend/savefile";
import { NextRequest, NextResponse } from "next/server";

initializeUploadsDirectory();

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const file = formData.get("resume") as File;

    if (!file) {
      return NextResponse.json({ error: "No file uploaded" }, { status: 400 });
    }

    const { filePath } = await saveFile(file);
    const resumeText = await extractTextFromPDF(filePath);
    const insight = await getResumeInsight(resumeText);
    console.log("Insight", insight);

    return NextResponse.json({
      message: insight,
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: (error as Error).message },
      { status: 500 }
    );
  }
}

// **❗ Add this at the BOTTOM of the file**
export const config = { api: { bodyParser: false } };
