import { TextField, Button, Box } from "@mui/material";

interface IRegistrationForm {
  login: string;
  password: string;
  firstName: string;
  lastName: string;
  handleLogin: (login: string) => void;
  handlePassword: (password: string) => void;
  handleFirstName: (firstName: string) => void;
  handleLastName: (lastName: string) => void;
  handleSubmit: () => void;

}

export const RegistrationForm: React.FC<IRegistrationForm> = ({
  login,
  password,
  firstName,
  lastName,
  handleLogin,
  handlePassword,
  handleFirstName,
  handleLastName,
  handleSubmit
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
        label="Имя"
        variant="outlined"
        type="text"
        value={firstName}
        onChange={(event) => handleFirstName(event.target.value)}
      />
      <TextField
        fullWidth
        label="Фамилия"
        variant="outlined"
        type="text"
        value={lastName}
        onChange={(event) => handleLastName(event.target.value)}
      />
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
        Зарегистрироваться
      </Button>
    </Box>
  );
};
