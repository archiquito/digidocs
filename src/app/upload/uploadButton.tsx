'use client'
import { CldUploadButton } from "next-cloudinary";
import handle from "./uploadFile";

export default function UploadButton() {
  return <CldUploadButton
  signatureEndpoint="/api/sign"
   uploadPreset="<Upload Preset>"
    className="btn-upload" />;
}
