import React from "react";

import Card from "@mui/material/Card";

import CardContent from "@mui/material/CardContent";

import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import "../../style/introduction.css";

function Outro() {
  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      justify="center"
      sx={{ mt: 5, mb: 2 }}
    >
      <Card sx={{ display: { xs: "column", md: "flex", lg: "flex" } }}>
        <Grid className="outroduction" sx={{ display: "flex " }}>
          <CardContent>
            <Typography className="text4">
              I like to learn new things, that's why I think coding is the right
              thing for me. <br /> I like to challenge and ponder myself whilst
              working.
            </Typography>
          </CardContent>
        </Grid>
      </Card>
    </Grid>
  );
}

export default Outro;
