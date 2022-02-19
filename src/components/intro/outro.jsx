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
              I love to learn new things, that's why coding is the right thing
              for me. <br /> And i like the challenge and the reflection that
              code brings me.
            </Typography>
          </CardContent>
        </Grid>
      </Card>
    </Grid>
  );
}

export default Outro;
