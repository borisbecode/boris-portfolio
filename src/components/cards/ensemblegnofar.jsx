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

export default function Ensemble() {
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
            image="https://zupimages.net/up/22/21/pyaz.png"
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
              <h1>The ASBL </h1>
            </Typography>
            <Typography className="subtitle">
              {" "}
              <p> Team project - April 2022 - React & Nodejs </p>
            </Typography>

            <Typography className="text">
              complete realization of a website for a real client . from the
              mock-up to the online publishing on a VPS
            </Typography>
            <Typography className="text">
              <br></br>
              there is a huge custom backoffice for the client.she can add,
              delete, modify all the articles.
            </Typography>
          </CardContent>
          <CardActions sx={{ display: "inline-flex", alignItems: "flex-end" }}>
            <Button
              variant="outlined"
              size="small"
              style={theme}
              target="_blank"
              href="https://www.ensemblegnofar.be/"
            >
              Website
            </Button>
            <Button
              disabled="true"
              variant="outlined"
              size="small"
              className="button"
              sx={{ ml: 2, mr: 1 }}
              style={theme}
              target="_blank"
              href="https://github.com/borisbecode/BookFacetrio"
            >
              Private
            </Button>
          </CardActions>
        </Grid>
      </Card>
    </Grid>
  );
}
