"use client";

import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { useState } from "react";

import AppBar from "@/app/components/molecules/AppBar";
import Articles from "@/app/components/organisms/Articles";
import theme from "@/app/theme";

export default function Home() {
  const [showGeneratedHTMLCard, setShowGeneratedHTMLCard] = useState(false);

  return (
    <ThemeProvider theme={theme}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <CssBaseline />
        <header>
          <AppBar
            showGeneratedHTMLCard={showGeneratedHTMLCard}
            setShowGeneratedHTMLCard={setShowGeneratedHTMLCard}
          />
        </header>
        <main>
          <Articles showGeneratedHTMLCard={showGeneratedHTMLCard} />
        </main>
      </LocalizationProvider>
    </ThemeProvider>
  );
}
