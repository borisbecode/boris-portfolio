import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import "../../style/cards.css";
import { theme } from "../intro/introduction";

export default function Getflix() {
  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      justify="center"
      sx={{ mt: 5, mb: 5 }}
    >
      <Card sx={{ display: { xs: "column", md: "flex", lg: "flex" } }}>
        <Grid className="picture">
          {" "}
          <CardMedia
            component="img"
            height="340"
            image="https://zupimages.net/up/22/07/ksqe.png"
            alt="getflix"
          />
        </Grid>
        <Grid
          className="main"
          sx={{ display: { xs: "column", md: "flex", lg: "flex" } }}
        >
          <CardContent>
            <Typography className="title">
              {" "}
              <h1>The Getflix</h1>
            </Typography>
            <Typography className="subtitle">
              {" "}
              <p> Team project - December 2021 - PHP & Javascript </p>
            </Typography>
            <Typography className="text">
              Creation of a fake Netflix with IMDB API. I especially realised
              the back end of the project in PHP with the cooperation of another
              team mate.
            </Typography>

            <Typography className="text">
              You can see the youtube videos if you log in!
            </Typography>
            <Typography className="text">
              <br /> Get acces : <br /> email : invite@gmail.com <br /> password
              : password
            </Typography>
          </CardContent>
          <CardActions sx={{ display: "inline-flex", alignItems: "flex-end" }}>
            <Button
              variant="outlined"
              size="small"
              style={theme}
              target="_blank"
              href="https://frealis.000webhostapp.com/index.php#"
            >
              Website
            </Button>
            <Button
              variant="outlined"
              size="small"
              className="button"
              sx={{ ml: 2, mr: 1 }}
              style={theme}
              target="_blank"
              href="https://github.com/borisbecode/GETFLIXPHP"
            >
              Github
            </Button>
          </CardActions>
        </Grid>
      </Card>
    </Grid>
  );
}
