import React, { useState, useEffect } from "react";
import axios from "axios";

import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Sidebar from "./SidebarComponent";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography"
// icons
import Avatar from "@mui/material/Avatar";
import CreateIcon from "@mui/icons-material/Create";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import InsertPhotoOutlinedIcon from "@mui/icons-material/InsertPhotoOutlined";
import SmartDisplayIcon from "@mui/icons-material/SmartDisplay";

import PostFeedCard from "./PostCardComponent";
import Layout from "./LayoutComponent";

// todo
// create ListingID page
// error and loading handling

// cardActionArea buttons
function FooterOptions({ Icon, title, color, clickEvent }) {
  return (
    <Button color={color} onClick={clickEvent} >
      {Icon && <Icon />}
      <Typography color="text.primary" ml={1}> {title} </Typography>
    </Button>
  );
}

/**
 * Export PostPage
 */

function PostPage(props) {
  // set data
  const [posts, setPosts] = useState([]);
  // create post state
  const [input, setInput] = useState("");

  const handleChange = (event) => {
    event.preventDefault();
    setInput(event.target.value);
  }

  // get all posts
  useEffect(() => {
    axios.get(`/posts`)
      .then(response => {
        setPosts(response.data)
        console.log(response)
      })
      .catch(err => alert(err));
  }, []);

  // list posts
  const postListDirectory = posts.map(posts => {
    return (
      <Grid item mt={2} key={posts._id}>
        <PostFeedCard
          username={posts._id}
          text={posts.text}
          media={posts.media}
          subheader={posts.userInfo}
        />
      </Grid>
    );
  });

  // create new post
  const handleSubmit = (event) => {
    event.preventDefault();
    // form key pairs
    const textFieldData = new FormData();
    textFieldData.append("text", input)
    // add other pairs here

    const postContent = {
      text: input,
      media: "",
      headers: {
        "Content-Type": "multipart/form-data"
      }
    }
    axios.post(`/posts`, postContent)
      .then(response => {
        console.log(response);
        setPosts([response.data, ...posts])
        setInput("")
      })
      .catch(err => alert(err));
  }

  return (
    <Layout>
      <Container maxWidth="lg">
        <Grid container spacing={2} mt={3} >
          <Grid item sm={4}>
            <Sidebar />
          </Grid>
          <Grid item sm={8} md={7}>

            <Card sx={{ pt: 3 }}>
              <CardContent>
                <Stack direction="row" alignItems="center" spacing={1}>
                  <IconButton>
                    <Avatar
                      src={props.userImage}
                      alt={props.username}
                    />
                  </IconButton>
                  <TextField
                    value={input}
                    onChange={handleChange}
                    required
                    name="create a post"
                    label="create a post"
                    multiline
                    maxRows={3}
                    variant="outlined"
                    size="large"
                    sx={{ width: "90%" }}
                    InputProps={{
                      startAdornment:
                        <InputAdornment position="start">
                          <CreateIcon color="error" />
                        </InputAdornment>
                    }}
                  />
                </Stack>
              </CardContent>
              <CardActionArea sx={{ pt: 1, pb: 1 }}>
                <Stack direction="row" spacing={1} justifyContent="space-around">
                  <FooterOptions Icon={InsertPhotoOutlinedIcon} title="photo" aria-label="upload-photo" color="primary" />
                  <FooterOptions Icon={SmartDisplayIcon} title="video" aria-label="upload-video" color="success" />
                  <FooterOptions Icon={InsertPhotoOutlinedIcon} title="event" aria-label="create-event" color="warning" />
                  <FooterOptions Icon={CreateIcon} title="Post" color="error" aria-label="submit-post" clickEvent={handleSubmit}/>
                </Stack>
              </CardActionArea>
            </Card>
            {/* render posts */}
            {postListDirectory}
          </Grid>
        </Grid>
      </Container>
    </Layout>
  );
}

export default PostPage;