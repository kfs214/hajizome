"use client";

import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

import AppBar from "./components/molecules/AppBar";
import theme from "./theme";

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <CssBaseline />
        <header>
          <AppBar />
        </header>
        <main>
          <p>this is main tag</p>
        </main>
      </LocalizationProvider>
    </ThemeProvider>
  );
}
