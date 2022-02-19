import React from "react";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import "../../style/introduction.css";

import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

import { createMuiTheme, ThemeProvider } from "@material-ui/core";

export const theme = {
  backgroundColor: " #e3b587",
  Color: "#000000",
};

function Introduction() {
  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      justify="center"
      sx={{ mt: 5 }}
    >
      <Card sx={{ display: { xs: "column", md: "flex", lg: "flex" } }}>
        <Grid className="introduction" sx={{ display: "flex " }}>
          <CardContent>
            <Typography className="title">
              {" "}
              <h1>Presentation </h1>
            </Typography>

            <Typography className="text">Welcome to my portfolio !</Typography>
            <Typography className="text3">
              I am looking for an internship for mid-April for a duration of two
              to three months.
            </Typography>

            <Typography className="text2">
              Here are my projects below, I wish you a good discovery and see
              you soon!
            </Typography>

            <CardActions sx={{ justifyContent: "space-around", mt: 3 }}>
              <Button
                variant="outlined"
                size="small"
                style={theme}
                target="_blank"
                href="https://drive.google.com/drive/folders/11avxEUuSsRYbgYULM382YvifcmiEwCvq?usp=sharing"
              >
                CV
              </Button>
              <Button
                style={theme}
                variant="outlined"
                size="small"
                className="button"
                sx={{ ml: 2, mr: 1 }}
                target="_blank"
                href="www.linkedin.com/in/boris-lorenzonetto"
              >
                Linkedin
              </Button>
            </CardActions>
          </CardContent>
        </Grid>
      </Card>
    </Grid>
  );
}

export default Introduction;
