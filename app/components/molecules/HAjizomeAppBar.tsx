"use client";

import Image from "next/image";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

export default function HAjizomeAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Image src="/images/funchan.svg" width={32} height={32} alt="logo" />
          <Typography
            variant="h6"
            component="div"
            ml={1}
            sx={{ flexGrow: 1, color: "white", fontWeight: "bold" }}
          >
            HAjizome2
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
