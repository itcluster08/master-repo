import { TextField, Button, Box } from "@mui/material";

interface ILoginForm {
  login: string;
  password: string;
  handleLogin: (login: string) => void;
  handlePassword: (password: string) => void;
  handleSubmit: () => void;
}

export const LoginForm: React.FC<ILoginForm> = ({
  login,
  password,
  handleLogin,
  handleSubmit,
  handlePassword,
}) => {
  return (
    <Box
      component="form"
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        "& > :not(style)": { mt: 1 },
      }}
    >
      <TextField
        fullWidth
        label="Логин"
        variant="outlined"
        type="text"
        value={login}
        onChange={(event) => handleLogin(event.target.value)}
      />
      <TextField
        fullWidth
        label="Пароль"
        variant="outlined"
        type="password"
        value={password}
        onChange={(event) => handlePassword(event.target.value)}
      />
      <Button onClick={handleSubmit} variant="contained">
        Войти
      </Button>
    </Box>
  );
};
