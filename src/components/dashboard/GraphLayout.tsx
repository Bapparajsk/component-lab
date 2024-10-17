"use client";

import { ReactNode, useMemo, useState } from "react";
import { createTheme, ThemeProvider, Theme } from "@mui/material/styles";
import { Box } from "@mui/material";

import { useTheme } from "@/context/ThemeContext";

export const GraphLayout = ({  children }: { children: ReactNode }) => {

  const { theme } = useTheme();
  const [chatTheme, setChatTheme] = useState<Theme>(createTheme({ palette: { mode: "light", text: { primary: "#000000" } } }));

  useMemo(() => {
    if (theme == "dark") {
      setChatTheme(createTheme({ palette: { mode: "dark", text: { primary: "#ffffff" } } }));
    } else {
      setChatTheme(createTheme({ palette: { mode: "light", text: { primary: "#000000" } } }));
    }
  }, [theme]);

  return (
    <ThemeProvider theme={chatTheme}>
      <Box
        sx={{
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        {children}
      </Box>
    </ThemeProvider>
  );
};
