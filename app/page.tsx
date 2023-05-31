"use client";

import "dayjs/locale/ja";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider, styled } from "@mui/material/styles";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { useState } from "react";

import appTheme from "@/app/appTheme";
import AppBar from "@/app/components/molecules/AppBar";
import Articles from "@/app/components/organisms/Articles";

const Offset = styled("div")(({ theme }) => theme.mixins.toolbar);

export default function Home() {
  const [showGeneratedHTMLCard, setShowGeneratedHTMLCard] = useState(false);

  return (
    <ThemeProvider theme={appTheme}>
      <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="ja">
        <CssBaseline />
        <AppBar
          showGeneratedHTMLCard={showGeneratedHTMLCard}
          setShowGeneratedHTMLCard={setShowGeneratedHTMLCard}
        />
        <main>
          <Offset />
          <Articles
            showGeneratedHTMLCard={showGeneratedHTMLCard}
            setShowGeneratedHTMLCard={setShowGeneratedHTMLCard}
          />
        </main>
      </LocalizationProvider>
    </ThemeProvider>
  );
}
