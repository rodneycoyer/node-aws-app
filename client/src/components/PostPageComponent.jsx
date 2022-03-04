import React, { useState, useEffect } from "react";
import axios from "axios";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import NavBar from "./NavBar/NavBarComponent";
import Sidebar from "./SidebarComponent";

import CreateNewPost from "./PostCreateComponent";
import PostFeedCard from "./PostCardComponent";

// todo
// create ListingID page
// onClick event for modal form
// error and loading handling

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
      })
      .catch(err => console.log(err));
  }, []);

  if (!postApi) return "no posts to show";

  // list posts
  const postListDirectory = postApi.map(postApi => {
    return (
      <Grid item mt={2} key={postApi._id}>
        <PostFeedCard
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
          <Grid item sm={7}>
            <CreateNewPost />
            {postListDirectory}
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
}

export default PostPage;