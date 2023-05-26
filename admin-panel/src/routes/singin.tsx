import { Link } from "react-router-dom";
import { AuthLayout } from "../layouts/auth-layout";
import { SingInForm } from "../components/singin-form";
import { Typography } from "@mui/material";

type SingInProps = {};

export const SingIn = ({}: SingInProps) => {
  return (
    <AuthLayout>
      <Typography variant="h4">Вход</Typography>

      <SingInForm
        singIn={(username, password) => {
          console.log(username, password);
        }}
      />

      <Link
        style={{ marginTop: "1rem", textDecoration: "none" }}
        to={"/singup"}
      >
        У меня нет аккаунта
      </Link>
    </AuthLayout>
  );
};
