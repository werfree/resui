import fs from "fs/promises";
import path from "path";
import { UPLOAD_DIR } from "./getEnvVariable";

export const saveFile = async (file: File) => {
  const fileBuffer = Buffer.from(await file.arrayBuffer());
  const filePath = path.join(
    process.cwd(),
    UPLOAD_DIR,
    `${Date.now()}-${file.name}`
  );
  await fs.writeFile(filePath, fileBuffer);
};
