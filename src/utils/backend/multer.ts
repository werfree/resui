import multer from "multer";
import { UPLOAD_DIR } from "../getEnvVariable";
import { promisify } from "util";
import { NextRequest } from "next/server";

const initialiseDiskStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, UPLOAD_DIR);
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({ storage: initialiseDiskStorage });

export const uploadMiddleware = promisify(upload.single("file"));
export type MulterRequest = NextRequest & { file?: Express.Multer.File }; // Extend NextRequest
