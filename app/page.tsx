"use client";

import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

import theme from "./theme";
import AppBar from "./components/molecules/AppBar";
import TextField from "./components/molecules/TextField";

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <header>
        <AppBar />
      </header>
      <main>
        <p>this is main tag</p>
      </main>
    </ThemeProvider>
  );
}
