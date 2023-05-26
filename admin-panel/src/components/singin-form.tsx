import { useState } from "react";
import { Box, Button, TextField } from "@mui/material";

type SingInFormProps = {
  singIn: (username: string, password: string) => void;
};

export const SingInForm = ({ singIn }: SingInFormProps) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => singIn(username, password);

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
      <Button onClick={handleSubmit} variant="contained">
        Войти
      </Button>
    </Box>
  );
};
