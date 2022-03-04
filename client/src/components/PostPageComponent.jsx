import React, { useState, useEffect } from "react";
import axios from "axios";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import { Button, CardContent, CardHeader, Box, CardMedia, Divider, Stack, Avatar, CardActionArea, Typography} from "@mui/material";
import Grid from "@mui/material/Grid";
import NavBar from "./NavBar/NavBarComponent";
import Sidebar from "./SidebarComponent";
// icons
import IconButton from "@mui/material/IconButton";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import CommentOutlinedIcon from "@mui/icons-material/CommentOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

import CreateNewPost from "./PostCreateComponent";

// todo
// create ListingID page
// onClick event for modal form
// error and loading handling

// footer buttons
function FooterOptions({ Icon, title, color, clickEvent }) {
  return (
    <Button color={color} onClick={clickEvent} >
      {Icon && <Icon />}
      <Typography variant="button" color="text.primary" ml={1}> {title} </Typography>
    </Button>
  );
}

/**
 * render created posts
 */

function RenderCreatedPost(props) {
  return (
    <Card>
      <CardHeader
        avatar={
          <Box sx={{ xs:3 }}>
            <IconButton>
              <Avatar
                src={props.userImage}
                alt={props.username}
              />
            </IconButton>
          </Box>
        }
        action={
          <IconButton aria-label="settings">
            <MoreHorizIcon />
          </IconButton>
        }
        title={props.username}
        subheader={props.author}
      />
      <CardContent sx={{ mb: 2 }}>
        <Typography variant="p"> {props.title} </Typography>
        <Typography variant="p"> {props.text} </Typography>
      </CardContent>
      <CardMedia> {props.media} </CardMedia>
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

/**
 * Export PostPage
 */

function PostPage() {

  const [postApi, setPostApi] = useState(null);

  // get all posts
  useEffect(() => {
    axios.get(`/posts`)
    .then(response => {
      setPostApi(response.data)
    });
  }, []);

  if (!postApi) return "no posts to show";

  // list posts
  const postListDirectory = postApi.map(postApi => {
    return (
      <Grid item mt={2} key={postApi._id}>
        <RenderCreatedPost
          username={postApi._id}
          title={postApi.title}
          text={postApi.text}
          media={postApi.media}
          subheader={postApi.userInfo}
        />
      </Grid>
    );
  });

  return (
    <React.Fragment>
      <NavBar />
      <Container maxWidth="lg">
        <Grid container spacing={2} mt={3}>
          <Grid item sm={4}>
            <Sidebar />
          </Grid>
          <Grid item sm={8}>
            <CreateNewPost />
            {postListDirectory}
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
}

export default PostPage;