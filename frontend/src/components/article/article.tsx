import { Typography } from "@mui/material";

interface IArticle {
  title: string;
  text: string;
}

export const Article: React.FC<IArticle> = ({ title, text }) => {
  return (
    <>
      <Typography variant="h5">{title}</Typography>
      <Typography variant="body1">{text}</Typography>
    </>
  );
};
