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

export default function Data() {
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
            image="https://zupimages.net/up/22/07/83wf.png"
            alt="data"
          />
        </Grid>
        <Grid
          className="main"
          sx={{ display: { xs: "column", md: "flex", lg: "flex" } }}
        >
          <CardContent>
            <Typography className="title">
              {" "}
              <h1>The Data</h1>
            </Typography>
            <Typography className="subtitle">
              {" "}
              <p> Individual project - February 2022 - Angular & Firebase </p>
            </Typography>
            <Typography className="text">
              Creation of a complete wedding website for a client.
            </Typography>

            <Typography className="text">
              I realized it with Angular and Firebase, i learned a lot there!
            </Typography>
            <Typography className="text">
              <br /> Get acces : <br /> email : email@gmail.com <br /> password
              : password
            </Typography>
          </CardContent>
          <CardActions sx={{ display: "inline-flex", alignItems: "flex-end" }}>
            <Button
              variant="outlined"
              size="small"
              style={theme}
              target="_blank"
              href="https://borisbecode.github.io/data-ajax/"
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
              href="https://github.com/borisbecode/data-ajax"
            >
              Github
            </Button>
          </CardActions>
        </Grid>
      </Card>
    </Grid>
  );
}
