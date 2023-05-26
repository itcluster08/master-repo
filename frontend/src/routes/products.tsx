import axios from "axios";
import { useEffect, useState } from "react";
import { IProduct } from "../types";
import { ProductItem } from "../components/product-item/product-item";
import { Grid } from "@mui/material";

const URL = "https://hackapi.aspire.su/products";

export const Products: React.FC = () => {
  const [data, setData] = useState<IProduct[]>();
  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get(URL)
        .then((response) => setData(response.data))
        .catch((error) => console.log(error));
    };

    fetchData();
  }, []);

  return (
    <>
      <Grid container spacing={2}>
        {data?.map((product) => (
          <Grid item xs={4}>
            <ProductItem product={product} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};
