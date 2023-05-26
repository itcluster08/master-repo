import { Box, Container, CssBaseline, ThemeProvider } from "@mui/material";
import React from "react";
import { theme } from "../theme";
import Logo from "../assets/logo.svg";

type AuthLayoutProps = {
  children: React.ReactNode;
};

export const AuthLayout = ({ children }: AuthLayoutProps) => (
  <>
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <Container maxWidth="sm">
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            flexDirection: "column",
            minHeight: "100vh",
          }}
        >
          <img src={Logo} alt="logo" width={"50%"} />
          {children}
        </Box>
      </Container>
    </ThemeProvider>
  </>
);
