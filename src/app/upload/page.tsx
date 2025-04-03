'use client'
import React, { useEffect } from "react";
import { Box, Typography } from "@mui/material";
import BarNavigation from "../components/BarNavigation";
import Image from "next/image";
import { UploadFile } from "./uploadFile";
import { redirectPage } from "@/lib/redirectPage";
import { postFile } from "@/lib/files";
import "./upload.scss";

export default function Upload() {
      const [clientSession, setClientSession] = React.useState<{}>({});
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
    <div className="upload">
        <BarNavigation name="aaaa" />
        <Box>
            <Typography className="title">Faça seu upload de PDF:</Typography>
        </Box>
        <Box>
        {/* {user.avatar ? (
          <Image
            src={user.avatar}
            width={288}
            height={288}
            className="rounded-full"
            alt="Your avatar"
          />
        ) : (
          <div className="bg-gray-300 w-72 h-72 rounded-full" />
        )} */}
         
          <UploadFile onUploadSuccess={postFile} />
          </Box>
    </div>
  );
}
