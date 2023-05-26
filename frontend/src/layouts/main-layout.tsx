import { Box, Container } from "@mui/material";
import { MainNav } from "../components/main-nav";
import Logo from "../assets/logo.svg";
import { UserButton } from "../components/user-button";

interface iMainLayout {
  children: React.ReactNode;
}

export const MainLayout: React.FC<iMainLayout> = ({ children }) => {
  return (
    <Container maxWidth="md">
      <Box
        className="header"
        sx={{
          display: "flex",
          justifyContent: "space-between",
          maxHeight: "4rem",
          alignItems: "center",
          backgroundColor: "#e9eef2",
          borderRadius: "10px",
          position: "fixed",
          top: "0",
          left: "0",
          width: "100%",
          zIndex: "100",
        }}
      >
        <Box sx={{ width: "7rem" }}>
          <img
            src={Logo}
            alt="logo"
            style={{ width: "100%", height: "100%" }}
          />
        </Box>
        <MainNav />
        <UserButton />
      </Box>

      <Box
        className="content"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
          marginTop: "5rem",
          minHeight: "100vh",
          borderRadius: "10px",
          padding: "1rem",
        }}
      >
        {children}
      </Box>
    </Container>
  );
};
