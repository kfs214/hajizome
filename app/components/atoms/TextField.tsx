import Box from "@mui/material/Box";
import MUITextField from "@mui/material/TextField";

export default function TextField(
  props: React.ComponentProps<typeof MUITextField>
) {
  return (
    <Box component="form" autoComplete="off">
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <MUITextField variant="outlined" {...props} />
    </Box>
  );
}
