"use client";

import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

import AppBar from "@/app/components/molecules/AppBar";
import Articles from "@/app/components/organisms/Articles";
import theme from "@/app/theme";

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <CssBaseline />
        <header>
          <AppBar />
        </header>
        <main>
          <Articles />
        </main>
      </LocalizationProvider>
    </ThemeProvider>
  );
}
