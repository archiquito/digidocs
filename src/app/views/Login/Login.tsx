"use client";
import { useState } from "react";
import { TextField, Typography, Button } from "@mui/material";
import Account from "../Account/Account";
import "./login.scss";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [openModalAccount, setOpenModalAccount] = useState(false);

  const handleClose = () => {
    setOpenModalAccount(!open);
  }
  return (
    <>
    {openModalAccount && <Account open={openModalAccount} onClose={handleClose} />}
    <div className="login">
      <Typography variant="h1">DIGIdocs</Typography>
      <Typography variant="subtitle1">Faça seu login:</Typography>
      <TextField
        required
        id="outlined-required"
        label="e-mail"
        type="text"
        value={email}
        autoComplete="new-email"
        onChange={(e) => { setEmail(e.target.value)}}
      />
      <TextField
        required
        id="outlined-required"
        label="senha"
        type="password"
        value={password}
        autoComplete="new-password"
        onChange={(e) => { setPassword(e.target.value)}}
      />
      <div className="footer-links">
        <Button variant="text">esqueci minha senha?</Button>
        <Button variant="text" onClick={() => setOpenModalAccount(true)}>Crie sua conta</Button>
      </div>
    </div>
    </>
  );
}
