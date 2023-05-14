"use client";

import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

import HAjizomeAppBar from "./components/molecules/HAjizomeAppBar";
import theme from "./theme";

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <header>
        <HAjizomeAppBar />
      </header>
      <main>
        <p>this is main tag</p>
      </main>
    </ThemeProvider>
  );
}
