"use client";

import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

import theme from "./theme";
import AppBar from "./components/molecules/AppBar";

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
