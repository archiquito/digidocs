"use client";
import React, { useEffect } from "react";
import { Box, Divider, Typography } from "@mui/material";
import { CldImage } from "next-cloudinary";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import EditDocumentIcon from "@mui/icons-material/EditDocument";
import { redirectPage } from "@/lib/redirectPage";
import "./dashboard.scss";
import { redirect } from "next/navigation";
import BarNavigation from "../components/BarNavigation";



export default function Dashboard() {
  
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
    <>
      <div className="dashboard">
        <BarNavigation name={clientSession.user?.name} />
        <Box>
          <CldImage
            alt=""
            src="AndreChiquitoCurriculum_lq3vif" // Use this sample image or upload your own via the Media Explorer
            width="500" // Transform the image: auto-crop to square aspect_ratio
            height="500"
            crop={{
              type: "auto",
              source: true,
            }}
          />
        </Box>
      </div>
    </>
  );
}
