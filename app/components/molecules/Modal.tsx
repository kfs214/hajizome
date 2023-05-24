import Box from "@mui/material/Box";
import MUIModal from "@mui/material/Modal";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  open: boolean;
  closeModal: () => void;
};

const style = {
  position: "absolute" as const,
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "90%",
  boxSizing: "border-box",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function Modal({ children, open, closeModal }: Props) {
  return (
    <MUIModal
      open={open}
      onClose={closeModal}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>{children}</Box>
    </MUIModal>
  );
}
