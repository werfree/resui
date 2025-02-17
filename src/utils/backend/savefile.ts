import fsPromise from 'fs/promises';
import fs from 'fs';
import path from 'path';
import { UPLOAD_DIR } from '../getEnvVariable';

export const initializeUploadsDirectory = () => {
  if (!fs.existsSync(UPLOAD_DIR)) {
    fs.mkdirSync(UPLOAD_DIR, { recursive: true });
    console.log('✅ Uploads directory created:', UPLOAD_DIR);
  }
};

export const saveFile = async (file: File) => {
  const fileBuffer = Buffer.from(await file.arrayBuffer());
  const filePath = path.join(
    process.cwd(),
    UPLOAD_DIR,
    `${Date.now()}-${file.name}`,
  );
  await fsPromise.writeFile(filePath, fileBuffer);
  return { filePath };
};
