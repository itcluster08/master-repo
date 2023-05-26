import { useState, useEffect } from "react";
import { Alert, Box, Button, ButtonGroup, Container } from "@mui/material";
import { LoginForm } from "../components/login-form";
import { RegistrationForm } from "../components/registration-form";
import { useNavigate } from "react-router-dom";
import axios from "axios";
// https://hackapi.aspire.su/
const REGISTRATION_URL = "https://hackapi.aspire.su/register";
const AUTHORIZATION_URL = "https://hackapi.aspire.su/login";

export const Auth: React.FC = () => {
  const [mode, setMode] = useState<"login" | "registration">("login");

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const selectLoginMode = () => {
    setMode("login");
  };
  const selectRegistrationMode = () => {
    setMode("registration");
  };

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      navigate("/home");
    }
  }, []);

  async function registration() {
    const data = {
      firstName,
      secondName: lastName,
      username: login,
      password,
    };

    axios(REGISTRATION_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
      },
      data: data,
    })
      .then((data) => {
        const code = data.data.statusCode || data.status;
        console.log(data);

        if (code === 200) {
          localStorage.setItem("user", JSON.stringify(data.data));
          navigate("/home");
        } else {
          setErrorMessage(data.data.message);
        }
      })
      .catch((error) => {
        console.error("Error:", error.response.data);
        setErrorMessage(error.response.data.message);
      });
  }

  async function authorization() {
    const data = {
      username: login,
      password,
    };

    axios(AUTHORIZATION_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
      },
      data: data,
    })
      .then((data) => {
        const code = data.data.statusCode || data.status;

        if (code === 200) {
          localStorage.setItem("user", JSON.stringify(data.data));
          navigate("/home");
        } else {
          setErrorMessage(data.data.message);
        }
      })
      .catch((error) => {
        setErrorMessage(error.response.data.message);
        console.error("Error:", error.response.data);
      });
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

        {errorMessage && (
          <Alert sx={{ mt: 1 }} severity="error">
            {errorMessage}
          </Alert>
        )}
      </Box>
    </Container>
  );
};
