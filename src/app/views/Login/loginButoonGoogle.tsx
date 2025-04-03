"use client";

import { Button } from "@mui/material";
import GoogleIcon from '@mui/icons-material/Google';
import { signIn } from "next-auth/react";

export function LoginBtnGoogle() {
  return (
    <Button fullWidth variant="contained" onClick={() => signIn("google", { callbackUrl: "/dashboard" })} startIcon={<GoogleIcon />}>
      Login com Google
    </Button>
  );
}
