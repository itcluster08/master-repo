import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { IProduct } from "../../types";
import { Rating, TextField } from "@mui/material";
import { useState } from "react";
import axios from "axios";

interface IProductProps {
  product: IProduct;
}

export const ProductItem: React.FC<IProductProps> = ({ product }) => {
  const { name, description, price, image, id } = product;
  const [count, setCount] = useState<number>(1);

  function addInCard() {
    axios("https://hackapi.aspire.su/addtouser", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
      },
      data: {
        userId: JSON.parse(localStorage.getItem("user")!).id,
        product: id,
        count: count,
      },
    });
  }

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia sx={{ height: 140 }} image={image} title={name} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {price} Руб.
        </Typography>
      </CardContent>
      <Rating name="read-only" value={4} readOnly />
      <CardActions>
        <TextField
          value={count}
          defaultValue={1}
          type="number"
          onChange={(e) => setCount(parseInt(e.target.value))}
        />

        <Button onClick={addInCard} size="small">
          в корзину
        </Button>
      </CardActions>
    </Card>
  );
};
