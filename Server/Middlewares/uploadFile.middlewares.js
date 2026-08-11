import fs from "fs";
import cloudinary from "../Config/cloudinary.config.js";

export const uploadOnCloudinary = async (localFilePath) => {
  try {
    if (!localFilePath) return null;

    const result = await cloudinary.uploader.upload(localFilePath, {
      folder: "companies",
      resource_type: "image",
    });

    fs.unlinkSync(localFilePath);

    return result;
  } catch (error) {
    if (localFilePath && fs.existsSync(localFilePath)) {
      fs.unlinkSync(localFilePath);
    }

    throw error;
  }
};
