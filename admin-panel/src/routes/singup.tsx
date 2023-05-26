import { Link } from "react-router-dom";
import { AuthLayout } from "../layouts/auth-layout";
import { SingUpForm } from "../components/singup-form";
import { Typography } from "@mui/material";

type SingupProps = {};

export const SingUp = ({}: SingupProps) => {
  return (
    <AuthLayout>
      <Typography variant="h4">Регистрация</Typography>

      <SingUpForm
        singUp={({ username, password, firstName, secondName }) => {
          console.log(username, password, firstName, secondName);
        }}
      />

      <Link
        style={{ marginTop: "1rem", textDecoration: "none" }}
        to={"/singin"}
      >
        У меня уже есть аккаунт
      </Link>
    </AuthLayout>
  );
};
