import { saveFile } from "@/utils/backend/savefile";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const file = formData.get("file") as File;

    if (!file) {
      return NextResponse.json({ error: "No file uploaded" }, { status: 400 });
    }

    const fileName = await saveFile(file);

    return NextResponse.json({
      message: "File uploaded successfully!",
      filePath: `/uploads/${fileName}`,
    });
  } catch (error) {
    return NextResponse.json(
      { error: (error as Error).message },
      { status: 500 }
    );
  }
}

// **❗ Add this at the BOTTOM of the file**
export const config = { api: { bodyParser: false } };
