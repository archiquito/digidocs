"use client";
import { useState } from "react";
import Modal,{ ModalProps} from "@/app/components/Modal";
import { TextField, Typography } from "@mui/material";

type AccountProps = {
        name: '',
        address: '',
        email:'',
        password:'',

}
export default function Account({ open, onClose }: ModalProps) {
    const [account, setAccount] = useState<AccountProps>({})

    const handleClose = () => {
        onClose(false);
    }

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setAccount({...account, ...{[event.target.name]: event.target.value}})
    }

    return (
        <Modal title="Crie sua conta" open={open} onClose={handleClose}>
            <>
            <div>
                <Typography>Nome:</Typography>
                <TextField onChange={handleChange} name="name" value={account.name} type="text" />
            </div>
            <div>
                <Typography>Endereço:</Typography>
                <TextField onChange={handleChange}  name="address" value={account.address} type="text" />
            </div>
            <div>
                <Typography>E-mail:</Typography>
                <TextField onChange={handleChange} name="email" value={account.email} type="text" />
            </div>
            <div>
                <Typography>Senha:</Typography>
                <TextField onChange={handleChange}  name="password" type="password" value={account.password} type="text" />
            </div>
            </>
        </Modal>
    )
}