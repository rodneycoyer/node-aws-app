import React from "react";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
// icons
import CreateIcon from "@mui/icons-material/Create"
import IconButton from "@mui/material/IconButton";
import InsertPhotoOutlinedIcon from "@mui/icons-material/InsertPhotoOutlined";
import SmartDisplayIcon from "@mui/icons-material/SmartDisplay";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import CommentOutlinedIcon from "@mui/icons-material/CommentOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

import logo from "../styles/logo.svg";

// createPost container
// onClick event for modal form
function CreatePost() {
  return (
    <Card sx={{ width: "35rem" }}>
      <CardContent>
        <Stack direction="row" alignItems="center" spacing={1}>
          <IconButton>
            <Avatar
              src={logo}
              alt={"avatar image"}
            />
          </IconButton>
          <TextField
            label="create a post"
            multiline
            maxRows={3}
            variant="outlined"
            size="large"
            sx={{ width: "28rem" }}
          />
        </Stack>
      </CardContent>
      <CardActionArea sx={{ pt: 1, pb: 1 }}>
        <Stack direction="row" spacing={1} justifyContent="space-around">
          <FooterOptions Icon={InsertPhotoOutlinedIcon} title="photo" color="primary" />
          <FooterOptions Icon={SmartDisplayIcon} title="video" color="success" />
          <FooterOptions Icon={InsertPhotoOutlinedIcon} title="event" color="warning" />
          <FooterOptions Icon={CreateIcon} title="write article" color="error" />
        </Stack>
      </CardActionArea>
    </Card>
  );
}

// footer buttons
const FooterOptions = ({ Icon, title, color }) => {
  return (
    <Button color={color} >
      {Icon && <Icon />}
      <Typography variant="button" color="text.primary" ml={1}>{title}</Typography>
    </Button>
  );
}

// render created post
function RenderPost() {
  return (
    <Card sx={{ width: "35rem" }}>
      <CardHeader
        avatar={
          <Box sx={{ xs:3 }}>
            <IconButton>
              <Avatar
                src={logo}
                alt={"avatar image"}
              />
            </IconButton>
          </Box>
        }
        action={
          <IconButton aria-label="settings">
            <MoreHorizIcon />
          </IconButton>
        }
        title="USERNAME"
        subheader="user@email.com"
      />
      <CardContent>
        <typography variant="p"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque corporis atque qui optio perferendis voluptas. </typography>
      </CardContent>
      <CardMedia />
      <Divider />
      <CardActionArea sx={{ pt: 1, pb: 1 }}>
        <Stack direction="row" spacing={1} ml={2} justifyContent="start">
          <FooterOptions Icon={ThumbUpOutlinedIcon} title="like" color="primary" />
          <FooterOptions Icon={CommentOutlinedIcon} title="comment" color="secondary" />
          <FooterOptions Icon={ShareOutlinedIcon} title="share" color="success" />
        </Stack>
      </CardActionArea>
    </Card>
  );
}

function StartPost() {
  return (
    <Stack direction={"column"} spacing={2}>
      <CreatePost />
      <RenderPost />
    </Stack>
  );
}

export default StartPost;