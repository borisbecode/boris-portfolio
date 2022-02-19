import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import "../../style/cards.css";

export default function Fakebook() {
  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      justify="center"
      sx={{ mt: 5, mb: 5 }}
    >
      <Card sx={{ display: { xs: "column", md: "flex", lg: "flex" } }}>
        <Grid>
          {" "}
          <CardMedia
            component="img"
            height="340"
            image="https://picsum.photos/200/300"
            alt="green iguana"
          />
        </Grid>
        <Grid className="main" sx={{ display: "flex " }}>
          <CardContent>
            <Typography className="title">
              {" "}
              <h1>The Fakebook</h1>
            </Typography>
            <Typography className="subtitle">
              {" "}
              <p> Individual project - November 2021 </p>
            </Typography>
            <Typography className="text">
              Creation of a RPG game with Javascript .
            </Typography>

            <Typography className="text">
              I learning a lot about the Object oriented in this exercice .
            </Typography>
          </CardContent>
          <CardActions sx={{ display: "inline-flex", alignItems: "flex-end" }}>
            <Button variant="outlined" size="small">
              Website
            </Button>
            <Button
              variant="outlined"
              size="small"
              className="button"
              sx={{ ml: 2, mr: 1 }}
            >
              Github
            </Button>
          </CardActions>
        </Grid>
      </Card>
    </Grid>
  );
}
