"use client";

import { CldUploadWidget, CloudinaryUploadWidgetInfo, CloudinaryUploadWidgetResults } from "next-cloudinary";
import { useState, useEffect } from "react";
import { Button, Box } from "@mui/material";
import { saveAvatar } from "./uploadAvatar";
import { redirectPage } from "@/lib/redirectPage";

interface AvatarUploaderProps {
  onUploadSuccess: (url: string) => void;
  id?: number | string;
  publicId: string;
  format?: string;
  type?: string;
}

type UserFilesProps = {
  id?: number | string;
  publicId: string | CloudinaryUploadWidgetResults;
  format?: string | undefined;
  type?: string;
}

export function UploadFile({ onUploadSuccess }: AvatarUploaderProps) {
  const [resource, setResource] = useState<string | CloudinaryUploadWidgetInfo | undefined>();
   const [clientSession, setClientSession] = useState<{}>({});
  
    const getRediretcPage = async () => {
      const client = await redirectPage();
      if (client) {
        return setClientSession(client);
      }
    };
  
    useEffect(() => {
      getRediretcPage();
    }, []);

  return (
    <CldUploadWidget
      signatureEndpoint="/api/sign-cloudinary-params"
      onSuccess={(result, { widget }) => {
        console.log({ result });
        setResource(result?.info); // { public_id, secure_url, etc }
        const data = {
          publicId: result?.info.public_id,
        }
        saveAvatar(data);
      }}
      onQueuesEnd={(result, { widget }) => {
        widget.close();
      }}
    >
      {({ open }) => {
        function handleOnClick() {
          setResource(undefined);
          open();
        }
        return (
          <Button className="btn-upload" onClick={handleOnClick}>
            Upload
          </Button>
        );
      }}
    </CldUploadWidget>
  );
}
