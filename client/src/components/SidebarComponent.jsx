import React from "react";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import logo from "../styles/logo.svg";

function RenderUserCard() {
  return (
    <Card sx={{ maxWidth: "20rem" }}>
      <CardMedia
        component={"img"}
        image={logo}
        alt="react logo"
        sx={{
          position: "relative",
          mb: "3rem",
          height: "5rem"
        }}
      />
      <Box
        sx={{
          position: "absolute",
          ml: "7.25rem",
          mt: "-6rem",
        }}
      >
        <Avatar
          alt="react logo"
          src="../components/NavBar/logo192.png"
          sx={{ width: 90, height: 90, border: '0.1em solid lightGray' }}
        />
      </Box>
      <CardContent>
        <Stack spacing={2} direction="column">
          <Box>
            <Typography variant="h6">
              USERNAME
            </Typography>
            <Typography variant="overline">example@gmail.com</Typography>
            <Typography mt={1} variant="body2" color="text.secondary">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Officiis ab dolor eligendi maxime nesciunt aspernatur voluptatum
              minima explicabo fuga consequuntur.
            </Typography>
          </Box>
          <Divider />
          <Box>
            <Typography variant="body2">
              Connections
            </Typography>
          </Box>
          <Box>
            <Typography variant="body2">
              Chat Rooms
            </Typography>
          </Box>
          <Divider />
          <Box>
            <Typography variant="body2">
              Liked Posts
            </Typography>
          </Box>
        </Stack>
      </CardContent>
    </Card>
  );
}

function RenderDiscoverMoreCard() {
  return (
    <Card sx={{ maxWidth: "20rem"}}>
      <CardContent>
        <Typography variant="body2"> Discover More </Typography>
      </CardContent>
    </Card>
  );
}

function Sidebar() {
  return (
    <React.Fragment>
      <Stack spacing={2}>
        <RenderUserCard />
        <RenderDiscoverMoreCard />
      </Stack>
    </React.Fragment>
  );
}

export default Sidebar;