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
        <Grid className="picture">
          {" "}
          <CardMedia
            component="img"
            height="340"
            image="https://zupimages.net/up/22/07/0865.png"
            alt="green iguana"
          />
        </Grid>
        <Grid
          className="main"
          sx={{ display: { xs: "column", md: "flex", lg: "flex" } }}
        >
          <CardContent>
            <Typography className="title">
              {" "}
              <h1>The Fakebook</h1>
            </Typography>
            <Typography className="subtitle">
              {" "}
              <p> Team project - January 2022 - React & MaterialUi </p>
            </Typography>
            <Typography className="text">
              Creation of a fake facebook. Make with React , NodeJs , MaterialUi
            </Typography>

            <Typography className="text">
              This is my first experience with React, i understood the power of
              components there.
            </Typography>
            <Typography className="text">
              <br /> Get acces : <br /> email : test123@gmail.com <br />{" "}
              password : test123
            </Typography>
          </CardContent>
          <CardActions sx={{ display: "inline-flex", alignItems: "flex-end" }}>
            <Button
              variant="outlined"
              size="small"
              style={theme}
              target="_blank"
              href="https://friendlybooktrio.herokuapp.com/"
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
              href="https://github.com/borisbecode/BookFacetrio"
            >
              Github
            </Button>
          </CardActions>
        </Grid>
      </Card>
    </Grid>
  );
}
