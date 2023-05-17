import Box from "@mui/material/Box";
import MUITextField from "@mui/material/TextField";

export default function TextField(
  props: React.ComponentProps<typeof MUITextField>
) {
  return (
    <Box component="form" autoComplete="off">
      <MUITextField variant="outlined" {...props} />
    </Box>
  );
}
