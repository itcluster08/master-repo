import { Button, ButtonGroup } from "@mui/material";
import { useNavigate } from "react-router-dom";

export const MainNav: React.FC = () => {
  const navigate = useNavigate();
  return (
    <ButtonGroup variant="text">
      <Button onClick={() => navigate("/home")}>Главная</Button>
      <Button onClick={() => navigate("/products")}>Продукты</Button>
      <Button onClick={() => navigate("/shopper")}>Корзина</Button>
    </ButtonGroup>
  );
};
