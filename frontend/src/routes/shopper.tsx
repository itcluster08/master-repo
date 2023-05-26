import axios from "axios";
import { useEffect, useState } from "react";
import { IProduct } from "../types";
import { ProductItem } from "../components/product-item/product-item";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Rating,
  TextField,
  Typography,
} from "@mui/material";

const URL = "https://hackapi.aspire.su/";

export const Shopper: React.FC = () => {
  const [products, setProducts] = useState<IProduct[]>();
  const [shopper, setShopper] = useState<any>();
  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get(URL + "products")
        .then((response) => setProducts(response.data))
        .catch((error) => console.log(error));
    };

    const fetchShopper = async () => {
      await axios
        .get(
          URL + "shopper?userId=" + JSON.parse(localStorage.getItem("user")!).id
        )
        .then((response) => setShopper(response.data))
        .catch((error) => console.log(error));
    };

    fetchData().then((r) => {
      fetchShopper();
    });
  }, []);

  return (
    <>
      <Grid container spacing={2}>
        {shopper?.items.map((product, ind) => (
          <Grid item xs={12} lg={4}>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                sx={{ height: 140 }}
                image={products[product.product - 1].image}
                title={name}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {products[product.product - 1].name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Фрукты и Овощи
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {products[product.product - 1].price} Руб.{" "}
                  <span style={{ fontWeight: "bold" }}>{product.count} шт</span>{" "}
                  итого{" "}
                  <span style={{ fontWeight: "bolder" }}>
                    {" "}
                    {product.count * products[product.product - 1].price} Руб.
                  </span>
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  size="small"
                  onClick={axios("https://hackapi.aspire.su/removefromuser", {
                    method: "POST",
                    headers: {
                      "Content-Type":
                        "application/x-www-form-urlencoded;charset=UTF-8",
                    },
                    data: {
                      userId: 1,
                      product: ind,
                    },
                  })}
                >
                  Удалить
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}

        <br/>
        <Button>Оплатить</Button>
      </Grid>
    </>
  );
};
