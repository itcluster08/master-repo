import { useState } from "react";
import { Box, Button, TextField } from "@mui/material";
import { ISingUp } from "../types";

type SingUpFormProps = {
  singUp: ({}: ISingUp) => void;
};

export const SingUpForm: React.FC<SingUpFormProps> = ({ singUp }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [secondName, setSecondName] = useState("");
  const [creditCard, setCreditCard] = useState("");

  const handleSubmit = () =>
    singUp({ username, password, firstName, secondName, creditCard });

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
        onChange={(event) => setFirstName(event.target.value)}
      />
      <TextField
        fullWidth
        label="Фамилия"
        variant="outlined"
        type="text"
        value={secondName}
        onChange={(event) => setSecondName(event.target.value)}
      />
      <TextField
        fullWidth
        label="Логин"
        variant="outlined"
        type="text"
        value={username}
        onChange={(event) => setUsername(event.target.value)}
      />
      <TextField
        fullWidth
        label="Пароль"
        variant="outlined"
        type="password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />
      <TextField
        fullWidth
        label="Номер карты"
        variant="outlined"
        type="number"
        value={creditCard}
        onChange={(event) => setCreditCard(event.target.value)}
      />

      <Button onClick={handleSubmit} variant="contained">
        Зарегистрироваться
      </Button>
    </Box>
  );
};
