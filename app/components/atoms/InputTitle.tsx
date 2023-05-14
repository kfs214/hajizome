import Typography from "@mui/material/Typography";

type props = {
  children: string;
};

export default function InputTitle({ children }: props) {
  return (
    <Typography variant="h4" component="div">
      {children}
    </Typography>
  );
}
