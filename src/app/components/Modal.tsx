import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';


export interface ModalProps {
    open: boolean;
    onClose: (open: boolean) => void;
    children: React.ReactNode;
    title?: string | React.ReactNode;
}
export default function Modal({ open, onClose, children, title}: ModalProps) {

      const handleClose = () => {
        onClose(!open)
      };

    return (
        <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
         {title}
        </DialogTitle>
        <DialogContent>
          {children}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Fechar</Button>
          <Button onClick={handleClose} autoFocus>
            Enviar
          </Button>
        </DialogActions>
      </Dialog>
    )
}