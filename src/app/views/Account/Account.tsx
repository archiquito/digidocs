"use client";
import { useActionState } from "react";
import Modal, { ModalProps } from "@/app/components/Modal";
import Form from "next/form";
import { Alert, Button, TextField, Typography } from "@mui/material";
import registerAction from "./registerActions";

type AccountProps = {
  name: "" | undefined;
  address: "";
  email: "";
  password: "";
};
export default function Account({ open, onClose }: ModalProps) {
  const [state, formAction, isPeding] = useActionState(registerAction, null);

  const handleClose = () => {
    onClose(false);
  };

  return (
    <Modal title="Crie sua conta" open={open} onClose={handleClose}>
      {state?.success === false && <Alert severity="error">{state.message}</Alert>}
      <Form action={formAction}>
        <div>
          <Typography>Nome:</Typography>
          <TextField
            name="name"
            type="text"
          />
        </div>
        <div>
          <Typography>E-mail:</Typography>
          <TextField
            name="email"
            type="email"
            autoComplete="new-email"
          />
        </div>
        <div>
          <Typography>Senha:</Typography>
          <TextField
            name="password"
            type="password"
            autoComplete="new-password"
          />
        </div>
        <Button onClick={handleClose}>Fechar</Button>
        <Button type="submit">Enviar</Button>
      </Form>
    </Modal>
  );
}
