"use client";
import { useState, useActionState } from "react";
import { TextField, Typography, Button, Alert } from "@mui/material";
import Account from "../account/Account";
import "./login.scss";
import Form from "next/form";
import loginActions from "./loaginActions";
import { redirect } from "next/navigation";
import { LoginBtnGoogle } from "./loginButoonGoogle";
import { authOptions } from "@/app/auth";

export default function Login() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [openModalAccount, setOpenModalAccount] = useState(false);
  const [error, setError] = useState<string | undefined>("");

  const

  const handleClose = () => {
    setOpenModalAccount(!open);
  };

  const handleLogin = async () => {
    console.log(email, password);
    const res = await loginActions(email, password);
    if (res.success === false) {
      setError(res.message);
    }
   return redirect('/dashboard')
  };

  return (
    <>
      {openModalAccount && (
        <Account open={openModalAccount} onClose={handleClose} />
      )}
      <div className="login">
        <Typography variant="h1">DIGIdocs</Typography>
        <Typography variant="subtitle1">Faça seu login:</Typography>
        {error && <Alert severity="error">{error}</Alert>}
        <TextField
          required
          id="outlined-required"
          label="e-mail"
          name="email"
          type="text"
          autoComplete="new-email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <TextField
          required
          label="senha"
          name="password"
          type="password"
          autoComplete="new-password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <Button fullWidth variant="contained" onClick={handleLogin}>
          Login
        </Button>
        <div className="footer-links">
          <Button variant="text">esqueci minha senha?</Button>
          <Button variant="text" onClick={() => setOpenModalAccount(true)}>
            Crie sua conta
          </Button>
        </div>
        <LoginBtnGoogle />
      </div>
    </>
  );
}
