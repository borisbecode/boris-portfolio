import React from "react";
import AvatarView from "@sarge/avatar-view";
import "../../style/header.css";
import Box from "@mui/material/Box";

import Grid from "@mui/material/Grid";

const url =
  "https://d1a370nemizbjq.cloudfront.net/58986872-a638-490e-b3f0-b3347718fec7.glb";

export default function Header() {
  return (
    <div className="Header">
      <Grid container spacing={0}>
        <Grid item xs={12} md={4} className="boris">
          <h1>Hello , I'm Boris !</h1>
        </Grid>
        <Grid item xs={12} md={4}>
          <AvatarView
            style={{
              width: "400px",
              height: "400px",
              backgroundColor: "white",
              borderRadius: "100%",
            }}
            url={url}
            rotateAvatar
            eyeBlink
            headMovement
          />
        </Grid>
        <Grid item xs={0} md={4} className="end"></Grid>
      </Grid>
    </div>
  );
}
