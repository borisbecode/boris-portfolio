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
      <div class="custom-shape-divider-top-1645269831">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            opacity=".25"
            class="shape-fill"
          ></path>
          <path
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
            opacity=".5"
            class="shape-fill"
          ></path>
          <path
            d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
            class="shape-fill"
          ></path>
        </svg>
      </div>
      <Grid container spacing={0}>
        <Grid
          item
          xs={12}
          md={4}
          justifyContent="center"
          alignItems="center"
          sx={{ alignSelf: "center" }}
        >
          <h1>Hello , I'm Boris !</h1>
        </Grid>
        <Grid item xs={12} md={4} justify="center">
          <Box display="flex" justifyContent="center" alignItems="center">
            <AvatarView
              style={{
                width: "300px",
                height: "300px",
                backgroundImage:
                  "url(https://media.istockphoto.com/photos/workplace-desk-with-computer-at-window-in-office-at-home-in-apartment-picture-id1182529932?k=20&m=1182529932&s=612x612&w=0&h=2ALhIilE2bWZwZTjRlTRrlM9cdlGW4IDkYtpuu2jtuk=)",
                borderRadius: "100%",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
              url={url}
              rotateAvatar
              eyeBlink
              headMovement
            />
          </Box>
        </Grid>
        <Grid item xs={12} md={4} sx={{ alignSelf: "flex-end" }}>
          {" "}
          <h2>Web developer junior at Becode</h2>{" "}
        </Grid>
      </Grid>
    </div>
  );
}
