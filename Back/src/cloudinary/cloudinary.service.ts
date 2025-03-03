import { Injectable } from "@nestjs/common";
import {
  UploadApiErrorResponse,
  UploadApiResponse,
  v2 as cloudinary,
} from "cloudinary";
const toStream = require("buffer-to-stream");

@Injectable()
export class CloudinaryService {
  uploadImage(
    file: Express.Multer.File,
    filename?: string
  ): Promise<UploadApiResponse | UploadApiErrorResponse> {
    return new Promise((resolve, reject) => {
      const upload = cloudinary.uploader.upload_stream(
        { public_id: filename, folder: "todoApp/" },
        (error, result) => {
          if (error) return reject(error);
          if (result) {
            resolve(result);
          } else {
            reject(new Error("Upload result is undefined"));
          }
        }
      );

      toStream(file.buffer).pipe(upload);
    });
  }
  async deleteFile(publicId: string): Promise<void> {
    await cloudinary.uploader.destroy(publicId);
  }
}
