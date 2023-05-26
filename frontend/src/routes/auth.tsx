import { useState, useEffect } from "react";
import { Box, Button, ButtonGroup, Container } from "@mui/material";
import { LoginForm } from "../components/login-form";
import { RegistrationForm } from "../components/registration-form";
import { useNavigate } from "react-router-dom";
import ky from "ky";

const REGISTRATION_URL = "http://188.165.204.113:9411/api/oauth2/register";
const AUTHORIZATION_URL = "http://188.165.204.113:9411/api/oauth2/login";

export const Auth: React.FC = () => {
  const [mode, setMode] = useState<"login" | "registration">("login");

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const selectLoginMode = () => {
    setMode("login");
  };
  const selectRegistrationMode = () => {
    setMode("registration");
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const navigate = useNavigate();
      navigate("/home");
    }
  }, []);

  async function registration() {
    const data = {
      firstName: "John",
      secondName: "Doe",
      username: "johndoe",
      password: "password123",
    };

    fetch(REGISTRATION_URL, {
      method: "POST",
      mode: 'cors',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  async function authorization() {
    const json = await ky
      .post(AUTHORIZATION_URL, {
        json: { username: login, password },
      })
      .json();

    console.log(json);
  }

  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          minHeight: "100vh",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <ButtonGroup variant="outlined">
          <Button
            variant={mode === "login" ? "contained" : "outlined"}
            onClick={selectLoginMode}
          >
            войти
          </Button>
          <Button
            variant={mode === "registration" ? "contained" : "outlined"}
            onClick={selectRegistrationMode}
          >
            регистрация
          </Button>
        </ButtonGroup>

        {mode === "login" && (
          <LoginForm
            login={login}
            password={password}
            handleLogin={(login) => setLogin(login)}
            handlePassword={(password) => setPassword(password)}
            handleSubmit={() => authorization()}
          />
        )}
        {mode === "registration" && (
          <RegistrationForm
            login={login}
            password={password}
            firstName={firstName}
            lastName={lastName}
            handleFirstName={(firstName) => setFirstName(firstName)}
            handleLastName={(lastName) => setLastName(lastName)}
            handleLogin={(login) => setLogin(login)}
            handlePassword={(password) => setPassword(password)}
            handleSubmit={() => registration()}
          />
        )}
      </Box>
    </Container>
  );
};
